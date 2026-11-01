import { CloudSnow, CloudSun, Sun, SunMoon, SunSnow } from "lucide-react";
import {
    type ButtonShape,
    type ButtonSize,
    ConnectedButton,
    ConnectedButtonGroup,
    type ConnectedButtonGroupColor,
} from "../../components/Button";
import { typography } from "../../utils/typography";

export const ConnectedButtonGroupPreview = () => {
    const sizes: ButtonSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const shapes: ButtonShape[] = ["round", "square"];

    const buttonColor: ConnectedButtonGroupColor[] = [
        "filled",
        "tonal",
        "outlined",
        "elevated",
    ];

    return (
        <>
            {buttonColor.map((color) => (
                <div className="button-color" key={`button-${color}`}>
                    <h3 className={typography.headlineMediumEmphasized}>
                        {color}
                    </h3>

                    {sizes.map((size) => (
                        <div className="button-size" key={size}>
                            <h4 className={typography.headlineSmall}>{size}</h4>

                            {shapes.map((shape) => (
                                <div className="items" key={shape}>
                                    <ConnectedButtonGroup
                                        size={size}
                                        shape={shape}
                                        color={color}
                                    >
                                        <ConnectedButton id="1" icon={Sun}>
                                            Sun
                                        </ConnectedButton>

                                        <ConnectedButton id="2" icon={SunMoon}>
                                            Sun Moon
                                        </ConnectedButton>

                                        <ConnectedButton
                                            id="3"
                                            icon={SunSnow}
                                            isDisabled
                                        >
                                            Sun Snow
                                        </ConnectedButton>

                                        <ConnectedButton id="4" icon={CloudSun}>
                                            Cloud Sun
                                        </ConnectedButton>

                                        <ConnectedButton
                                            id="5"
                                            icon={CloudSnow}
                                        />
                                    </ConnectedButtonGroup>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default ConnectedButtonGroupPreview;
