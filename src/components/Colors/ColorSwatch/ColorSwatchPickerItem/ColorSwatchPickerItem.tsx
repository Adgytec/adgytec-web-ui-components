import { clsx } from "clsx";
import { Check } from "lucide-react";
import {
    ColorSwatchPickerItem as AriaColorSwatchPickerItem,
    composeRenderProps,
} from "react-aria-components";
import { Icon } from "@/components/Icon";
import { TapTarget } from "@/utils";
import styles from "./colorSwatchPickerItem.module.css";
import type { ColorSwatchPickerItemProps } from "./types";

/**
 * An interactive item within a {@link ColorSwatchPicker} representing an individual selectable color.
 *
 * Wraps a {@link ColorSwatch} child element and provides:
 * - Material Design 3 state layers (hover, focus-visible, and pressed scaling animations)
 * - Calibrated focus ring indicator
 * - Automatic high-contrast selection checkmark with `mix-blend-mode: difference`
 * - Disabled item state styling
 *
 * @example
 * ```tsx
 * import { ColorSwatch, ColorSwatchPickerItem } from "@adgytec/web-ui-components";
 *
 * <ColorSwatchPickerItem color="#6750a4" aria-label="Purple">
 *     <ColorSwatch />
 * </ColorSwatchPickerItem>
 * ```
 *
 * @example
 * ```tsx
 * // Disabled item
 * <ColorSwatchPickerItem color="#ba1a1a" isDisabled aria-label="Unavailable red">
 *     <ColorSwatch />
 * </ColorSwatchPickerItem>
 * ```
 */
export const ColorSwatchPickerItem: React.FC<ColorSwatchPickerItemProps> = (
    props
) => {
    return (
        <AriaColorSwatchPickerItem
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["item"], TapTarget, className)
            )}
        >
            {composeRenderProps(props.children, (children, { isSelected }) => (
                <>
                    {isSelected && (
                        <Icon
                            className={clsx(styles["selection"])}
                            icon={Check}
                            size={18}
                            strokeWidth={4}
                        />
                    )}

                    {children}
                </>
            ))}
        </AriaColorSwatchPickerItem>
    );
};
