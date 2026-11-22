import { CalendarDate } from "@internationalized/date";
import { DatePicker, type InputVariant } from "../../components/Input";

export const RenderDatePicker = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: InputVariant;
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
            weekdayStyle="short"
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            showDescriptionOnInvalid={isInvalid}
        />
    );
};

export const DatePickerPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderDatePicker />
                <RenderDatePicker variant="outlined" />
            </div>

            <div className="items">
                <RenderDatePicker isInvalid />
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
