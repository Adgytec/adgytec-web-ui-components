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
                                <Slider
                                    orientation={o}
                                    size={size}
                                    insetIcon={DollarSign}
                                    minInsetIcon={HandCoins}
                                    formatOptions={{
                                        style: "currency",
                                        currency: "USD",
                                    }}
                                />

                                <Slider
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

                                <Slider
                                    outputRenderer={null}
                                    orientation={o}
                                    size={size}
                                    insetIcon={DollarSign}
                                    minInsetIcon={HandCoins}
                                    formatOptions={{
                                        style: "currency",
                                        currency: "USD",
                                    }}
                                />

                                <Slider
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

                                <Slider
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

                                <Slider
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
                            </Fragment>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default SliderPreview;
