import clsx from "clsx";
import { CheckboxGroup as AriaCheckboxGroup } from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import styles from "./checkbox.module.css";
import { CheckboxGroupContext } from "./context";
import type { CheckboxGroupProps } from "./types";

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
    label,
    description,
    errorMessage,
    children,
    className,
    checkboxItemsGap = 24,
    labelPlacement,
    ...props
}) => {
    return (
        <CheckboxGroupContext value={{ labelPlacement }}>
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
                {label && <Label>{label}</Label>}

                <div
                    className={clsx(styles["checkbox-items"])}
                    style={{
                        gap: `calc(${checkboxItemsGap} * var(--dp, 1px))`,
                    }}
                >
                    {children}
                </div>

                {description && <Description>{description}</Description>}
                <FieldError>{errorMessage}</FieldError>
            </AriaCheckboxGroup>
        </CheckboxGroupContext>
    );
};
