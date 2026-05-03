import {
    TimeField as AriaTimeField,
    DateInput,
    DateSegment,
    type TimeValue,
} from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import type { TimeFieldProps } from "./types";

export const TimeField = <T extends TimeValue>({
    label,
    description,
    errorMessage,
    ...props
}: TimeFieldProps<T>) => {
    return (
        <AriaTimeField {...props}>
            {label && <Label>{label}</Label>}

            <DateInput>
                {(segement) => <DateSegment segment={segement} />}
            </DateInput>

            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </AriaTimeField>
    );
};
