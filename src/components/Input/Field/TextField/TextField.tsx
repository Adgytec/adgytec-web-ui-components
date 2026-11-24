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
    FieldTypography,
    focusOnPointerDown,
    UnsetFieldStyles,
    useControllableState,
} from "../Field";
import { FieldGroup } from "../Field/FieldGroup/FieldGroup";
import styles from "./textField.module.css";
import type { TextFieldProps } from "./types";

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
            defaultValue={defaultValue}
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
