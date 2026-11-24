import clsx from "clsx";
import { useState } from "react";
import { Input, InputContext } from "react-aria-components";
import { ToggleButton } from "@/components/Button";
import {
    Field,
    FieldEditorColorStyles,
    FieldTypography,
    type FieldVariant,
    UnsetFieldStyles,
} from "@/components/Input";
import { FieldGroup } from "@/components/Input/Field/Field/FieldGroup/FieldGroup";

export const CustomTextFieldPreview = () => {
    const [state, setState] = useState({
        isDisabled: false,
        isInvalid: false,
        variant: "filled",
    });

    return (
        <div className="items-grid">
            <div className="items">
                <ToggleButton
                    isSelected={state.isDisabled}
                    onChange={(isSelected) => {
                        setState((prev) => {
                            return { ...prev, isDisabled: isSelected };
                        });
                    }}
                >
                    {state.isDisabled ? "enable" : "disable"}
                </ToggleButton>

                <ToggleButton
                    isSelected={state.isInvalid}
                    onChange={(isSelected) => {
                        setState((prev) => {
                            return { ...prev, isInvalid: isSelected };
                        });
                    }}
                >
                    {state.isInvalid ? "invalid" : "valid"}
                </ToggleButton>

                <ToggleButton
                    isSelected={state.variant === "filled"}
                    onChange={(isSelected) => {
                        setState((prev) => {
                            return {
                                ...prev,
                                variant: isSelected ? "filled" : "outlined",
                            };
                        });
                    }}
                >
                    {state.variant}
                </ToggleButton>
            </div>

            <div className="items">
                <FieldGroup
                    isDisabled={state.isDisabled}
                    isInvalid={state.isInvalid}
                    label="Custom text field"
                    description="Serial number"
                >
                    <Field
                        variant={state.variant as FieldVariant}
                        isDisabled={state.isDisabled}
                        isInvalid={state.isInvalid}
                    >
                        <InputContext
                            value={{
                                disabled: state.isDisabled,
                            }}
                        >
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: "4px",
                                }}
                            >
                                <Input
                                    style={({ isFocused }) => ({
                                        width: "3ch",
                                        boxSizing: "content-box",
                                        outlineWidth: "2px",
                                        outlineStyle: "solid",
                                        outlineColor: isFocused
                                            ? !state.isInvalid
                                                ? "var(--_md-field-segment-focus-indicator-color)"
                                                : "var(--_md-field-segment-focus-indicator-invalid-color)"
                                            : "transparent",
                                        outlineOffset: "3px",
                                        borderRadius: "4px",
                                    })}
                                    maxLength={3}
                                    aria-label="First 3 digits"
                                    placeholder="000"
                                    className={clsx(
                                        FieldTypography,
                                        FieldEditorColorStyles,
                                        UnsetFieldStyles
                                    )}
                                />
                                –
                                <Input
                                    style={({ isFocused }) => ({
                                        width: "2ch",
                                        boxSizing: "content-box",
                                        outlineWidth: "2px",
                                        outlineStyle: "solid",
                                        outlineColor: isFocused
                                            ? !state.isInvalid
                                                ? "var(--_md-field-segment-focus-indicator-color)"
                                                : "var(--_md-field-segment-focus-indicator-invalid-color)"
                                            : "transparent",
                                        outlineOffset: "3px",
                                        borderRadius: "4px",
                                    })}
                                    maxLength={2}
                                    aria-label="Middle 2 digits"
                                    placeholder="00"
                                    className={clsx(
                                        FieldTypography,
                                        FieldEditorColorStyles,
                                        UnsetFieldStyles
                                    )}
                                />
                                –
                                <Input
                                    style={({ isFocused }) => ({
                                        width: "4ch",
                                        boxSizing: "content-box",
                                        outlineWidth: "2px",
                                        outlineStyle: "solid",
                                        outlineColor: isFocused
                                            ? !state.isInvalid
                                                ? "var(--_md-field-segment-focus-indicator-color)"
                                                : "var(--_md-field-segment-focus-indicator-invalid-color)"
                                            : "transparent",
                                        outlineOffset: "3px",
                                        borderRadius: "4px",
                                    })}
                                    maxLength={4}
                                    aria-label="Last 4 digits"
                                    placeholder="0000"
                                    className={clsx(
                                        FieldTypography,
                                        FieldEditorColorStyles,
                                        UnsetFieldStyles
                                    )}
                                />
                            </span>
                        </InputContext>
                    </Field>
                </FieldGroup>
            </div>
        </div>
    );
};
