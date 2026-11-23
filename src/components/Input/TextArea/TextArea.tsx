import clsx from "clsx";
import {
    TextArea as AriaTextArea,
    TextField as AriaTextField,
    composeRenderProps,
} from "react-aria-components";
import { typography } from "@/utils";
import {
    Colors,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    UnsetStyles,
} from "../core";
import {
    CharacterCount,
    Description,
    FieldError,
    Label,
    useControllableState,
} from "../Field";
import type { TextAreaProps } from "./types";

/**
 * A multiline text input component implementing Material Design 3 Text Area specifications.
 *
 * Supports accessible labels, helper descriptions, error messages, character counters,
 * and customizable row heights.
 *
 * @example
 * ```tsx
 * import { TextArea } from '@adgytec/web-ui-components';
 *
 * <TextArea
 *     label="Feedback"
 *     placeholder="Describe your thoughts..."
 *     rows={4}
 *     maxLength={200}
 *     showCharacterCount
 * />
 * ```
 */
export const TextArea: React.FC<TextAreaProps> = ({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    placeholder,
    showCharacterCount: hasCharacterCount,
    rows,
    maxLength,
    value,
    defaultValue,
    onChange,
    ref,
    variant = "filled",
    ...props
}) => {
    const { currentValue, setValue } = useControllableState({
        value,
        defaultValue,
        onChange,
    });

    return (
        <AriaTextField
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(Colors, InputGroupStyles, className)
            )}
            maxLength={maxLength}
            value={currentValue}
            defaultValue={defaultValue}
            onChange={setValue}
        >
            {({ isInvalid }) => {
                const hasDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <AriaTextArea
                            ref={ref}
                            rows={rows}
                            placeholder={placeholder}
                            className={clsx(
                                UnsetStyles,
                                EditorStyles,
                                EditorInputStyles,
                                typography.bodyLarge
                            )}
                            data-textarea={true}
                            data-variant={variant}
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
                            <FieldError className={clsx(SupportingTextStyles)}>
                                {errorMessage}
                            </FieldError>
                        ) : null}
                    </>
                );
            }}
        </AriaTextField>
    );
};
