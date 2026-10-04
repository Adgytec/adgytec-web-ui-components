import { clsx } from "clsx";
import { RadioGroup as AriaRadioGroup } from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import { RadioGroupContext } from "./context";
import styles from "./radio.module.css";
import type { RadioGroupProps } from "./types";

/**
 * A container managing mutually exclusive {@link Radio} options.
 *
 * Coordinates single-selection radio values, keyboard navigation arrow-key roving,
 * accessible labels, helper descriptions, and validation error messages.
 *
 * @example
 * ```tsx
 * import { RadioGroup, Radio } from '@adgytec/web-ui-components';
 *
 * <RadioGroup label="Delivery Speed" defaultValue="standard">
 *     <Radio value="standard">Standard (3-5 days)</Radio>
 *     <Radio value="express">Express (1-2 days)</Radio>
 *     <Radio value="overnight">Overnight</Radio>
 * </RadioGroup>
 * ```
 */
export const RadioGroup: React.FC<RadioGroupProps> = ({
    label,
    description,
    errorMessage,
    showDescriptionOnInvalid = false,
    children,
    className,
    radioItemsGap = 24,
    labelPlacement,
    containerStateLayer,
    ...props
}) => {
    return (
        <RadioGroupContext value={{ labelPlacement, containerStateLayer }}>
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
                data-radio-group
            >
                {({ orientation, isInvalid }) => {
                    const showDescription =
                        description &&
                        (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                    return (
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

                            {showDescription && (
                                <Description>{description}</Description>
                            )}
                            <FieldError>{errorMessage}</FieldError>
                        </>
                    );
                }}
            </AriaRadioGroup>
        </RadioGroupContext>
    );
};
