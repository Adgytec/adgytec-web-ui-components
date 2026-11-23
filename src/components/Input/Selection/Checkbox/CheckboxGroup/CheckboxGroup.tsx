import clsx from "clsx";
import {
    CheckboxGroup as AriaCheckboxGroup,
    composeRenderProps,
} from "react-aria-components";
import { Description } from "../../../Description";
import { FieldError } from "../../../FieldError";
import { Label } from "../../../Label";
import { CheckboxGroupContext } from "../core";
import styles from "./checkboxGroup.module.css";
import type { CheckboxGroupProps } from "./types";

/**
 * A container managing a set of related [`Checkbox`](src/components/Input/Checkbox/Checkbox.tsx) controls.
 *
 * Coordinates group selection values, accessible group labels, helper descriptions,
 * and error validation messages.
 *
 * @example
 * ```tsx
 * import { CheckboxGroup, Checkbox } from "@adgytec/web-ui-components";
 *
 * <CheckboxGroup label="Notification Preferences">
 *     <Checkbox value="email">Email</Checkbox>
 *     <Checkbox value="sms">SMS</Checkbox>
 *     <Checkbox value="push">Push notifications</Checkbox>
 * </CheckboxGroup>
 * ```
 */
export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    label,
    description,
    errorMessage,
    children,
    labelPlacement,
    ...props
}) => {
    return (
        <CheckboxGroupContext value={{ labelPlacement }}>
            <AriaCheckboxGroup
                {...props}
                className={composeRenderProps(props.className, (className) =>
                    clsx(styles["checkbox-group"], className)
                )}
            >
                {({ isInvalid }) => {
                    return (
                        <>
                            {label && <Label>{label}</Label>}

                            {children}

                            {isInvalid ? (
                                <FieldError>{errorMessage}</FieldError>
                            ) : (
                                description && (
                                    <Description>{description}</Description>
                                )
                            )}
                        </>
                    );
                }}
            </AriaCheckboxGroup>
        </CheckboxGroupContext>
    );
};
