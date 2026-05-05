import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useContext, useRef } from "react";
import { useFocusRing } from "react-aria/useFocusRing";
import { useHover } from "react-aria/useHover";
import { usePress } from "react-aria/usePress";
import { GroupContext, type GroupProps, Input } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { typography } from "@/utils";
import { EditorInputStyles, EditorStyles, UnsetStyles } from "../../core";
import styles from "./comboBoxTrigger.module.css";

export const ComboBoxTrigger: React.FC<
    Omit<React.ComponentPropsWithRef<"span">, "children"> & {
        placeholder?: string;
    }
> = ({ className, placeholder, dir, ...props }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { isInvalid, isDisabled } = useContext(
        GroupContext
    ) as Partial<GroupProps>;

    const { isFocused, isFocusVisible, focusProps } = useFocusRing();
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
                    typography.bodyLarge
                )}
                dir={dir}
            />
            <IconButton
                className={clsx(styles["trigger"])}
                icon={ChevronDown}
                color="standard"
            />
        </span>
    );
};
