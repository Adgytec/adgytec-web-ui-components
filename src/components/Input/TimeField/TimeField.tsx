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
    showDescriptionOnInvalid = false,
    className,
    ref,
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
            {({ isInvalid }) => {
                const showDescription =
                    description &&
                    (!isInvalid || (isInvalid && showDescriptionOnInvalid));

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <DateInput
                            ref={ref}
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

                        {showDescription && (
                            <Description className={clsx(SupportingTextStyles)}>
                                {description}
                            </Description>
                        )}
                        <FieldError className={clsx(SupportingTextStyles)}>
                            {errorMessage}
                        </FieldError>
                    </>
                );
            }}
        </AriaTimeField>
    );
};
