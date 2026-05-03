import {
    DateField as AriaDateField,
    DateInput,
    DateSegment,
    type DateValue,
} from "react-aria-components";
import { Description } from "../Description";
import { FieldError } from "../FieldError";
import { Label } from "../Label";
import type { DateFieldProps } from "./types";

export const DateField = <T extends DateValue>({
    label,
    description,
    errorMessage,
    ...props
}: DateFieldProps<T>) => {
    return (
        <AriaDateField {...props}>
            {label && <Label>{label}</Label>}

            <DateInput>
                {(segement) => <DateSegment segment={segement} />}
            </DateInput>

            {description && <Description>{description}</Description>}
            <FieldError>{errorMessage}</FieldError>
        </AriaDateField>
    );
};
