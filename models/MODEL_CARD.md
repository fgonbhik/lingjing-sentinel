---
license: mit
language:
- en
metrics:
- precision
- recall
- accuracy
pipeline_tag: object-detection
tags:
- yolo26n
- onnx
---
🔥 Fire & Smoke Detection — YOLO‑26n (ONNX)

📝 Overview
This model is a fire and smoke detection system built using YOLO‑26n (YOLO‑NAS) and exported to ONNX format for fast, lightweight deployment. It is trained for 100 epochs on a custom dataset containing annotated fire and smoke images. The model is optimized for CPU‑only environments, making it suitable for real‑time safety monitoring on edge devices, CCTV systems, and low‑resource hardware.
The detector identifies two critical hazard classes:
- Fire (Flames)
- Smoke
By analyzing each frame of a video stream, the model predicts bounding boxes, confidence scores, and class labels, enabling early detection of hazardous conditions before traditional sensors react.

📊 Performance Metrics (100 Epochs)

- AP50 (74.3%) — Strong detection accuracy for flames and smoke at IoU ≥ 0.50.
- mAP50‑95 (43.9%) — Good robustness across stricter IoU thresholds, especially for smoke.
- Precision (73.6%) — Low false‑positive rate; reliable for real‑world alerts.
- Recall (68.3%) — Detects most real fire/smoke events, reducing missed hazards.
These metrics indicate a balanced, reliable model suitable for early hazard detection.

⚙️ Model Details
- Architecture: YOLO‑26n (YOLO‑NAS)
- Format: ONNX
- Input Size: 640 × 640
- Batch Size: 1
- Precision: FP32 (CPU‑friendly)
- Post‑processing: Custom NMS + confidence filtering
- Training Epochs: 100

🌍 Use Cases
- Forest fire early‑warning systems
- Industrial safety monitoring
- Warehouse and factory surveillance
- Smart building fire detection
- CCTV‑based hazard detection
- Drone‑based fire inspection

📦 Intended Audience
- Researchers working on fire‑safety automation
- Developers building real‑time hazard detection systems
- Smart‑city and industrial monitoring teams
- Students and engineers exploring ONNX deployment
  
Author: Darshan Modi
