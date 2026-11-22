import { useState } from "react";
import { type InputVariant, NumberField } from "../../components/Input";

export const RenderNumberField = ({
    isInvalid,
    isDisabled,
    variant,
    showButton,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: InputVariant;
    showButton?: "none" | "both" | "increment" | "decrement";
}) => {
    const [val, setVal] = useState(10);
    return (
        <NumberField
            variant={variant}
            label="Quantity"
            description="Enter the quantity of items"
            placeholder="0"
            minValue={0}
            maxValue={100}
            value={val}
            onChange={setVal}
            showButton={showButton}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            showDescriptionOnInvalid={isInvalid}
        />
    );
};

export const NumberFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderNumberField />
                <RenderNumberField variant="outlined" />
            </div>

            <div className="items">
                <RenderNumberField isInvalid />
                <RenderNumberField isInvalid variant="outlined" />
            </div>

            <div className="items">
                <RenderNumberField isDisabled />
                <RenderNumberField isDisabled variant="outlined" />
            </div>

            <div className="items">
                <RenderNumberField isInvalid isDisabled />
                <RenderNumberField isInvalid isDisabled variant="outlined" />
            </div>
        </div>
    );
};

export default NumberFieldPreview;
