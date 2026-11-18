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
     * Optional configuration parameters to initialize the Material Design 3 theme system,
     * including default source color, contrast level, dynamic scheme variant, and dark mode options.
     */
    themeOptions?: ThemeOptions;
};
