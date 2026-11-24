import { DateField, type InputVariant } from "../../components/Input";

export const RenderDateField = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: InputVariant;
}) => {
    return (
        <DateField
            variant={variant}
            label="Appointment Date"
            description="Add your appointment date"
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            granularity="second"
        />
    );
};

export const DateFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderDateField />
                <RenderDateField variant="outlined" />
            </div>

            <div className="items">
                <RenderDateField isInvalid />
                <RenderDateField isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderDateField isDisabled />
                <RenderDateField isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderDateField isInvalid isDisabled />
                <RenderDateField isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default DateFieldPreview;
