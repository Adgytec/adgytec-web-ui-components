import { type InputVariant, TimeField } from "../../components/Input";

export const RenderTimeField = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: InputVariant;
}) => {
    return (
        <TimeField
            variant={variant}
            label="Appointment Time"
            description="Add your appointment time"
            isDisabled={isDisabled}
            isInvalid={isInvalid}
            granularity="second"
        />
    );
};

export const TimeFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderTimeField />
                <RenderTimeField variant="outlined" />
            </div>

            <div className="items">
                <RenderTimeField isInvalid />
                <RenderTimeField isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderTimeField isDisabled />
                <RenderTimeField isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderTimeField isInvalid isDisabled />
                <RenderTimeField isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default TimeFieldPreview;
