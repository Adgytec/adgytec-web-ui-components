import type { ReactNode } from "react";
import type { ThemeOptions } from "@/utils/theme";

export type ThemeProviderProps = {
    children?: ReactNode;
    themeOptions?: ThemeOptions;
};
