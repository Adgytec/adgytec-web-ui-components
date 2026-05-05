import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import {
    Button,
    type ButtonProps,
    SelectStateContext,
    SelectValue,
} from "react-aria-components";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils";
import {
    EditorInputStyles,
    EditorStyles,
    TextFieldIconSize,
    UnsetStyles,
} from "../../core";
import styles from "./selectTrigger.module.css";

export const SelectTrigger: React.FC<Omit<ButtonProps, "children">> = (
    props
) => {
    const selectContextVal = useContext(SelectStateContext);
    const invalid = selectContextVal?.displayValidation.isInvalid;

    return (
        <Button
            className={clsx(
                UnsetStyles,
                EditorStyles,
                EditorInputStyles,
                typography.bodyLarge,
                styles["trigger"]
            )}
            {...props}
            data-invalid={invalid || undefined}
            data-select-trigger={true}
        >
            <SelectValue className={clsx(styles["select-value"])}>
                {({ selectedText, isPlaceholder, defaultChildren }) =>
                    isPlaceholder ? defaultChildren : selectedText
                }
            </SelectValue>

            <Icon icon={ChevronDown} size={TextFieldIconSize} />
        </Button>
    );
};
