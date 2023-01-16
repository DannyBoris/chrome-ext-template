import App from "./component/App";
import React from "react";
import { createRoot } from "react-dom/client";
import "./reset.less";
import "./index.less";
import App2 from "component/App2";

const rootEl = document.createElement("div");
rootEl.id = "feedbug-root";
document.body.append(rootEl);
const root = createRoot(document.getElementById("feedbug-root")!);

root.render(<App2 />);
