export type WeatherRisk = "低" | "中" | "高";

export type DistrictWeather = {
  name: string;
  latitude: number;
  longitude: number;
  temp: number;
  rain: number;
  elevation: number;
  humidity: number;
  risk: WeatherRisk;
  hourlyTemperature: number[];
  weeklyRain: number[];
};

export type BeijingWeatherSnapshot = {
  districts: DistrictWeather[];
  updatedAt: string;
  source: "live" | "cache" | "fallback";
};

const locations = [
  ["东城区", 39.9288, 116.4160, 48], ["西城区", 39.9123, 116.3659, 52],
  ["朝阳区", 39.9219, 116.4436, 42], ["海淀区", 39.9593, 116.2981, 88],
  ["丰台区", 39.8584, 116.2867, 61], ["石景山区", 39.9057, 116.2236, 136],
  ["门头沟区", 39.9372, 116.1020, 782], ["房山区", 39.7489, 116.1433, 318],
  ["通州区", 39.9025, 116.6564, 24], ["顺义区", 40.1302, 116.6547, 39],
  ["昌平区", 40.2208, 116.2312, 214], ["大兴区", 39.7289, 116.3414, 36],
  ["怀柔区", 40.3160, 116.6318, 486], ["平谷区", 40.1406, 117.1214, 173],
  ["密云区", 40.3763, 116.8434, 524], ["延庆区", 40.4567, 115.9756, 612],
] as const;

const fallbackTemperature = [27.6, 27.4, 28.1, 26.9, 27.2, 26.7, 24.8, 25.9, 27.0, 26.4, 25.6, 27.3, 24.2, 25.1, 23.9, 22.8];
const fallbackRain = [6.2, 5.8, 8.6, 10.4, 7.9, 9.5, 18.2, 15.6, 7.1, 9.1, 12.8, 6.9, 19.6, 13.7, 22.4, 17.9];
const fallbackHumidity = [67, 66, 69, 72, 70, 71, 81, 78, 68, 73, 76, 67, 83, 77, 85, 82];
const baselineHourly = [25.2, 24.7, 24.3, 24.1, 24.8, 26.0, 27.4, 28.6, 29.3, 28.9, 27.8, 26.6];
const baselineWeekly = [4.2, 0.8, 12.6, 21.4, 7.8, 2.1, 9.5];
const CACHE_KEY = "lingjing-beijing-weather-v1";
const CACHE_TTL = 30 * 60 * 1000;

const riskFor = (rain: number, humidity: number): WeatherRisk => rain >= 15 || humidity >= 82 ? "高" : rain >= 8 || humidity >= 73 ? "中" : "低";

export function createFallbackWeather(): BeijingWeatherSnapshot {
  return {
    source: "fallback",
    updatedAt: new Date().toISOString(),
    districts: locations.map(([name, latitude, longitude, elevation], index) => ({
      name, latitude, longitude, elevation,
      temp: fallbackTemperature[index], rain: fallbackRain[index], humidity: fallbackHumidity[index],
      risk: riskFor(fallbackRain[index], fallbackHumidity[index]),
      hourlyTemperature: baselineHourly.map((value) => value + (fallbackTemperature[index] - 26.3)),
      weeklyRain: baselineWeekly,
    })),
  };
}

type OpenMeteoLocation = {
  current?: { temperature_2m?: number; relative_humidity_2m?: number; precipitation?: number; time?: string };
  hourly?: { time?: string[]; temperature_2m?: number[]; precipitation?: number[] };
  daily?: { precipitation_sum?: number[] };
};

function readCache(): BeijingWeatherSnapshot | null {
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null") as BeijingWeatherSnapshot | null;
    if (!cached?.districts?.length || Date.now() - Date.parse(cached.updatedAt) > CACHE_TTL) return null;
    return { ...cached, source: "cache" };
  } catch { return null; }
}

function writeCache(snapshot: BeijingWeatherSnapshot) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(snapshot)); } catch { /* storage can be disabled */ }
}

export async function loadBeijingWeather(signal?: AbortSignal): Promise<BeijingWeatherSnapshot> {
  const fallback = createFallbackWeather();
  const latitude = locations.map((item) => item[1]).join(",");
  const longitude = locations.map((item) => item[2]).join(",");
  const params = new URLSearchParams({
    latitude, longitude,
    current: "temperature_2m,relative_humidity_2m,precipitation",
    hourly: "temperature_2m,precipitation",
    daily: "precipitation_sum",
    timezone: "Asia/Shanghai",
    forecast_days: "7",
  });
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal, cache: "no-store" });
    if (!response.ok) throw new Error(`weather api ${response.status}`);
    const payload = await response.json() as OpenMeteoLocation[] | OpenMeteoLocation;
    const rows = Array.isArray(payload) ? payload : [payload];
    if (rows.length !== locations.length) throw new Error("weather api location mismatch");
    const now = Date.now();
    const districts = rows.map((row, index) => {
      const base = fallback.districts[index];
      const hourlyTimes = row.hourly?.time ?? [];
      const hourlyTemps = row.hourly?.temperature_2m ?? [];
      const hourlyPrecip = row.hourly?.precipitation ?? [];
      const currentHour = Math.max(0, hourlyTimes.findIndex((time) => Date.parse(time) >= now));
      const today = new Date().toISOString().slice(0, 10);
      const accumulatedRain = hourlyTimes.reduce((sum, time, hourIndex) => time.startsWith(today) && Date.parse(time) <= now ? sum + (hourlyPrecip[hourIndex] ?? 0) : sum, 0);
      const temp = row.current?.temperature_2m ?? base.temp;
      const humidity = row.current?.relative_humidity_2m ?? base.humidity;
      const rain = Math.max(accumulatedRain, row.current?.precipitation ?? 0);
      return {
        ...base, temp, humidity, rain, risk: riskFor(rain, humidity),
        hourlyTemperature: Array.from({ length: 12 }, (_, point) => hourlyTemps[currentHour + point * 2] ?? temp),
        weeklyRain: (row.daily?.precipitation_sum ?? base.weeklyRain).slice(0, 7),
      };
    });
    const snapshot: BeijingWeatherSnapshot = { districts, updatedAt: new Date().toISOString(), source: "live" };
    writeCache(snapshot);
    return snapshot;
  } catch (error) {
    if (signal?.aborted) throw error;
    return readCache() ?? fallback;
  }
}
