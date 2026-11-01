import { useState } from "react";
import { Button } from "../../components/Button";
import {
    GridBackgroundDecorator,
    RadialGlowDecorator,
} from "../../components/Decorators";
import { Slider } from "../../components/Input";

export const DecoratorsPreview = () => {
    const [selectedDecorator, setSelectedDecorator] = useState<
        "grid" | "glow" | "none"
    >("grid");
    const [gridVariant, setGridVariant] = useState<"lines" | "dots">("lines");
    const [glowVariant, setGlowVariant] = useState<
        | "default"
        | "split"
        | "top-bar"
        | "corners"
        | "aurora"
        | "spotlight"
        | "nebula"
        | "horizon"
        | "spiral"
    >("default");
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
                    flexWrap: "wrap",
                    gap: "1rem",
                    alignItems: "center",
                }}
            >
                <span>Select Decorator:</span>
                <Button
                    onPress={() => setSelectedDecorator("grid")}
                    color={selectedDecorator === "grid" ? "filled" : "outlined"}
                >
                    Grid Background
                </Button>
                <Button
                    onPress={() => setSelectedDecorator("glow")}
                    color={selectedDecorator === "glow" ? "filled" : "outlined"}
                >
                    Radial Glow
                </Button>
                <Button
                    onPress={() => setSelectedDecorator("none")}
                    color={selectedDecorator === "none" ? "filled" : "outlined"}
                >
                    None
                </Button>
            </div>

            {selectedDecorator === "grid" && (
                <div
                    style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                    }}
                >
                    <span>Grid Style:</span>
                    <Button
                        onPress={() => setGridVariant("lines")}
                        color={gridVariant === "lines" ? "filled" : "outlined"}
                    >
                        Lines
                    </Button>
                    <Button
                        onPress={() => setGridVariant("dots")}
                        color={gridVariant === "dots" ? "filled" : "outlined"}
                    >
                        Dots
                    </Button>
                </div>
            )}

            {selectedDecorator === "glow" && (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                        alignItems: "center",
                    }}
                >
                    <span>Glow Arrangement:</span>
                    <Button
                        onPress={() => setGlowVariant("default")}
                        color={
                            glowVariant === "default" ? "filled" : "outlined"
                        }
                    >
                        Default (3 Blobs)
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("split")}
                        color={glowVariant === "split" ? "filled" : "outlined"}
                    >
                        Split Glow
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("top-bar")}
                        color={
                            glowVariant === "top-bar" ? "filled" : "outlined"
                        }
                    >
                        Top Glowing Bar
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("corners")}
                        color={
                            glowVariant === "corners" ? "filled" : "outlined"
                        }
                    >
                        Corners Glow
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("aurora")}
                        color={glowVariant === "aurora" ? "filled" : "outlined"}
                    >
                        Aurora Glow (Animated)
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("spotlight")}
                        color={
                            glowVariant === "spotlight" ? "filled" : "outlined"
                        }
                    >
                        Spotlight (Pulse)
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("nebula")}
                        color={glowVariant === "nebula" ? "filled" : "outlined"}
                    >
                        Nebula (Drift)
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("horizon")}
                        color={
                            glowVariant === "horizon" ? "filled" : "outlined"
                        }
                    >
                        Horizon Glow
                    </Button>
                    <Button
                        onPress={() => setGlowVariant("spiral")}
                        color={glowVariant === "spiral" ? "filled" : "outlined"}
                    >
                        Spiral Orbit
                    </Button>
                </div>
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
                <RadialGlowDecorator zIndex={zIndex} variant={glowVariant} />
            )}
        </div>
    );
};

export default DecoratorsPreview;
