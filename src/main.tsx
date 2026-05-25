// INFO: this pr intentionally breaks multiple components
// all components will be re-implemented using material 3 spec

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import "./styles/core";
import "./styles/defaultTheme";
import { SnackbarRegion } from "./components/Snackbar/SnackbarRegion.tsx";
import { ThemeProvider } from "./components/ThemeSelector/ThemeProvider.tsx";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("missing root element");

createRoot(rootEl).render(
    <StrictMode>
        <SnackbarRegion>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </SnackbarRegion>
    </StrictMode>
);
