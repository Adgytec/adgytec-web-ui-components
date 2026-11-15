import { useState } from "react";
import { ProgressSlider } from "@/components/ProgressSlider";

export const ProgressSliderPreview = () => {
    const [value, setValue] = useState(33);

    return (
        <div className="items-grid">
            <ProgressSlider value={value} onChange={setValue} />

            <ProgressSlider active={false} value={value} onChange={setValue} />

            <ProgressSlider buffered={75} value={value} onChange={setValue} />

            <ProgressSlider value={value} onChange={setValue} isDisabled />
        </div>
    );
};
