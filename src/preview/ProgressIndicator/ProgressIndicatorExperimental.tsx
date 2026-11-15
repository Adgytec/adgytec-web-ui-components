import { useState } from "react";
import { CenteredSlider, Slider } from "@/components/Input";
import {
    CircularIndeterminate,
    CircularProgress,
    LinearIndeterminate,
    LinearProgress,
} from "@/experimental/ProgressIndicator";

export const ProgressIndicatorExperimentalPreview = () => {
    const [value, setValue] = useState(50);
    const [waveLength, setWaveLength] = useState(30);
    const [amplitude, setAmplitude] = useState(3);
    const [speed, setSpeed] = useState(30);
    const [size, setSize] = useState(48);

    return (
        <div className="items-grid">
            <div className="items-grid">
                <div
                    style={{
                        width: "100%",
                    }}
                >
                    <CenteredSlider
                        showInBetweenSteps
                        value={value}
                        onChange={setValue}
                        label="Progress change"
                    />
                </div>

                <div className="items">
                    <div
                        style={{
                            width: "100%",
                        }}
                    >
                        <Slider
                            minValue={10}
                            step={5}
                            maxValue={100}
                            showInBetweenSteps
                            size="extra-small"
                            value={waveLength}
                            onChange={setWaveLength}
                            label="Wavelength"
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                        }}
                    >
                        <Slider
                            minValue={0}
                            step={1}
                            maxValue={10}
                            showInBetweenSteps
                            size="extra-small"
                            value={amplitude}
                            onChange={setAmplitude}
                            label="Amplitude"
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                        }}
                    >
                        <Slider
                            minValue={10}
                            step={10}
                            maxValue={100}
                            showInBetweenSteps
                            size="extra-small"
                            value={speed}
                            onChange={setSpeed}
                            label="Speed"
                        />
                    </div>

                    <div
                        style={{
                            width: "100%",
                        }}
                    >
                        <Slider
                            minValue={24}
                            step={4}
                            maxValue={56}
                            showInBetweenSteps
                            size="extra-small"
                            value={size}
                            onChange={setSize}
                            label="Size"
                        />
                    </div>
                </div>
            </div>

            <div className="items">
                <LinearProgress
                    value={value}
                    wavelength={waveLength}
                    amp={amplitude}
                    speed={speed}
                />

                <LinearIndeterminate
                    wavelength={waveLength}
                    amp={amplitude}
                    speed={speed}
                />

                <CircularProgress
                    value={value}
                    wavelength={waveLength / 2}
                    amp={amplitude / 1.5}
                    speed={speed * 5}
                    size={size}
                />

                <CircularIndeterminate
                    wavelength={waveLength / 2}
                    amp={amplitude / 1.5}
                    speed={speed * 5}
                    size={size}
                />
            </div>
        </div>
    );
};
