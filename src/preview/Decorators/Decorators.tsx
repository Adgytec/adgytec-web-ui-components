import { useState } from "react";
import {
    ButtonGroup,
    ConnectedButton,
    ConnectedButtonGroup,
    ToggleButton,
} from "../../components/Button";
import {
    GridBackgroundDecorator,
    RadialGlowDecorator,
    type RadialGlowDecoratorColor,
    type RadialGlowDecoratorVariant,
} from "../../components/Decorators";
import { Slider } from "../../components/Input";

const glowVariants: { id: RadialGlowDecoratorVariant; label: string }[] = [
    { id: "default", label: "Default" },
    { id: "split", label: "Split" },
    { id: "top-bar", label: "Top Bar" },
    { id: "corners", label: "Corners" },
    { id: "aurora", label: "Aurora (Animated)" },
    { id: "spotlight", label: "Spotlight (Pulse)" },
    { id: "nebula", label: "Nebula (Drift)" },
    { id: "horizon", label: "Horizon" },
    { id: "spiral", label: "Spiral Orbit" },
];

const glowColors: { id: RadialGlowDecoratorColor; label: string }[] = [
    { id: "multi", label: "Multi-Accent" },
    { id: "primary", label: "Primary" },
    { id: "secondary", label: "Secondary" },
    { id: "tertiary", label: "Tertiary" },
];

export const DecoratorsPreview = () => {
    const [selectedDecorator, setSelectedDecorator] = useState<
        "grid" | "glow" | "none"
    >("grid");
    const [gridVariant, setGridVariant] = useState<"lines" | "dots">("lines");
    const [glowVariant, setGlowVariant] =
        useState<RadialGlowDecoratorVariant>("default");
    const [glowColor, setGlowColor] =
        useState<RadialGlowDecoratorColor>("multi");
    const [zIndex, setZIndex] = useState<number>(0);
    const [gridSize, setGridSize] = useState<number>(40);

    return (
        <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
            <p
                style={{
                    margin: 0,
                    color: "var(--md-sys-color-on-surface-variant)",
                }}
            >
                Decorators are non-blocking visual backgrounds that span the
                full page without affecting document layout or blocking pointer
                events.
            </p>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                }}
            >
                <span style={{ fontWeight: 500 }}>Select Decorator:</span>
                <ConnectedButtonGroup
                    selectionMode="single"
                    color="tonal"
                    selectedKeys={new Set([selectedDecorator])}
                    onSelectionChange={(keys) => {
                        if (keys.size > 0) {
                            setSelectedDecorator(
                                [...keys][0] as "grid" | "glow" | "none"
                            );
                        }
                    }}
                >
                    <ConnectedButton id="grid">Grid Background</ConnectedButton>
                    <ConnectedButton id="glow">Radial Glow</ConnectedButton>
                    <ConnectedButton id="none">None</ConnectedButton>
                </ConnectedButtonGroup>
            </div>

            {selectedDecorator === "grid" && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    <span style={{ fontWeight: 500 }}>Grid Style:</span>
                    <ConnectedButtonGroup
                        selectionMode="single"
                        color="tonal"
                        selectedKeys={new Set([gridVariant])}
                        onSelectionChange={(keys) => {
                            if (keys.size > 0) {
                                setGridVariant(
                                    [...keys][0] as "lines" | "dots"
                                );
                            }
                        }}
                    >
                        <ConnectedButton id="lines">Lines</ConnectedButton>
                        <ConnectedButton id="dots">Dots</ConnectedButton>
                    </ConnectedButtonGroup>
                </div>
            )}

            {selectedDecorator === "glow" && (
                <>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        <span style={{ fontWeight: 500 }}>
                            Glow Arrangement:
                        </span>
                        <ConnectedButtonGroup
                            selectionMode="single"
                            color="tonal"
                            selectedKeys={new Set([glowVariant])}
                            onSelectionChange={(keys) => {
                                if (keys.size > 0) {
                                    setGlowVariant(
                                        [
                                            ...keys,
                                        ][0] as RadialGlowDecoratorVariant
                                    );
                                }
                            }}
                        >
                            {glowVariants.map((item) => (
                                <ConnectedButton key={item.id} id={item.id}>
                                    {item.label}
                                </ConnectedButton>
                            ))}
                        </ConnectedButtonGroup>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                        }}
                    >
                        <span style={{ fontWeight: 500 }}>Glow Color:</span>
                        <ButtonGroup
                            selectedKeys={new Set([glowColor])}
                            onSelectionChange={(keys) => {
                                if (keys.size > 0) {
                                    setGlowColor(
                                        [...keys][0] as RadialGlowDecoratorColor
                                    );
                                }
                            }}
                        >
                            {glowColors.map((item) => (
                                <ToggleButton key={item.id} id={item.id}>
                                    {item.label}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </>
            )}

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    maxInlineSize: "20rem",
                }}
            >
                <Slider
                    label={`z-index (${zIndex})`}
                    minValue={-20}
                    maxValue={10}
                    value={zIndex}
                    onChange={(val) => setZIndex(val as number)}
                    size="small"
                />

                {selectedDecorator === "grid" && (
                    <Slider
                        label={`Grid Size (${gridSize}px)`}
                        minValue={20}
                        maxValue={100}
                        value={gridSize}
                        onChange={(val) => setGridSize(val as number)}
                        size="small"
                    />
                )}
            </div>

            {selectedDecorator === "grid" && (
                <GridBackgroundDecorator
                    zIndex={zIndex}
                    gridSize={gridSize}
                    variant={gridVariant}
                />
            )}
            {selectedDecorator === "glow" && (
                <RadialGlowDecorator
                    zIndex={zIndex}
                    variant={glowVariant}
                    color={glowColor}
                />
            )}
        </div>
    );
};

export default DecoratorsPreview;
