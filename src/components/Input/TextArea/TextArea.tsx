import clsx from "clsx";
import {
    TextArea as AriaTextArea,
    TextField as AriaTextField,
} from "react-aria-components";
import { typography } from "@/utils";
import {
    CharacterCountStyles,
    Colors,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    UnsetStyles,
} from "../core";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { useControllableState } from "../hooks";
import { Label } from "../Label";
import type { TextAreaProps } from "./types";

export const TextArea: React.FC<TextAreaProps> = ({
    label,
    description,
    errorMessage,
    placeholder,
    showCharacterCount,
    rows,
    className,
    maxLength,
    value,
    defaultValue,
    onChange,
    ...props
}) => {
    const { currentValue, setValue } = useControllableState({
        value,
        defaultValue,
        onChange,
    });

    return (
        <AriaTextField
            className={(renderProps) =>
                clsx(
                    Colors,
                    InputGroupStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            maxLength={maxLength}
            value={value}
            defaultValue={defaultValue}
            onChange={setValue}
            {...props}
        >
            {label && <Label>{label}</Label>}

            <AriaTextArea
                rows={rows}
                placeholder={placeholder}
                className={clsx(
                    UnsetStyles,
                    EditorStyles,
                    EditorInputStyles,
                    typography.bodyLarge
                )}
                data-textarea={true}
            />

            {(showCharacterCount || description) && (
                <span className={clsx(SupportingTextStyles)}>
                    {description && <Description>{description}</Description>}

                    {showCharacterCount && (
                        <span
                            className={clsx(
                                CharacterCountStyles,
                                typography.labelMedium
                            )}
                        >
                            {currentValue.length}
                            {maxLength && `/${maxLength}`}
                        </span>
                    )}
                </span>
            )}
            <FieldError>{errorMessage}</FieldError>
        </AriaTextField>
    );
};
