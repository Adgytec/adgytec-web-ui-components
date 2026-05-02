import { clsx } from "clsx";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import styles from "./radio.module.css";
import type { RadioGroupProps } from "./types";

export const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    description,
    errorMessage,
    children,
    className,
    radioItemsGap = 0,
    ...props
}) => {
    return (
        <AriaRadioGroup
            className={(renderProps) =>
                clsx(
                    styles["radio-group"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {({ orientation }) => (
                <>
                    {label && <Label>{label}</Label>}

                    <div
                        data-orientation={orientation}
                        className={clsx(styles["radio-items"])}
                        style={{
                            gap: `calc(${radioItemsGap} * var(--dp, 1px))`,
                        }}
                    >
                        {children}
                    </div>

                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </AriaRadioGroup>
    );
};
