import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import "./styles/core";
import { SnackbarRegion } from "./components/Snackbar/SnackbarRegion.tsx";
import { ThemeProvider } from "./components/Theme/ThemeProvider.tsx";
import { COLOR_ADGYTEC_YELLOW } from "./utils/theme/colors.ts";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("missing root element");

createRoot(rootEl).render(
    <StrictMode>
        <SnackbarRegion>
            <ThemeProvider
                themeOptions={{ defaultSourceColor: COLOR_ADGYTEC_YELLOW }}
            >
                <App />
            </ThemeProvider>
        </SnackbarRegion>
    </StrictMode>
);
