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
                    isInvalid={isInvalid}
                    isDisabled={isDisabled}
                >
                    <Field
                        variant={variant}
                        onPointerDown={focusOnPointerDown(ref)}
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
