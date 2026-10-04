import clsx from "clsx";
import { Slider as AriaSlider, SliderTrack } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { Label } from "../../Label";
import {
    SliderColors,
    SliderSizeStyles,
    SliderStyles,
    TrackContainerStyles,
    TrackStyles,
} from "../core";
import { SliderStops } from "../SliderStops";
import { SliderThumb } from "../SliderThumb";
import styles from "./slider.module.css";
import type { SliderProps } from "./types";

/**
 * Material Design 3 single-value slider component.
 *
 * Allows users to choose a specific numeric value along a track using a draggable thumb.
 * Supports configurable sizes, step indicators via [`SliderStops`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/Input/Slider/SliderStops/SliderStops.tsx),
 * inset icons with automatic minimum-value swapping, and custom output formatting.
 *
 * @example
 * ```tsx
 * import { Slider } from "@adgytec/web-ui-components";
 * import { Volume2, VolumeX } from "lucide-react";
 *
 * <Slider
 *     label="Volume"
 *     minValue={0}
 *     maxValue={100}
 *     defaultValue={50}
 *     size="medium"
 *     insetIcon={Volume2}
 *     minInsetIcon={VolumeX}
 * />
 * ```
 */
export const Slider = <T extends number>({
    label,
    thumbLabel,
    size = "small",
    step = 1,
    minValue = 0,
    maxValue = 100,
    showInBetweenSteps,
    insetIcon,
    minInsetIcon,
    maxStops,
    outputRenderer,
    className,
    ...props
}: SliderProps<T>) => {
    const canShowIcon = size !== "extra-small" && size !== "small";
    const iconSize = size === "extra-large" ? 32 : 24;

    return (
        <AriaSlider
            minValue={minValue}
            maxValue={maxValue}
            step={step}
            className={(renderProps) =>
                clsx(
                    SliderStyles,
                    SliderColors,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {({ orientation, state, isDisabled }) => {
                const thumbValue = state.getThumbPercent(0);

                let visibleIcon = insetIcon;
                if (thumbValue === 0 && minInsetIcon) {
                    visibleIcon = minInsetIcon;
                }

                return (
                    <>
                        {label && <Label>{label}</Label>}

                        <div
                            className={clsx(TrackContainerStyles)}
                            data-orientation={orientation}
                        >
                            <SliderTrack
                                className={clsx(
                                    TrackStyles,
                                    SliderSizeStyles(size)
                                )}
                            >
                                <div
                                    className={clsx(styles["visual-track"])}
                                    data-orientation={orientation}
                                >
                                    <div
                                        className={clsx(styles["active-track"])}
                                        data-orientation={orientation}
                                        style={{
                                            flexGrow: state.getThumbPercent(0),
                                        }}
                                    />

                                    <div
                                        className={clsx(
                                            styles["inactive-track"]
                                        )}
                                        style={{
                                            flexGrow:
                                                1 - state.getThumbPercent(0),
                                        }}
                                        data-orientation={orientation}
                                    />
                                </div>

                                {canShowIcon && visibleIcon && (
                                    <Icon
                                        icon={visibleIcon}
                                        size={iconSize}
                                        className={clsx(styles["icon"])}
                                        data-minimum-value={
                                            thumbValue === 0 || undefined
                                        }
                                        data-disabled={isDisabled || undefined}
                                        data-orientation={orientation}
                                    />
                                )}

                                <SliderThumb
                                    size={size}
                                    orientation={orientation}
                                    aria-label={thumbLabel}
                                    outputRenderer={outputRenderer}
                                />

                                <SliderStops
                                    minValue={minValue}
                                    maxValue={maxValue}
                                    step={step}
                                    orientation={orientation}
                                    showInBetweenSteps={showInBetweenSteps}
                                    maxStops={maxStops}
                                />
                            </SliderTrack>
                        </div>
                    </>
                );
            }}
        </AriaSlider>
    );
};
