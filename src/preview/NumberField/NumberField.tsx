import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { FieldButton } from "@/components/Input";
import { type InputVariant, NumberField } from "../../components/Input";

export const RenderNumberField = ({
    isInvalid,
    isDisabled,
    variant,
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: InputVariant;
}) => {
    const [val, setVal] = useState(10);
    return (
        <NumberField
            variant={variant}
            label="Quantity"
            description="Enter the quantity of items"
            placeholder="0"
            minValue={0}
            maxValue={100000}
            value={val}
            onChange={setVal}
            isInvalid={isInvalid}
            isDisabled={isDisabled}
            formatOptions={{ style: "decimal" }}
            leading={<FieldButton icon={Minus} slot="decrement" />}
            trailing={<FieldButton icon={Plus} slot="increment" />}
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
