import { Sine, SineCircular, SineLinear } from "@/components/Wave";

export const WavePreview = () => {
    return (
        <div className="items-grid">
            <div
                className="items-grid"
                style={{ width: "100%", color: "var(--md-sys-color-primary)" }}
            >
                <Sine />

                <Sine speed={0} />
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
                {/* custom size, wave and color */}
                <SineCircular
                    size={64}
                    amplitude={2}
                    wavelength={20}
                    strokeWidth={5}
                    strokeColor="#6750a4"
                />
                {/* faster, slower, reversed, frozen */}
                <SineCircular speed={60} />
                <SineCircular speed={10} />
                <SineCircular speed={-30} />
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
        </div>
    );
};
