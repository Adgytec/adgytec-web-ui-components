import { DateField } from "../../components/Input";

export const RenderDateField = ({
    isInvalid,
    isDisabled,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
}) => {
    return (
        <DateField
            label="Appointment Date"
            description="Add your appointment date"
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            showDescriptionOnInvalid={isInvalid}
            granularity="second"
        />
    );
};

export const DateFieldPreview = () => {
    return (
        <div className="items">
            <RenderDateField />

            <RenderDateField isInvalid />

            <RenderDateField isDisabled />

            <RenderDateField isInvalid isDisabled />
        </div>
    );
};

export default DateFieldPreview;
