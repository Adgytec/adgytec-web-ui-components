import clsx from "clsx";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import styles from "./checkbox.module.css";
import { CheckboxGroupContext } from "./context";
import type { CheckboxGroupProps } from "./types";

/**
 * A container managing a set of related {@link Checkbox} controls.
 *
 * Coordinates group selection values, accessible group labels, helper descriptions,
 * error validation messages, and consistent item spacing.
 *
 * @example
 * ```tsx
 * import { CheckboxGroup, Checkbox } from '@adgytec/web-ui-components';
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
    className,
    checkboxItemsGap = 24,
    labelPlacement,
    containerStateLayer,
    showDescriptionOnInvalid = false,
    ...props
}) => {
    return (
        <CheckboxGroupContext value={{ labelPlacement, containerStateLayer }}>
            <AriaCheckboxGroup
                className={(renderProps) =>
                    clsx(
                        styles["checkbox-group"],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
            >
                {({ isInvalid }) => {
                    const showDescription =
                        description &&
                        (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                    return (
                        <>
                            {label && <Label>{label}</Label>}

                            <div
                                className={clsx(styles["checkbox-items"])}
                                style={{
                                    gap: `calc(${checkboxItemsGap} * var(--dp, 1px))`,
                                }}
                            >
                                {children}
                            </div>

                            {showDescription && (
                                <Description>{description}</Description>
                            )}
                            <FieldError>{errorMessage}</FieldError>
                        </>
                    );
                }}
            </AriaCheckboxGroup>
        </CheckboxGroupContext>
    );
};
