import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Welcome from "./welcome";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Welcome />
  </StrictMode>
);