import type { Key } from "react-aria-components";
import type { ButtonVariant } from "@/components/Button/ButtonBase/types";
import type { ColorTheme } from "@/utils/types";
import type { CardBackground } from "../Card/BaseCard";

export type SelectOptions = {
    key: string;
    displayValue: string;
    description?: string;
    disabled?: boolean;
};

type AccessibleName =
    | { label: string; ariaLabel?: never }
    | { label?: never; ariaLabel: string };

export type SelectProps = AccessibleName & {
    options: SelectOptions[];
    cardBackground?: CardBackground;
    triggerTheme?: ColorTheme;
    isRequired?: boolean;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    description?: string;
    triggerVariant?: ButtonVariant;
    selectedKey?: Key;
    onSelectionChange?: (key: Key | null) => void;
};
