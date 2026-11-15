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

            <div className="items" data-progress-indicator>
                <LinearProgressIndicator value={value} />

                <LinearProgressIndicator wavy={false} value={value} />
            </div>

            <div className="items" data-progress-indicator>
                <LinearProgressIndicator value={value} thickness="thick" />

                <LinearProgressIndicator
                    wavy={false}
                    value={value}
                    thickness="thick"
                />
            </div>

            <div className="items" data-progress-indicator>
                <LinearProgressIndicator isIndeterminate />

                <LinearProgressIndicator isIndeterminate wavy={false} />
            </div>

            <div className="items" data-progress-indicator>
                <LinearProgressIndicator isIndeterminate thickness="thick" />

                <LinearProgressIndicator
                    isIndeterminate
                    thickness="thick"
                    wavy={false}
                />
            </div>
        </div>
    );
};
