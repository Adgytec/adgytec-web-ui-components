import type React from "react";
import type { ImageVariant, ImageVariantProps } from "./types";

const VARIANT_PRIORITY: ImageVariant[] = [
    "medium",
    "large",
    "extraLarge",
    "small",
    "thumbnail",
];

const VARIANT_WIDTH: Record<ImageVariant, number> = {
    thumbnail: 150,
    small: 320,
    medium: 640,
    large: 1024,
    extraLarge: 1600,
};

export const ImageVariants: React.FC<ImageVariantProps> = ({
    original,
    variants,
    ...props
}) => {
    const availableVariants = VARIANT_PRIORITY.filter((key) =>
        variants[key]?.trim()
    );

    // All variants empty, use original
    if (availableVariants.length === 0) {
        return <img src={original} {...props} />;
    }

    // get source
    const src = variants[availableVariants[0]];

    // Build srcSet
    const srcSet = availableVariants
        .map((key) => {
            const val = variants[key];
            const width = VARIANT_WIDTH[key];

            return `${val} ${width}w`;
        })
        .join(", ");

    return <img src={src} srcSet={srcSet} {...props} />;
};
