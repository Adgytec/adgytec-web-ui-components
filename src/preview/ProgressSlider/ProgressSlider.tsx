import { useState } from "react";
import { ToggleButton } from "@/components/Button";
import { ProgressSlider } from "@/components/ProgressSlider";

export const ProgressSliderPreview = () => {
    const [value, setValue] = useState(33);

    const [wavy, setWavy] = useState(true);

    return (
        <div className="items-grid">
            <div className="items">
                <ToggleButton
                    shape="square"
                    isSelected={wavy}
                    onChange={setWavy}
                    size="extra-large"
                >
                    Wavy
                </ToggleButton>
            </div>

            <ProgressSlider wavy={wavy} value={value} onChange={setValue} />
            <br />
            <ProgressSlider value={value} onChange={setValue} isDisabled />
        </div>
    );
};
