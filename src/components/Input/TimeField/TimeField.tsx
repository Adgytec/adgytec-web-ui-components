import clsx from "clsx";
import {
    TimeField as AriaTimeField,
    DateInput,
    DateSegment,
    type TimeValue,
} from "react-aria-components";
import { typography } from "@/utils";
import {
    Colors,
    DateInputStyles,
    DateSegmentStyles,
    EditorInputStyles,
    EditorStyles,
    InputGroupStyles,
    SupportingTextStyles,
    UnsetStyles,
} from "../core";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import type { TimeFieldProps } from "./types";

export const TimeField = <T extends TimeValue>({
    label,
    description,
    errorMessage,
    className,
    ...props
}: TimeFieldProps<T>) => {
    return (
        <AriaTimeField
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
                {(segment) => {
                    return (
                        <DateSegment
                            className={clsx(
                                DateSegmentStyles,
                                typography.bodyLarge
                            )}
                            segment={segment}
                        />
                    );
                }}
            </DateInput>

            {description && (
                <Description className={clsx(SupportingTextStyles)}>
                    {description}
                </Description>
            )}
            <FieldError>{errorMessage}</FieldError>
        </AriaTimeField>
    );
};
