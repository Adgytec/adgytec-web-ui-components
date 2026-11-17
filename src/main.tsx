import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import "./styles/core";
import "./styles/defaultTheme";
import { SnackbarRegion } from "./components/Snackbar/SnackbarRegion.tsx";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("missing root element");

createRoot(rootEl).render(
    <StrictMode>
        <SnackbarRegion>
            <App />
        </SnackbarRegion>
    </StrictMode>
);
