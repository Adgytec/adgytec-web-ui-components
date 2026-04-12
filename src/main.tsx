// INFO: this pr intentionally breaks multiple components
// all components will be re-implemented using material 3 spec

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./utils/material";
import "./utils/material/defaultTheme";
import "./styles/main.css";
import { Toaster } from "sonner";
import "material-symbols/outlined.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("missing root element");

createRoot(rootEl).render(
    <StrictMode>
        <Toaster duration={7500} visibleToasts={5} />
        <App />
    </StrictMode>
);
