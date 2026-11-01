import { TimeField } from "../../components/Input";

export const RenderTimeField = ({
    isInvalid,
    isDisabled,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
}) => {
    return (
        <TimeField
            label="Appointment Time"
            description="Add your appointment time"
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            showDescriptionOnInvalid={isInvalid}
            granularity="second"
        />
    );
};

export const TimeFieldPreview = () => {
    return (
        <div className="items">
            <RenderTimeField />

            <RenderTimeField isInvalid />

            <RenderTimeField isDisabled />

            <RenderTimeField isInvalid isDisabled />
        </div>
    );
};

export default TimeFieldPreview;
