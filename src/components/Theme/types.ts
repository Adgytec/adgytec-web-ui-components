import type { ReactNode } from "react";
import type { ThemeOptions } from "@/utils/theme";

/**
 * Props for the {@link ThemeProvider} component.
 */
export type ThemeProviderProps = {
    /**
     * Child elements rendered within the theme provider context.
     */
    children?: ReactNode;

    /**
     * Configuration parameters to initialize the Material Design 3 theme system,
     * including the required default source color, and optional contrast level, dynamic scheme variant, and dark mode options.
     */
    themeOptions: ThemeOptions;

    /**
     * Optional target DOM element to apply the calculated CSS variables and `color-scheme` to.
     * Defaults to `document.documentElement` if available in the runtime environment.
     */
    target?: HTMLElement | null;
};
