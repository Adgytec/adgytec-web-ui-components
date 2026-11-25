import { Palette, Pipette } from "lucide-react";
import { useState } from "react";
import { ColorPicker, ColorSwatch, parseColor } from "react-aria-components";
import { COLOR_ADGYTEC_BLUE, COLOR_ADGYTEC_YELLOW } from "@/utils";
import {
    ColorField,
    FieldButton,
    FieldIcon,
    FieldNode,
    type FieldVariant,
} from "../../components/Input";

export const RenderColorField = ({
    isInvalid,
    isDisabled,
    variant,
    defaultValue = COLOR_ADGYTEC_YELLOW,
    leadingType = "swatch",
    label = "Theme Color",
    description = "Enter a hex color code",
}: {
    isInvalid?: boolean;
    isDisabled?: boolean;
    variant?: FieldVariant;
    defaultValue?: string;
    leadingType?: "swatch" | "icon" | "none";
    label?: string;
    description?: string;
}) => {
    return (
        <ColorPicker defaultValue={defaultValue}>
            <ColorField
                variant={variant}
                label={label}
                description={description}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                errorMessage={
                    isInvalid ? "Please enter a valid color value" : undefined
                }
                leading={
                    leadingType === "swatch" ? (
                        <FieldNode>
                            <ColorSwatch
                                style={{
                                    width: 24,
                                    height: 24,
                                    borderRadius:
                                        "var(--md-sys-shape-corner-radius-extra-small, 4px)",
                                    border: "1px solid var(--md-sys-color-outline-variant, rgba(0, 0, 0, 0.2))",
                                    boxSizing: "border-box",
                                }}
                            />
                        </FieldNode>
                    ) : leadingType === "icon" ? (
                        <FieldIcon icon={Palette} />
                    ) : undefined
                }
            />
        </ColorPicker>
    );
};

export const ControlledColorField = () => {
    const [color, setColor] = useState(() => parseColor("#386a20"));

    return (
        <ColorPicker value={color} onChange={setColor}>
            <ColorField
                label="Custom Brand Color"
                description={`Current value: ${color.toString("hex")}`}
                leading={
                    <FieldNode>
                        <ColorSwatch
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius:
                                    "var(--md-sys-shape-corner-radius-extra-small, 4px)",
                                border: "1px solid var(--md-sys-color-outline-variant, rgba(0, 0, 0, 0.2))",
                                boxSizing: "border-box",
                            }}
                        />
                    </FieldNode>
                }
                trailing={
                    <FieldButton
                        icon={Pipette}
                        onPress={() => setColor(parseColor("#b3261e"))}
                        aria-label="Set to red"
                    />
                }
            />
        </ColorPicker>
    );
};

export const ColorFieldPreview = () => {
    return (
        <div className="items-grid">
            <div className="items">
                <RenderColorField />
                <RenderColorField
                    variant="outlined"
                    defaultValue={COLOR_ADGYTEC_BLUE}
                />
            </div>

            <div className="items">
                <RenderColorField
                    leadingType="icon"
                    label="Accent Color"
                    defaultValue={COLOR_ADGYTEC_BLUE}
                />
                <RenderColorField
                    variant="outlined"
                    leadingType="icon"
                    label="Accent Color"
                />
            </div>

            <div className="items">
                <RenderColorField isInvalid defaultValue="#invalid" />
                <RenderColorField
                    isInvalid
                    variant="outlined"
                    defaultValue="#invalid"
                />
            </div>

            <div className="items">
                <RenderColorField isDisabled />
                <RenderColorField
                    isDisabled
                    variant="outlined"
                    defaultValue={COLOR_ADGYTEC_BLUE}
                />
            </div>

            <div className="items">
                <RenderColorField
                    isInvalid
                    isDisabled
                    defaultValue={COLOR_ADGYTEC_BLUE}
                />
                <RenderColorField isInvalid isDisabled variant="outlined" />
            </div>

            <div className="items">
                <ControlledColorField />
            </div>
        </div>
    );
};

export default ColorFieldPreview;
