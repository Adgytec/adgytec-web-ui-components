import { Variant } from "@material/material-color-utilities";
import type { TernaryDarkMode } from "usehooks-ts";
import {
    ButtonGroup,
    ConnectedButton,
    ConnectedButtonGroup,
    ToggleButton,
} from "@/components/Button";
import { CenteredSlider } from "@/components/Input";
import { useTheme } from "@/components/Theme";
import { COLOR_ADGYTEC_BLUE, COLOR_ADGYTEC_YELLOW } from "@/utils/theme";

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
                <ButtonGroup
                    selectedKeys={new Set([color])}
                    onSelectionChange={(keys) => {
                        if (keys.size > 0) {
                            setColor([...keys][0] as string);
                        }
                    }}
                >
                    <ToggleButton id={COLOR_ADGYTEC_YELLOW}>
                        Yellow
                    </ToggleButton>

                    <ToggleButton id={COLOR_ADGYTEC_BLUE}>Blue</ToggleButton>
                </ButtonGroup>
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
                <ConnectedButtonGroup
                    selectionMode="single"
                    color="tonal"
                    selectedKeys={new Set([variant])}
                    onSelectionChange={(keys) => {
                        if (keys.size > 0) {
                            setVariant([...keys][0] as Variant);
                        }
                    }}
                >
                    {schemes.map((scheme) => (
                        <ConnectedButton key={scheme.value} id={scheme.value}>
                            {scheme.label}
                        </ConnectedButton>
                    ))}
                </ConnectedButtonGroup>
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
