import { useState } from "react";
import { Slider } from "@/components/Input";
import { LinearProgressIndicator } from "@/components/ProgressIndicator/LinearProgressIndicator/LinearProgressIndicator";

export const ProgressIndicatorPreview = () => {
    const [value, setValue] = useState(50);

    return (
        <div className="items-grid">
            <div
                style={{
                    width: "100%",
                }}
            >
                <Slider value={value} onChange={setValue} />
            </div>

            <LinearProgressIndicator value={value} />

            <LinearProgressIndicator value={value} thickness="thick" />
        </div>
    );
};
