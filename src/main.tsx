import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./utils/material";
import "./utils/material/defaultTheme";
import "./styles/main.css";
import { Toaster } from "sonner";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("missing root element");

createRoot(rootEl).render(
    <StrictMode>
        <Toaster duration={7500} visibleToasts={5} />
        <App />
    </StrictMode>
);
