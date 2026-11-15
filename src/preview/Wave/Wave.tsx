import { Sine } from "@/components/Wave";

export const WavePreview = () => {
    return (
        <div className="items-grid">
            <div
                className="items"
                style={{ width: "100%", color: "var(--md-sys-color-primary)" }}
            >
                <Sine />

                <Sine speed={0} />
            </div>
        </div>
    );
};
