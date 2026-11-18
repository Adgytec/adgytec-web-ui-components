import { createContext } from "react";
import type { ThemeReturn } from "@/utils/theme";

/**
 * React context holding the active Material Design 3 {@link ThemeReturn} state
 * and controller functions managed by {@link ThemeProvider}.
 *
 * Holds `null` if accessed outside a `<ThemeProvider>` hierarchy.
 */
export const ThemeContext = createContext<ThemeReturn | null>(null);
