import { CalendarDate } from "@internationalized/date";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { Calendar } from "@/components/Calendar";
import {
    DatePicker,
    DatePickerPopover,
    FieldButton,
    type FieldVariant,
} from "../../components/Input";

export const RenderDatePicker = ({
    isInvalid,
    isDisabled,
    variant,
    trailing,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: FieldVariant;
    trailing?: ReactNode;
}) => {
    const minValue = new CalendarDate(1998, 12, 31);
    const maxValue = new CalendarDate(1999, 2, 1);

    return (
        <DatePicker
            variant={variant}
            label="Birthday"
            description="Add your birthday"
            minValue={minValue}
            maxValue={maxValue}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            trailing={trailing}
        >
            <DatePickerPopover>
                <Calendar />
            </DatePickerPopover>
        </DatePicker>
    );
};

export const DatePickerPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderDatePicker />
                <RenderDatePicker
                    variant="outlined"
                    trailing={<FieldButton icon={Mail} />}
                />
            </div>

            <div className="items">
                <RenderDatePicker
                    isInvalid
                    trailing={<FieldButton icon={Mail} />}
                />
                <RenderDatePicker isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderDatePicker isDisabled />
                <RenderDatePicker isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderDatePicker isInvalid isDisabled />
                <RenderDatePicker isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default DatePickerPreview;
