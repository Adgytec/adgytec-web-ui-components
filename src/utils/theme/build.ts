import type { ThemeBuildOptions } from "./types";

export const buildThemeString = ({
    isDarkMode,
    isMonochrome,
    contrast,
}: ThemeBuildOptions) => {
    const mode = isDarkMode ? "dark" : "light";
    if (isMonochrome) return `monochrome-${mode}`;

    const contrastSuffix =
        contrast === "standard"
            ? ""
            : contrast === "medium"
              ? "-medium-contrast"
              : "-high-contrast";

    return `${mode}${contrastSuffix}`;
};
