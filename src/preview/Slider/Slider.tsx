import clsx from "clsx";
import { DollarSign, HandCoins } from "lucide-react";
import { Fragment } from "react";
import type { Orientation } from "react-aria";
import { Slider, SliderOutput, type SliderSize } from "../../components/Input";

export const SliderPreview = () => {
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
                                    <Slider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        insetIcon={DollarSign}
                                        minInsetIcon={HandCoins}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--custom-output`}
                                        orientation={o}
                                        size={size}
                                        insetIcon={DollarSign}
                                        minInsetIcon={HandCoins}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                        outputRenderer={({ thumbIndex }) => (
                                            <SliderOutput>
                                                {({ state }) => {
                                                    const value =
                                                        state.getThumbPercent(
                                                            thumbIndex
                                                        );

                                                    if (value < 0.5) {
                                                        return "less";
                                                    }

                                                    if (value > 0.5) {
                                                        return "more";
                                                    }

                                                    return "half";
                                                }}
                                            </SliderOutput>
                                        )}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}`}
                                        orientation={o}
                                        size={size}
                                        insetIcon={DollarSign}
                                        minInsetIcon={HandCoins}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--steps`}
                                        orientation={o}
                                        size={size}
                                        minValue={0}
                                        maxValue={1}
                                        step={0.04}
                                        maxStops={25}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--steps--not-aligned`}
                                        orientation={o}
                                        size={size}
                                        minValue={0}
                                        maxValue={10}
                                        step={3}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "INR",
                                        }}
                                    />
                                </div>

                                <div>
                                    <Slider
                                        label={`${o}--${size}--disabled`}
                                        step={5}
                                        defaultValue={33}
                                        isDisabled
                                        orientation={o}
                                        size={size}
                                        formatOptions={{
                                            style: "currency",
                                            currency: "USD",
                                        }}
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

export default SliderPreview;
