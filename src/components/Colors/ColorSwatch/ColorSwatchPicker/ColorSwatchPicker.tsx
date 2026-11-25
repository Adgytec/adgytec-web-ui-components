import clsx from "clsx";
import {
    ColorSwatchPicker as AriaColorSwatchPicker,
    composeRenderProps,
} from "react-aria-components";
import { ColorSwatchConfigContext } from "../core";
import styles from "./colorSwatchPicker.module.css";
import type { ColorSwatchPickerProps } from "./types";

/**
 * An accessible color palette selector that presents a collection of color swatches for user selection.
 *
 * Implements Material Design 3 guidelines built on top of React Aria's `ColorSwatchPicker`.
 * Automatically provides shape (`round` or `square`) and size presets (`extra-small` to `extra-large`)
 * to all descendant {@link ColorSwatch} components via {@link ColorSwatchConfigContext}.
 * Supports both horizontal/grid wrapping and vertical column stack layouts.
 *
 * @example
 * ```tsx
 * import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from "@adgytec/web-ui-components";
 *
 * <ColorSwatchPicker
 *     defaultValue="#6750a4"
 *     size="medium"
 *     shape="round"
 *     aria-label="Brand colors"
 * >
 *     <ColorSwatchPickerItem color="#6750a4">
 *         <ColorSwatch />
 *     </ColorSwatchPickerItem>
 *     <ColorSwatchPickerItem color="#ba1a1a">
 *         <ColorSwatch />
 *     </ColorSwatchPickerItem>
 *     <ColorSwatchPickerItem color="#2e6c31">
 *         <ColorSwatch />
 *     </ColorSwatchPickerItem>
 * </ColorSwatchPicker>
 * ```
 *
 * @example
 * ```tsx
 * // Controlled selection with square shape and stack layout
 * import { useState } from "react";
 * import { parseColor, type Color } from "react-aria-components";
 * import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from "@adgytec/web-ui-components";
 *
 * const [color, setColor] = useState<Color>(() => parseColor("#0055ff"));
 *
 * <ColorSwatchPicker
 *     value={color}
 *     onChange={setColor}
 *     shape="square"
 *     layout="stack"
 *     aria-label="Color options"
 * >
 *     <ColorSwatchPickerItem color="#0055ff">
 *         <ColorSwatch />
 *     </ColorSwatchPickerItem>
 *     <ColorSwatchPickerItem color="#ffcc00">
 *         <ColorSwatch />
 *     </ColorSwatchPickerItem>
 * </ColorSwatchPicker>
 * ```
 */
export const ColorSwatchPicker: React.FC<ColorSwatchPickerProps> = ({
    shape = "round",
    size = "small",
    ...props
}) => {
    return (
        <ColorSwatchConfigContext value={{ shape, size }}>
            <AriaColorSwatchPicker
                {...props}
                className={composeRenderProps(props.className, (className) =>
                    clsx(styles["picker"], className)
                )}
            />
        </ColorSwatchConfigContext>
    );
};
