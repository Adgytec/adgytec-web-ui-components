import clsx from "clsx";
import { useObjectRef } from "react-aria";
import {
    TextField as AriaTextField,
    composeRenderProps,
    Input,
} from "react-aria-components";
import {
    CharacterCount,
    Field,
    FieldAutoSizeStyles,
    FieldEditorColorStyles,
    FieldGroup,
    FieldTypography,
    focusOnPointerDown,
    UnsetFieldStyles,
    useControllableState,
} from "../Field";
import styles from "./textField.module.css";
import type { TextFieldProps } from "./types";

/**
 * A single-line text input field implementing Material Design 3 Text Field specifications.
 *
 * Supports filled and outlined visual variants, leading and trailing icons or buttons,
 * text prefixes and suffixes, labels, supporting descriptions, validation errors, and character counters.
 * Built on React Aria's `TextField` for accessible keyboard interactions and form integration.
 *
 * @example
 * ```tsx
 * import { TextField } from "@adgytec/web-ui-components";
 * import { Mail } from "lucide-react";
 *
 * <TextField
 *     label="Email Address"
 *     placeholder="you@example.com"
 *     leading={<FieldIcon icon={Mail} />}
 *     isRequired
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Outlined variant with character count
 * import { TextField } from "@adgytec/web-ui-components";
 *
 * <TextField
 *     variant="outlined"
 *     label="Username"
 *     maxLength={20}
 *     showCharacterCount
 * />
 * ```
 */
export const TextField: React.FC<TextFieldProps> = ({
    label,
    description,
    errorMessage,
    showCharacterCount = false,

    variant,

    leading,
    trailing,
    prefix,
    suffix,
    editorDir,
    placeholder,
    inputRef,

    value,
    defaultValue,
    onChange,
    maxLength,

    ...props
}) => {
    const ref = useObjectRef(inputRef);

    const { currentValue, setValue } = useControllableState({
        value,
        defaultValue,
        onChange,
    });

    return (
        <AriaTextField
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
                    hasLeading={leading ? true : undefined}
                    hasTrailing={trailing ? true : undefined}
                    isInvalid={isInvalid}
                    isDisabled={isDisabled}
                >
                    <Field
                        leading={leading}
                        trailing={trailing}
                        variant={variant}
                        onPointerDown={focusOnPointerDown(ref)}
                        isDisabled={isDisabled}
                        isInvalid={isInvalid}
                    >
                        <span
                            className={clsx(
                                styles["infix-group"],
                                FieldTypography
                            )}
                        >
                            {prefix}

                            <Input
                                dir={editorDir}
                                placeholder={placeholder}
                                className={clsx(
                                    UnsetFieldStyles,
                                    FieldEditorColorStyles,
                                    FieldTypography,
                                    styles["input"]
                                )}
                                ref={ref}
                            />

                            {suffix}
                        </span>
                    </Field>
                </FieldGroup>
            )}
        </AriaTextField>
    );
};
