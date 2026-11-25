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
    const ctx = useContext(ColorSwatchConfigContext);
    if (!ctx) {
        throw new Error(
            "useColorSwatchConfigContext must be used within ColorSwatchConfigContext"
        );
    }

    return ctx;
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
        useColorSwatchConfigContext();

    const swatchSize = size ?? configSize;
    const swatchShape = shape ?? configShape;

    return { swatchSize, swatchShape };
}
