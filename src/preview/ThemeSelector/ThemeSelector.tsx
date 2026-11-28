import { Variant } from "@material/material-color-utilities";
import type { TernaryDarkMode } from "usehooks-ts";
import { ConnectedButton, ConnectedButtonGroup } from "@/components/Button";
import {
    ColorSwatch,
    ColorSwatchPicker,
    ColorSwatchPickerItem,
} from "@/components/Colors";
import {
    CenteredSlider,
    Select,
    SelectItem,
    SelectList,
    SelectPopover,
    SelectTrigger,
} from "@/components/Input";
import { useTheme } from "@/components/Theme";
import { COLOR_ADGYTEC_BLUE, COLOR_ADGYTEC_YELLOW } from "@/utils/theme";

const colors = [
    { label: "Adgytec Yellow", value: COLOR_ADGYTEC_YELLOW },
    { label: "Adgytec Blue", value: COLOR_ADGYTEC_BLUE },
    { label: "Deep Purple", value: "#6750a4" },
    { label: "Crimson Red", value: "#ba1a1a" },
    { label: "Forest Green", value: "#2e6c31" },
    { label: "Amber Orange", value: "#d97706" },
    { label: "Sky Blue", value: "#0284c7" },
    { label: "Violet", value: "#7c3aed" },
    { label: "Rose Pink", value: "#ec4899" },
    { label: "Teal", value: "#006a6a" },
    { label: "Olive Lime", value: "#556500" },
    { label: "Slate Gray", value: "#475569" },
];

const schemes = [
    { label: "Content", value: Variant.CONTENT },
    { label: "Expressive", value: Variant.EXPRESSIVE },
    { label: "Fidelity", value: Variant.FIDELITY },
    { label: "Fruit salad", value: Variant.FRUIT_SALAD },
    { label: "Monochrome", value: Variant.MONOCHROME },
    { label: "Neutral", value: Variant.NEUTRAL },
    { label: "Rainbow", value: Variant.RAINBOW },
    { label: "Tonal spot", value: Variant.TONAL_SPOT },
    { label: "Vibrant", value: Variant.VIBRANT },
];

const themes = [
    { label: "System", value: "system" },
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
] satisfies { label: string; value: TernaryDarkMode }[];

export const ThemeSelectorPreview = () => {
    const {
        sourceColor: { setValue: setColor, value: color },
        contrast: { setValue: setContrast, value: contrast },
        scheme: { setValue: setVariant, value: variant },
        ternaryDarkMode: { ternaryDarkMode, setTernaryDarkMode },
    } = useTheme();

    return (
        <div className="items-grid">
            <div className="items">
                <ColorSwatchPicker
                    value={color}
                    onChange={(newColor) => setColor(newColor.toString("hex"))}
                    size="medium"
                    shape="round"
                    aria-label="Theme source color"
                    style={{ flexWrap: "wrap", justifyContent: "center" }}
                >
                    {colors.map((c) => (
                        <ColorSwatchPickerItem
                            key={c.value}
                            color={c.value}
                            aria-label={c.label}
                        >
                            <ColorSwatch />
                        </ColorSwatchPickerItem>
                    ))}
                </ColorSwatchPicker>
            </div>

            <div>
                <CenteredSlider
                    label="Contrast"
                    value={contrast}
                    onChange={setContrast}
                    minValue={-1}
                    maxValue={1}
                    step={0.5}
                    showInBetweenSteps
                />
            </div>

            <div className="items">
                <Select
                    shouldCloseOnSelect={false}
                    label="Scheme"
                    placeholder="Select scheme"
                    value={variant}
                    onChange={(key) => {
                        if (key !== null) {
                            setVariant(Number(key) as Variant);
                        }
                    }}
                    style={{ minInlineSize: 240 }}
                >
                    <SelectTrigger />
                    <SelectPopover>
                        <SelectList>
                            {schemes.map((scheme) => (
                                <SelectItem
                                    key={scheme.value}
                                    id={scheme.value}
                                    label={scheme.label}
                                />
                            ))}
                        </SelectList>
                    </SelectPopover>
                </Select>
            </div>

            <div className="items">
                <ConnectedButtonGroup
                    selectionMode="single"
                    color="tonal"
                    selectedKeys={new Set([ternaryDarkMode])}
                    onSelectionChange={(keys) => {
                        if (keys.size > 0) {
                            setTernaryDarkMode([...keys][0] as TernaryDarkMode);
                        }
                    }}
                >
                    {themes.map((theme) => (
                        <ConnectedButton key={theme.value} id={theme.value}>
                            {theme.label}
                        </ConnectedButton>
                    ))}
                </ConnectedButtonGroup>
            </div>
        </div>
    );
};

export default ThemeSelectorPreview;
