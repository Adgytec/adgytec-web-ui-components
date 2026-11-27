import { useState } from "react";
import { ToggleButton } from "@/components/Button";
import { ProgressSlider } from "@/components/ProgressSlider";

// module-level so the reference stays stable between renders
const BUFFERED = [
    { start: 45, end: 60 },
    { start: 70, end: 85 },
];

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

            <ProgressSlider
                wavy={wavy}
                value={value}
                onChange={setValue}
                bufferedRanges={BUFFERED}
            />
            <br />
            <ProgressSlider
                value={value}
                onChange={setValue}
                bufferedRanges={BUFFERED}
                isDisabled
            />
        </div>
    );
};
