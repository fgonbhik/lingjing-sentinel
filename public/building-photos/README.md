# 北京建筑实景素材说明

这些图片随离线演示包本地缓存，仅用于已完成建筑编号核验的实景对照。界面不再把同一张区域照片复用于不同楼宇：有已核验素材的建筑显示对应本地实景；其余楼宇打开详情时，通过唯一建筑编号、建筑中心和最近 OSM 道路坐标查询 KartaView 附近街景候选。没有街景覆盖时明确显示缺图，不使用其他楼宇照片替代。

| 本地文件 | 内容 | 作者 | 许可 | 来源 |
| --- | --- | --- | --- | --- |
| `beijing-cbd-day.jpg` | 北京 CBD 天际线 | N509FZ | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:Beijing_CBD_Skyline_(20190104160952).jpg |
| `china-world.jpg` | 中国国际贸易中心建筑群 | Temlsth | CC BY-SA 3.0 | https://commons.wikimedia.org/wiki/File:China_World.jpg |
| `cctv-headquarters.jpg` | 中央广播电视总台总部大楼 | Immanuelle | CC BY-SA 4.0 | https://commons.wikimedia.org/wiki/File:CCTV_headquarters.jpg |

界面中会同时显示资产编号、实景提供方、WGS84 查询坐标、道路名称和匹配状态。本地照片显示作者、许可和原图来源；KartaView 显示图片编号、拍摄日期和查询距离，并明确标注“待人工核验”。接入说明见项目根目录 `KARTAVIEW_STREET_IMAGERY.md`。
