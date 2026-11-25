import { createContext, useContext } from "react";
import type { ColorSwatchShape } from "./shape";
import type { ColorSwatchSize } from "./size";

export type ColorSwatchConfigContextType = {
    size: ColorSwatchSize;
    shape: ColorSwatchShape;
};

export const ColorSwatchConfigContext =
    createContext<ColorSwatchConfigContextType | null>(null);

export function useColorSwatchConfigContext() {
    return useContext(ColorSwatchConfigContext);
}

type UseColorSwatchConfigOptions = {
    size?: ColorSwatchSize;
    shape?: ColorSwatchShape;
};

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
