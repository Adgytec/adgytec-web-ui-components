import { useState } from "react";
import { ConnectedButton, ConnectedButtonGroup } from "../../components/Button";
import {
    GridBackgroundDecorator,
    RadialGlowDecorator,
    type RadialGlowDecoratorColor,
    type RadialGlowDecoratorVariant,
} from "../../components/Decorators";
import {
    Select,
    SelectItem,
    SelectList,
    SelectPopover,
    SelectTrigger,
    Slider,
} from "../../components/Input";

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
    const [zIndex, setZIndex] = useState<number>(10);
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
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1rem",
                        alignItems: "center",
                    }}
                >
                    <Select
                        shouldCloseOnSelect={false}
                        label="Glow Arrangement"
                        placeholder="Select arrangement"
                        value={glowVariant}
                        onChange={(key) => {
                            if (key !== null) {
                                setGlowVariant(
                                    key as RadialGlowDecoratorVariant
                                );
                            }
                        }}
                        style={{ minInlineSize: 240 }}
                    >
                        <SelectTrigger />
                        <SelectPopover>
                            <SelectList>
                                {glowVariants.map((item) => (
                                    <SelectItem
                                        key={item.id}
                                        id={item.id}
                                        label={item.label}
                                    />
                                ))}
                            </SelectList>
                        </SelectPopover>
                    </Select>

                    <Select
                        shouldCloseOnSelect={false}
                        label="Glow Color"
                        placeholder="Select color"
                        value={glowColor}
                        onChange={(key) => {
                            if (key !== null) {
                                setGlowColor(key as RadialGlowDecoratorColor);
                            }
                        }}
                        style={{ minInlineSize: 200 }}
                    >
                        <SelectTrigger />
                        <SelectPopover>
                            <SelectList>
                                {glowColors.map((item) => (
                                    <SelectItem
                                        key={item.id}
                                        id={item.id}
                                        label={item.label}
                                    />
                                ))}
                            </SelectList>
                        </SelectPopover>
                    </Select>
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
