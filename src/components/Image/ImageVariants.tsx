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
    let src = "";

    const availableVariants = VARIANT_PRIORITY.filter((key) => {
        const val = variants[key];
        const present = val && val.trim() !== "";

        if (src === "" && present) {
            src = val;
        }

        return present;
    });

    // All variants empty, use original
    if (availableVariants.length === 0) {
        return <img src={original} {...props} />;
    }

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
