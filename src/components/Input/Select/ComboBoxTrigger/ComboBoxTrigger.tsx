import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext } from "react";
import { useObjectRef } from "react-aria";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";
import { GroupContext, type GroupProps, Input } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { type RefProp, typography } from "@/utils";
import { EditorInputStyles, EditorStyles, UnsetStyles } from "../../core";
import styles from "./comboBoxTrigger.module.css";

export const ComboBoxTrigger: React.FC<
    Omit<React.ComponentPropsWithoutRef<"span">, "children"> &
        RefProp<typeof Input> & {
            placeholder?: string;
        }
> = ({ className, placeholder, dir, ref, ...props }) => {
    const inputRef = useObjectRef(ref);

    const { isInvalid, isDisabled } = useContext(
        GroupContext
    ) as Partial<GroupProps>;

    const { isFocused, isFocusVisible, focusProps } = useFocusRing({
        isTextInput: true,
    });
    const { isHovered, hoverProps } = useHover({});
    const { pressProps } = usePress({
        onPress: () => {
            inputRef.current?.focus();
        },
    });

    const dataAttrs = {
        "data-hovered": isHovered || undefined,
        "data-focused": isFocused || undefined,
        "data-focus-visible": isFocusVisible || undefined,
        "data-trailing": true,
        "data-invalid": isInvalid || undefined,
        "data-input": true,
        "data-disabled": isDisabled || undefined,
    };

    return (
        <span
            {...pressProps}
            {...hoverProps}
            className={clsx(EditorStyles, className)}
            {...props}
            {...dataAttrs}
        >
            <Input
                ref={inputRef}
                {...focusProps}
                placeholder={placeholder}
                className={clsx(
                    UnsetStyles,
                    EditorInputStyles,
                    typography.bodyLarge,
                    styles["input"]
                )}
                data-input={true}
                dir={dir}
            />
            <IconButton
                className={clsx(styles["trigger"])}
                icon={ChevronDown}
                color="standard"
                data-invalid={isInvalid || undefined}
            />
        </span>
    );
};
