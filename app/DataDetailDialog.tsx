"use client";

type DetailData = {
  label: string;
  category: string;
  details: string;
  meta: string;
};

type Props = {
  data: DetailData;
  onClose: () => void;
  tone?: "cyan" | "blue";
};

export default function DataDetailDialog({ data, onClose, tone = "cyan" }: Props) {
  return (
    <div className={`data-detail-layer ${tone}`} role="presentation">
      <button className="data-detail-backdrop" aria-label="关闭数据详情" onClick={onClose} />
      <section className="data-detail-dialog" role="dialog" aria-modal="true" aria-label={`${data.label}数据详情`}>
        <header>
          <div><i /><span>DATA INSIGHT · 实时数据详情</span></div>
          <button aria-label="关闭数据详情" onClick={onClose}>×</button>
        </header>
        <div className="data-detail-body">
          <span>{data.category}</span>
          <h2>{data.label}</h2>
          <p>{data.details}</p>
          <div className="data-detail-meta">
            <div><span>数据状态</span><b><i />实时更新</b></div>
            <div><span>研判结果</span><b>{data.meta}</b></div>
          </div>
        </div>
        <footer>
          <span>城市感知网络 · AI 决策引擎</span>
          <button onClick={onClose}>关闭详情</button>
        </footer>
      </section>
    </div>
  );
}
