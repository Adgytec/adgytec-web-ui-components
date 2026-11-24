import { clsx } from "clsx";
import { useObjectRef } from "react-aria";
import {
    TextArea as AriaTextArea,
    composeRenderProps,
    TextField,
} from "react-aria-components";
import {
    CharacterCount,
    Field,
    FieldAutoSizeStyles,
    FieldEditorColorStyles,
    focusOnPointerDown,
    UnsetFieldStyles,
    useControllableState,
} from "../Field";
import { FieldGroup } from "../Field/FieldGroup/FieldGroup";
import styles from "./textAreaField.module.css";
import type { TextAreaFieldProps } from "./types";

/**
 * A multi-line text area input field implementing Material Design 3 Text Field specifications.
 *
 * Supports filled and outlined visual variants, rows/cols sizing, labels, supporting descriptions,
 * validation errors, and character counters. Built on React Aria's `TextField` and `TextArea` for
 * robust accessibility and auto-sizing capabilities.
 *
 * @example
 * ```tsx
 * import { TextAreaField } from "@adgytec/web-ui-components";
 *
 * <TextAreaField
 *     label="Comments"
 *     placeholder="Write your feedback here..."
 *     rows={4}
 *     maxLength={500}
 *     showCharacterCount
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Outlined variant
 * import { TextAreaField } from "@adgytec/web-ui-components";
 *
 * <TextAreaField
 *     variant="outlined"
 *     label="Description"
 *     description="Provide a brief summary of the project."
 *     isRequired
 * />
 * ```
 */
export const TextAreaField: React.FC<TextAreaFieldProps> = ({
    label,
    description,
    errorMessage,
    showCharacterCount = false,

    variant,
    placeholder,
    textAreaRef,
    rows,
    cols,

    value,
    defaultValue,
    onChange,
    maxLength,

    ...props
}) => {
    const ref = useObjectRef(textAreaRef);

    const { currentValue, setValue } = useControllableState({
        value,
        defaultValue,
        onChange,
    });

    return (
        <TextField
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(FieldAutoSizeStyles, className)
            )}
            maxLength={maxLength}
            value={currentValue}
            onChange={setValue}
        >
            {({ isInvalid, isDisabled }) => (
                <FieldGroup
                    label={label}
                    description={
                        showCharacterCount ? (
                            <span className={clsx(styles["supporting-group"])}>
                                <span>{description}</span>

                                <CharacterCount
                                    className={clsx(styles["character-count"])}
                                    count={currentValue.length}
                                    maxLength={maxLength}
                                />
                            </span>
                        ) : (
                            description
                        )
                    }
                    errorMessage={
                        showCharacterCount
                            ? (validation) => (
                                  <span
                                      className={clsx(
                                          styles["supporting-group"]
                                      )}
                                  >
                                      <span>
                                          {typeof errorMessage === "function"
                                              ? errorMessage(validation)
                                              : errorMessage}
                                      </span>

                                      <CharacterCount
                                          className={clsx(
                                              styles["character-count"]
                                          )}
                                          count={currentValue.length}
                                          maxLength={maxLength}
                                      />
                                  </span>
                              )
                            : errorMessage
                    }
                    isInvalid={isInvalid}
                    isDisabled={isDisabled}
                >
                    <Field
                        variant={variant}
                        onPointerDown={focusOnPointerDown(ref)}
                        isInvalid={isInvalid}
                        isDisabled={isDisabled}
                    >
                        <AriaTextArea
                            data-textarea
                            rows={rows}
                            cols={cols}
                            placeholder={placeholder}
                            ref={ref}
                            className={clsx(
                                styles["textarea"],
                                UnsetFieldStyles,
                                FieldEditorColorStyles
                            )}
                        />
                    </Field>
                </FieldGroup>
            )}
        </TextField>
    );
};
