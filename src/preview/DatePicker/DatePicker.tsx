import { CalendarDate } from "@internationalized/date";
import { DatePicker } from "../../components/Input";

export const DatePickerPreview = () => {
    const minValue = new CalendarDate(1998, 12, 31);
    const maxValue = new CalendarDate(1999, 2, 1);
    return (
        <div className="items">
            <DatePicker
                label="Birthday"
                description="Add your birthday"
                minValue={minValue}
                maxValue={maxValue}
                weekdayStyle="short"
            />

            <DatePicker
                label="Birthday"
                description="Add your birthday"
                showDescriptionOnInvalid
                isInvalid
            />

            <DatePicker
                label="Birthday"
                description="Add your birthday"
                isDisabled
            />
        </div>
    );
};

export default DatePickerPreview;
