import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { V } from "./screens/V";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <V />
  </StrictMode>,
);
