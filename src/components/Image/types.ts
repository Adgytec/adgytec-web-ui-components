export type ImageVariant =
    | "thumbnail"
    | "small"
    | "medium"
    | "large"
    | "extraLarge";

export type ImageVariants = Record<ImageVariant, string>;

type NativeImageProps = Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "src" | "srcSet"
>;

export type ImageSourceProps = NativeImageProps & {
    type: "source";
    src: string;
    original?: never;
    variants?: never;
};

export type ImageVariantProps = NativeImageProps & {
    type: "variants";
    src?: never;
    original: string;
    variants: ImageVariants;
};

export type ImageProps = ImageSourceProps | ImageVariantProps;
