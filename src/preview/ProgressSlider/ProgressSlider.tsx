import { useState } from "react";
import { ToggleButton } from "@/components/Button";
import { ProgressSlider } from "@/components/ProgressSlider";

export const ProgressSliderPreview = () => {
    const [value, setValue] = useState(33);

    const [active, setActive] = useState(true);

    return (
        <div className="items-grid">
            <div className="items">
                <ToggleButton
                    shape="square"
                    isSelected={active}
                    onChange={setActive}
                    size="extra-large"
                >
                    Active
                </ToggleButton>
            </div>

            <ProgressSlider active={active} value={value} onChange={setValue} />
            <br />
            <ProgressSlider value={value} onChange={setValue} isDisabled />
        </div>
    );
};
