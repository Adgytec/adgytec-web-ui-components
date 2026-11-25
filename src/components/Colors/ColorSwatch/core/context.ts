import { createContext, useContext } from "react";
import type { ColorSwatchShape } from "./shape";
import type { ColorSwatchSize } from "./size";

/**
 * Context configuration passed from {@link ColorSwatchPicker} to descendant {@link ColorSwatch} components.
 */
export type ColorSwatchConfigContextType = {
    /** The active size preset for swatches within this context. */
    size: ColorSwatchSize;
    /** The active shape preset for swatches within this context. */
    shape: ColorSwatchShape;
};

/**
 * React context used by {@link ColorSwatchPicker} to broadcast shape and size configurations to descendant swatches.
 */
export const ColorSwatchConfigContext =
    createContext<ColorSwatchConfigContextType | null>(null);

/**
 * Hook to retrieve the current {@link ColorSwatchConfigContextType} or `null` if used outside a picker.
 */
export function useColorSwatchConfigContext() {
    return useContext(ColorSwatchConfigContext);
}

/**
 * Options for resolving color swatch sizing and shape presets.
 */
export type UseColorSwatchConfigOptions = {
    /** Explicit size override for the individual swatch. */
    size?: ColorSwatchSize;
    /** Explicit shape override for the individual swatch. */
    shape?: ColorSwatchShape;
};

/**
 * Resolves the effective size and shape for a {@link ColorSwatch}, combining explicit props
 * and inherited values from {@link ColorSwatchConfigContext}.
 *
 * Sizing fallbacks:
 * - `swatchSize`: explicit `size` ?? context `size` ?? `"small"`
 * - `swatchShape`: explicit `shape` ?? context `shape` ?? `"round"`
 */
export function useColorSwatchConfig({
    size,
    shape,
}: UseColorSwatchConfigOptions) {
    const { size: configSize, shape: configShape } =
        useColorSwatchConfigContext() ?? {};

    const swatchSize = size ?? configSize ?? "small";
    const swatchShape = shape ?? configShape ?? "round";

    return { swatchSize, swatchShape };
}
