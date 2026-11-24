import { RangeCalendar } from "@/components/Calendar";
import {
    DatePickerPopover,
    DateRangePicker,
    type FieldVariant,
} from "../../components/Input";

export const RenderDateRangePicker = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: FieldVariant;
}) => {
    return (
        <DateRangePicker
            variant={variant}
            label="Dates"
            description="Select date range"
            isInvalid={isInvalid}
            isDisabled={isDisabled}
        >
            <DatePickerPopover>
                <RangeCalendar />
            </DatePickerPopover>
        </DateRangePicker>
    );
};

export const DateRangePickerPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderDateRangePicker />
                <RenderDateRangePicker variant="outlined" />
            </div>

            <div className="items">
                <RenderDateRangePicker isInvalid />
                <RenderDateRangePicker isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderDateRangePicker isDisabled />
                <RenderDateRangePicker isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderDateRangePicker isInvalid isDisabled />
                <RenderDateRangePicker
                    isInvalid
                    isDisabled
                    variant="outlined"
                />
            </div>
        </div>
    );
};

export default DateRangePickerPreview;
