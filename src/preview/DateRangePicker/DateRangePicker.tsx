import { DateRangePicker } from "../../components/Input";

export const DateRangePickerPreview = () => {
    return (
        <div className="items">
            <DateRangePicker label="Dates" description="Select date range" />

            <DateRangePicker
                label="Dates"
                description="Select date range"
                showDescriptionOnInvalid
                isInvalid
            />

            <DateRangePicker
                label="Dates"
                description="Select date range"
                isDisabled
            />
        </div>
    );
};

export default DateRangePickerPreview;
