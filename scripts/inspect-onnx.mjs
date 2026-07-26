import * as ort from "onnxruntime-web";

const session = await ort.InferenceSession.create(
  "./public/models/fire-smoke-yolo26n.onnx",
  { executionProviders: ["wasm"] },
);

console.log(
  JSON.stringify(
    {
      inputs: session.inputNames,
      outputs: session.outputNames,
      inputMetadata: session.inputMetadata,
      outputMetadata: session.outputMetadata,
    },
    null,
    2,
  ),
);
