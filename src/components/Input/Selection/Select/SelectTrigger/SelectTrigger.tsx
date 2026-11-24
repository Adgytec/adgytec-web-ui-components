import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import {
    Button,
    composeRenderProps,
    SelectStateContext,
    SelectValue,
} from "react-aria-components";
import {
    BaseFieldStyles,
    type CoreFieldProps,
    FieldColorStyles,
    FieldIcon,
    FieldStyle,
    FieldVariantStyles,
} from "@/components/Input/Field";
import styles from "./selectTrigger.module.css";

/**
 * Props for the {@link SelectTrigger} component.
 * Extends React Aria's `Button` props (excluding `children`).
 */
export interface SelectTriggerProps
    extends Omit<React.ComponentPropsWithRef<typeof Button>, "children">,
        Omit<CoreFieldProps, "leading" | "trailing"> {}

/**
 * The clickable input trigger button that displays the selected value and toggles the select dropdown menu.
 */
export const SelectTrigger: React.FC<SelectTriggerProps> = ({
    variant = "filled",
    ...props
}) => {
    const selectContextVal = useContext(SelectStateContext);
    const invalid = selectContextVal?.displayValidation.isInvalid;

    return (
        <Button
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(
                    BaseFieldStyles,
                    FieldStyle,
                    FieldVariantStyles(variant),
                    styles["trigger"],
                    className
                )
            )}
            data-variant={variant}
            data-trailing={true}
            data-invalid={invalid || undefined}
        >
            {({ isPressed }) => (
                <>
                    <SelectValue
                        className={({ isPlaceholder }) =>
                            clsx(
                                styles["select-value"],
                                !isPlaceholder && FieldColorStyles
                            )
                        }
                    >
                        {({ selectedText, isPlaceholder, defaultChildren }) =>
                            isPlaceholder ? defaultChildren : selectedText
                        }
                    </SelectValue>
                    <FieldIcon
                        className={clsx(styles["icon"])}
                        icon={ChevronDown}
                        data-rotate={isPressed || undefined}
                    />{" "}
                </>
            )}
        </Button>
    );
};
