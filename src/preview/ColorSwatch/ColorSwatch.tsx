import clsx from "clsx";
import { ColorPicker } from "react-aria-components";
import { ColorSwatch } from "@/components/Colors";
import { ColorField, FieldNode } from "@/components/Input";
import { COLOR_ADGYTEC_BLUE, COLOR_ADGYTEC_YELLOW, typography } from "@/utils";

const sampleColors = [
    COLOR_ADGYTEC_BLUE,
    COLOR_ADGYTEC_YELLOW,
    "#6750a4",
    "#ba1a1a",
    "#2e6c31",
    "#d97706",
    "#0d9488",
    "rgba(103, 80, 164, 0.5)",
];

const sizes = [
    "extra-small",
    "small",
    "medium",
    "large",
    "extra-large",
] as const;

export const ColorSwatchPreview = () => {
    return (
        <div className="items-grid">
            {/* Sizes (Round) */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Round Swatches (Sizes)
                </span>

                <div className="items" style={{ alignItems: "center" }}>
                    {sizes.map((size) => (
                        <ColorSwatch
                            key={size}
                            size={size}
                            shape="round"
                            color={COLOR_ADGYTEC_BLUE}
                            aria-label={`Round swatch ${size}`}
                        />
                    ))}
                </div>
            </div>

            {/* Sizes (Square) */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Square Swatches (Sizes)
                </span>

                <div className="items" style={{ alignItems: "center" }}>
                    {sizes.map((size) => (
                        <ColorSwatch
                            key={size}
                            size={size}
                            shape="square"
                            color={COLOR_ADGYTEC_YELLOW}
                            aria-label={`Square swatch ${size}`}
                        />
                    ))}
                </div>
            </div>

            {/* Palette Showcase (Round & Square) */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Color Palette (Round)
                </span>
                <div className="items" style={{ alignItems: "center" }}>
                    {sampleColors.map((color) => (
                        <ColorSwatch
                            key={color}
                            size="medium"
                            shape="round"
                            color={color}
                            aria-label={`Color ${color}`}
                        />
                    ))}
                </div>
            </div>

            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Color Palette (Square)
                </span>
                <div className="items" style={{ alignItems: "center" }}>
                    {sampleColors.map((color) => (
                        <ColorSwatch
                            key={color}
                            size="medium"
                            shape="square"
                            color={color}
                            aria-label={`Color ${color}`}
                        />
                    ))}
                </div>
            </div>

            {/* Integration with ColorField */}
            <div className="items-grid">
                <span className={clsx(typography.titleMedium)}>
                    Integration with ColorField
                </span>
                <div className="items">
                    <ColorPicker defaultValue={COLOR_ADGYTEC_BLUE}>
                        <ColorField
                            label="Theme Primary"
                            leading={
                                <FieldNode>
                                    <ColorSwatch shape="square" size="medium" />
                                </FieldNode>
                            }
                        />
                    </ColorPicker>

                    <ColorPicker defaultValue={COLOR_ADGYTEC_YELLOW}>
                        <ColorField
                            variant="outlined"
                            label="Theme Accent"
                            leading={
                                <FieldNode>
                                    <ColorSwatch shape="square" size="medium" />
                                </FieldNode>
                            }
                        />
                    </ColorPicker>
                </div>
            </div>
        </div>
    );
};

export default ColorSwatchPreview;
