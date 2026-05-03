import clsx from "clsx";
import {
    DateField as AriaDateField,
    DateInput,
    DateSegment,
    type DateValue,
} from "react-aria-components";
import { typography } from "@/utils";
import {
    Colors,
    DateInputStyles,
    DateSegementStyles,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    UnsetStyles,
} from "../core";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import type { DateFieldProps } from "./types";

export const DateField = <T extends DateValue>({
    label,
    description,
    errorMessage,
    className,
    ...props
}: DateFieldProps<T>) => {
    return (
        <AriaDateField
            className={(renderProps) =>
                clsx(
                    Colors,
                    InputGroupStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {label && <Label>{label}</Label>}

            <DateInput
                className={clsx(
                    UnsetStyles,
                    EditorStyles,
                    EditorInputStyles,
                    typography.bodyLarge,
                    DateInputStyles
                )}
                data-date-input={true}
            >
                {(segement) => (
                    <DateSegment
                        className={clsx(
                            DateSegementStyles,
                            typography.bodyLarge
                        )}
                        segment={segement}
                    />
                )}
            </DateInput>

            {description && (
                <Description
                    className={clsx(SupportingTextStyles)}
                    data-description={true}
                >
                    {description}
                </Description>
            )}
            <FieldError>{errorMessage}</FieldError>
        </AriaDateField>
    );
};
