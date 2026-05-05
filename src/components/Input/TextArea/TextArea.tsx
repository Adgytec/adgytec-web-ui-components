import clsx from "clsx";
import {
    TextArea as AriaTextArea,
    TextField as AriaTextField,
} from "react-aria-components";
import { typography } from "@/utils";
import { CharacterCount } from "../CharacterCount";
import {
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
    showDescriptionOnInvalid = false,
    placeholder,
    showCharacterCount: hasCharacterCount,
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
            {({ isInvalid }) => {
                const hasDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
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

                        {hasDescription && (
                            <span className={clsx(SupportingTextStyles)}>
                                <Description>{description}</Description>

                                {hasCharacterCount && (
                                    <CharacterCount
                                        count={currentValue.length}
                                        maxLength={maxLength}
                                    />
                                )}
                            </span>
                        )}

                        {!hasDescription && hasCharacterCount && (
                            <span className={clsx(SupportingTextStyles)}>
                                <FieldError>{errorMessage}</FieldError>

                                <CharacterCount
                                    count={currentValue.length}
                                    maxLength={maxLength}
                                />
                            </span>
                        )}

                        {/* Error placement */}
                        {hasDescription || !hasCharacterCount ? (
                            <FieldError>{errorMessage}</FieldError>
                        ) : null}
                    </>
                );
            }}
        </AriaTextField>
    );
};
