import { clsx } from "clsx";
import { ChevronDown } from "lucide-react";
import { useObjectRef } from "react-aria";
import { Input } from "react-aria-components";
import {
    BaseFieldStyles,
    type CoreFieldProps,
    Field,
    FieldButton,
    FieldColorStyles,
    FieldTypography,
    focusOnPointerDown,
} from "@/components/Input/Field";
import type { RefProp } from "@/utils";
import styles from "./comboBoxTrigger.module.css";

/**
 * Props for the {@link ComboBoxTrigger} component.
 */
export interface ComboBoxTriggerProps
    extends Omit<CoreFieldProps, "leading" | "trailing">,
        RefProp<typeof Input, "inputRef"> {
    /** Placeholder text displayed when the combobox input is empty. */
    placeholder?: string;
}

/**
 * The composite editable text input and chevron dropdown trigger button for a {@link ComboBox}.
 */
export const ComboBoxTrigger: React.FC<ComboBoxTriggerProps> = ({
    placeholder,
    variant,
    inputRef,
}) => {
    const ref = useObjectRef(inputRef);

    return (
        <Field
            variant={variant}
            trailing={
                <FieldButton
                    className={clsx(styles["trigger"])}
                    icon={ChevronDown}
                />
            }
            onPointerDown={focusOnPointerDown(ref)}
        >
            <Input
                ref={ref}
                placeholder={placeholder}
                className={clsx(
                    BaseFieldStyles,
                    FieldColorStyles,
                    FieldTypography
                )}
            />
        </Field>
    );
};
