import { Armchair, Sofa } from "lucide-react";
import { type CSSProperties, Fragment } from "react";
import {
    ButtonGroup,
    type ButtonShape,
    type ButtonSize,
    type CoreButtonColor,
    ToggleButton,
    ToggleIconButton,
} from "../../components/Button";
import { Divider } from "../../components/Divider";
import { typography } from "../../utils/typography";

export const ButtonGroupPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const shapes: ButtonShape[] = ["round", "square"];

    const colors: CoreButtonColor[] = ["outlined", "tonal", "filled"];

    return (
        <>
            {colors.map((color) => (
                <Fragment key={color}>
                    {shapes.map((shape) => (
                        <Fragment key={shape}>
                            <h3
                                className={typography.titleLargeEmphasized}
                                style={{
                                    textAlign: "center",
                                }}
                            >{`${color}-${shape}`}</h3>

                            {sizes.map((size) => (
                                <Fragment key={size}>
                                    <div className="items">
                                        <ButtonGroup
                                            size={size}
                                            color={color}
                                            shape={shape}
                                        >
                                            <ToggleButton id={"one"}>
                                                One
                                            </ToggleButton>

                                            <ToggleButton id={"two"}>
                                                Two
                                            </ToggleButton>

                                            <ToggleButton
                                                id={"three"}
                                                icon={Armchair}
                                            >
                                                Three
                                            </ToggleButton>

                                            <ToggleIconButton
                                                id={"four"}
                                                icon={Sofa}
                                            />

                                            <ToggleButton id={"five"}>
                                                Five
                                            </ToggleButton>
                                        </ButtonGroup>
                                    </div>
                                </Fragment>
                            ))}

                            <Divider
                                style={
                                    {
                                        "--md-divider-color":
                                            "var(--md-sys-color-primary)",
                                    } as CSSProperties
                                }
                            />
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </>
    );
};

export default ButtonGroupPreview;
