import clsx from "clsx";
import { useState } from "react";
import { type Color, ColorPicker, parseColor } from "react-aria-components";
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@/components/Colors";
import { ColorField, FieldNode } from "@/components/Input";
import { COLOR_ADGYTEC_BLUE, COLOR_ADGYTEC_YELLOW, typography } from "@/utils";

const brandColors = [
    COLOR_ADGYTEC_BLUE,
    COLOR_ADGYTEC_YELLOW,
    "#6750a4",
    "#ba1a1a",
    "#2e6c31",
    "#d97706",
    "#0284c7",
    "#7c3aed",
    "#ec4899",
    "#475569",
];

const pastelColors = [
    "#ffd8e4",
    "#e8def8",
    "#d0bcff",
    "#c8e6c9",
    "#bbdefb",
    "#fff9c4",
    "#ffe0b2",
    "#ffcdd2",
];

const alphaColors = [
    "rgba(0, 85, 255, 1)",
    "rgba(0, 85, 255, 0.75)",
    "rgba(0, 85, 255, 0.5)",
    "rgba(0, 85, 255, 0.25)",
    "rgba(255, 183, 3, 1)",
    "rgba(255, 183, 3, 0.75)",
    "rgba(255, 183, 3, 0.5)",
    "rgba(255, 183, 3, 0.25)",
];

const sizes = [
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
] as const;

export const ColorSwatchPickerPreview = () => {
    const [selectedColor, setSelectedColor] = useState<Color>(() =>
        parseColor(COLOR_ADGYTEC_BLUE)
    );

    return (
        <div className="items-grid">
            {/* Shapes */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Shapes (Round vs Square)
                </span>

                <div className="items-grid" style={{ gap: 16 }}>
                    <div>
                        <span
                            className={clsx(typography.bodySmall)}
                            style={{ display: "block", marginBottom: 8 }}
                        >
                            Round (default)
                        </span>
                        <ColorSwatchPicker
                            shape="round"
                            size="medium"
                            defaultValue={COLOR_ADGYTEC_BLUE}
                            aria-label="Round color picker"
                        >
                            {brandColors.map((color) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>

                    <div>
                        <span
                            className={clsx(typography.bodySmall)}
                            style={{ display: "block", marginBottom: 8 }}
                        >
                            Square
                        </span>
                        <ColorSwatchPicker
                            shape="square"
                            size="medium"
                            defaultValue={COLOR_ADGYTEC_YELLOW}
                            aria-label="Square color picker"
                        >
                            {brandColors.map((color) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>
                </div>
            </div>

            {/* Sizes */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>Sizes</span>

                <div className="items-grid" style={{ gap: 16 }}>
                    {sizes.map((size) => (
                        <div key={size}>
                            <span
                                className={clsx(typography.bodySmall)}
                                style={{ display: "block", marginBottom: 8 }}
                            >
                                {size}
                            </span>
                            <ColorSwatchPicker
                                size={size}
                                defaultValue={brandColors[0]}
                                aria-label={`${size} color picker`}
                            >
                                {brandColors.slice(0, 6).map((color) => (
                                    <ColorSwatchPickerItem
                                        key={color}
                                        color={color}
                                        aria-label={`Color ${color}`}
                                    >
                                        <ColorSwatch />
                                    </ColorSwatchPickerItem>
                                ))}
                            </ColorSwatchPicker>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controlled with Live Value */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Controlled Selection
                </span>

                <div
                    className="items"
                    style={{ alignItems: "center", gap: 16 }}
                >
                    <ColorSwatchPicker
                        value={selectedColor}
                        onChange={setSelectedColor}
                        size="medium"
                        shape="round"
                        aria-label="Controlled color picker"
                    >
                        {brandColors.map((color) => (
                            <ColorSwatchPickerItem
                                key={color}
                                color={color}
                                aria-label={`Color ${color}`}
                            >
                                <ColorSwatch />
                            </ColorSwatchPickerItem>
                        ))}
                    </ColorSwatchPicker>

                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "8px 16px",
                            borderRadius: 8,
                            backgroundColor:
                                "var(--md-sys-color-surface-container)",
                        }}
                    >
                        <ColorSwatch
                            color={selectedColor}
                            size="medium"
                            shape="round"
                        />
                        <span className={clsx(typography.labelMedium)}>
                            {selectedColor.toString("hex")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Layout (Grid vs Stack) */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Layout Options
                </span>

                <div
                    className="items"
                    style={{ alignItems: "flex-start", gap: 32 }}
                >
                    <div>
                        <span
                            className={clsx(typography.bodySmall)}
                            style={{ display: "block", marginBottom: 8 }}
                        >
                            Grid (default)
                        </span>
                        <ColorSwatchPicker
                            layout="grid"
                            size="medium"
                            defaultValue={pastelColors[0]}
                            aria-label="Grid layout picker"
                        >
                            {pastelColors.map((color) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>

                    <div>
                        <span
                            className={clsx(typography.bodySmall)}
                            style={{ display: "block", marginBottom: 8 }}
                        >
                            Stack (vertical)
                        </span>
                        <ColorSwatchPicker
                            layout="stack"
                            size="small"
                            shape="square"
                            defaultValue={pastelColors[2]}
                            aria-label="Stack layout picker"
                        >
                            {pastelColors.slice(0, 4).map((color) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>
                </div>
            </div>

            {/* States (Disabled Items) */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Disabled States
                </span>

                <div className="items-grid" style={{ gap: 16 }}>
                    <div>
                        <span
                            className={clsx(typography.bodySmall)}
                            style={{ display: "block", marginBottom: 8 }}
                        >
                            All Items Disabled
                        </span>
                        <ColorSwatchPicker
                            size="medium"
                            defaultValue={brandColors[2]}
                            aria-label="Color picker with all items disabled"
                        >
                            {brandColors.slice(0, 5).map((color) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    isDisabled
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>

                    <div>
                        <span
                            className={clsx(typography.bodySmall)}
                            style={{ display: "block", marginBottom: 8 }}
                        >
                            Specific Items Disabled
                        </span>
                        <ColorSwatchPicker
                            size="medium"
                            defaultValue={brandColors[0]}
                            aria-label="Color picker with specific disabled items"
                        >
                            {brandColors.slice(0, 6).map((color, index) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    isDisabled={index === 1 || index === 4}
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>
                </div>
            </div>

            {/* Alpha & Transparency */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Alpha & Transparency
                </span>

                <ColorSwatchPicker
                    shape="square"
                    size="medium"
                    defaultValue={alphaColors[0]}
                    aria-label="Transparency color picker"
                >
                    {alphaColors.map((color) => (
                        <ColorSwatchPickerItem
                            key={color}
                            color={color}
                            aria-label={`Color ${color}`}
                        >
                            <ColorSwatch />
                        </ColorSwatchPickerItem>
                    ))}
                </ColorSwatchPicker>
            </div>

            {/* Integration with ColorField & ColorPicker */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Integration with ColorField
                </span>

                <ColorPicker defaultValue={COLOR_ADGYTEC_BLUE}>
                    <div
                        className="items-grid"
                        style={{ gap: 16, maxWidth: 360 }}
                    >
                        <ColorField
                            label="Selected Brand Color"
                            description="Select from palette or type custom hex"
                            leading={
                                <FieldNode>
                                    <ColorSwatch shape="square" size="small" />
                                </FieldNode>
                            }
                        />

                        <ColorSwatchPicker
                            size="small"
                            shape="round"
                            aria-label="Palette presets"
                        >
                            {brandColors.map((color) => (
                                <ColorSwatchPickerItem
                                    key={color}
                                    color={color}
                                    aria-label={`Color ${color}`}
                                >
                                    <ColorSwatch />
                                </ColorSwatchPickerItem>
                            ))}
                        </ColorSwatchPicker>
                    </div>
                </ColorPicker>
            </div>
        </div>
    );
};

export default ColorSwatchPickerPreview;
