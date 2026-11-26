import clsx from "clsx";
import { Fragment } from "react";
import type { Orientation } from "react-aria";
import { RangeSlider, type SliderSize } from "../../components/Input";

export const RangeSliderPreview = () => {
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
                                <RangeSlider
                                    orientation={o}
                                    size={size}
                                    formatOptions={{
                                        style: "currency",
                                        currency: "USD",
                                    }}
                                />

                                <RangeSlider
                                    orientation={o}
                                    size={size}
                                    step={10}
                                    formatOptions={{
                                        style: "currency",
                                        currency: "INR",
                                    }}
                                />

                                <RangeSlider
                                    isDisabled
                                    orientation={o}
                                    step={5}
                                    size={size}
                                    defaultValue={[30, 50]}
                                />
                            </Fragment>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default RangeSliderPreview;
