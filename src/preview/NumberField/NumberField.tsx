import { NumberField } from "@/components/Input";

export const NumberFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <NumberField isInvalid />
                <NumberField variant="outlined" />
            </div>
        </div>
    );
};
