import clsx from "clsx";
import {
    TextArea as AriaTextArea,
    TextField as AriaTextField,
} from "react-aria-components";
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

            <AriaTextArea rows={rows} placeholder={placeholder} />

            {(showCharacterCount || description) && (
                <div data-description={description ? true : undefined}>
                    {description && <Description>{description}</Description>}

                    {showCharacterCount && (
                        <span>
                            {currentValue.length}
                            {maxLength && `/${maxLength}`}
                        </span>
                    )}
                </div>
            )}
            <FieldError>{errorMessage}</FieldError>
        </AriaTextField>
    );
};
