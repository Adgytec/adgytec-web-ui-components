import type { Variant as MaterialScheme } from "@material/material-color-utilities";
import type { Dispatch, SetStateAction } from "react";
import type {
    TernaryDarkModeOptions,
    TernaryDarkModeReturn,
} from "usehooks-ts";

export type ThemeOptions = {
    ternaryDarkMode?: TernaryDarkModeOptions;
    defaultContrast?: number;
    defaultSourceColor: string;
    defaultScheme?: MaterialScheme;
};

type ThemeReturnValue<T> = {
    value: T;
    setValue: Dispatch<SetStateAction<T>>;
};

export type ThemeReturn = {
    ternaryDarkMode: TernaryDarkModeReturn;
    contrast: ThemeReturnValue<number>;
    sourceColor: ThemeReturnValue<string>;
    scheme: ThemeReturnValue<MaterialScheme>;
};
