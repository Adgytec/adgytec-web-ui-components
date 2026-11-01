import clsx from "clsx";
import { Fragment } from "react";
import type { Orientation } from "react-aria";
import { CenteredSlider, type SliderSize } from "../../components/Input";

export const CenteredSliderPreview = () => {
    const sizes: SliderSize[] = [
        "extra-small",
        "small",
        "medium",
        "large",
        "extra-large",
    ];

    const orientation: Orientation[] = ["horizontal", "vertical"];

    return (
        <div className="items-grid">
            {orientation.map((o) => {
                return (
                    <div
                        key={o}
                        className={clsx("items")}
                        style={{
                            justifyContent: "center",
                        }}
                        data-slider-orientation={o}
                    >
                        {sizes.map((size) => (
                            <Fragment key={size}>
                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}--steps-odd`}
                                        orientation={o}
                                        size={size}
                                        step={10}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}--steps-even`}
                                        orientation={o}
                                        size={size}
                                        step={11}
                                        maxValue={33}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <CenteredSlider
                                        label={`${o}--${size}--disabled`}
                                        isDisabled
                                        orientation={o}
                                        step={5}
                                        size={size}
                                        defaultValue={35}
                                    />
                                </div>
                            </Fragment>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default CenteredSliderPreview;
