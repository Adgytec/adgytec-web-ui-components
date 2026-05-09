import type { ComboBox } from "react-aria-components";
import type { CoreInputProps } from "../../core";

export interface ComboBoxProps<
    T extends object,
    M extends "single" | "multiple" = "single",
> extends React.ComponentPropsWithRef<typeof ComboBox<T, M>>,
        CoreInputProps {
    hideMultiSelectionValue?: boolean;
}
