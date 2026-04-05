import type { ImageProps, Preset } from "./types";

const IMAGE_SIZE_PRESETS: Record<Preset, string> = {
    default: "(max-width: 50rem) 100vw, 50rem", // "sane" default
    thumbnail: "10rem",
    normal: "(max-width: 60rem) 100vw, 60rem",
    wide: "(max-width: 80rem) 100vw, 80rem",
    full: "100vw",
    grid3Col: "(max-width: 40rem) 100vw, (max-width: 80rem) 50vw, 30rem",
};

export const Image: React.FC<ImageProps> = ({
    preset = "default",
    thumbnail,
    small,
    medium,
    large,
    extraLarge,
    alt = "",
    sizes,
    ...props
}) => {
    const defaultSrc = small;
    const finalSizes = sizes || IMAGE_SIZE_PRESETS[preset];

    const srcSet = [
        `${thumbnail} 150w`,
        `${small} 320w`,
        `${medium} 640w`,
        `${large} 1280w`,
        `${extraLarge} 1920w`,
    ].join(", ");

    return (
        <img
            src={defaultSrc}
            srcSet={srcSet}
            sizes={finalSizes}
            alt={alt}
            {...props}
        />
    );
};
