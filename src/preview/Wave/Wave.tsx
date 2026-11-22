import { SineCircular, SineLinear } from "@/components/Wave";

export const WavePreview = () => {
    return (
        <div className="items-grid">
            <div
                className="items-grid"
                style={{
                    width: "100%",
                    color: "var(--md-sys-color-primary)",
                }}
            >
                <SineLinear width={200} />

                <SineLinear width={200} end={0.5} />

                <SineLinear width={200} start={0.5} />

                <SineLinear width={200} start={0.25} end={0.75} />
            </div>

            <div
                className="items"
                style={{
                    width: "100%",
                    color: "var(--md-sys-color-primary)",
                }}
            >
                {/* full wavy ring (defaults) */}
                <SineCircular />
                {/* faster, slower, reversed, frozen */}
                <SineCircular speed={300} />
                <SineCircular speed={100} />
                <SineCircular speed={-150} />
                <SineCircular speed={0} />
                {/* flat ring (no wave) */}
                <SineCircular amplitude={0} />
                {/* partial arcs (start/end in turns, 0 = 12 o'clock) */}
                <SineCircular start={0} end={0.25} />
                {/* quarter, 12 → 3 o'clock */}
                <SineCircular start={0} end={0.5} />{" "}
                {/* half, 12 → 6 o'clock */}
                <SineCircular start={0.25} end={0.75} /> {/* 3 → 9 o'clock */}
            </div>
        </div>
    );
};
