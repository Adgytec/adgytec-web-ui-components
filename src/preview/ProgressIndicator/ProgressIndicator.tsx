import { useState } from "react";
import { Slider } from "@/components/Input";
import {
    CircularProgressIndicator,
    LinearProgressIndicator,
} from "@/components/ProgressIndicator";

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

            {/* ---------- linear ---------- */}
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
                    wavy={false}
                    isIndeterminate
                    thickness="thick"
                />
            </div>

            {/* ---------- circular ---------- */}
            <div className="items" data-progress-indicator>
                <CircularProgressIndicator value={value} />

                <CircularProgressIndicator wavy={false} value={value} />
            </div>

            <div className="items" data-progress-indicator>
                <CircularProgressIndicator value={value} thickness="thick" />

                <CircularProgressIndicator
                    wavy={false}
                    value={value}
                    thickness="thick"
                />
            </div>

            <div className="items" data-progress-indicator>
                <CircularProgressIndicator isIndeterminate />

                <CircularProgressIndicator isIndeterminate wavy={false} />
            </div>

            <div className="items" data-progress-indicator>
                <CircularProgressIndicator isIndeterminate thickness="thick" />

                <CircularProgressIndicator
                    isIndeterminate
                    thickness="thick"
                    wavy={false}
                />
            </div>

            {/* ---------- circular sizes ---------- */}
            <div className="items" data-progress-indicator>
                <CircularProgressIndicator value={value} size={24} />
                <CircularProgressIndicator value={value} size={48} />
                <CircularProgressIndicator value={value} size={64} />
                <CircularProgressIndicator value={value} size={96} />
            </div>
        </div>
    );
};
