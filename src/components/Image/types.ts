export type Preset =
    | "default"
    | "thumbnail"
    | "normal"
    | "wide"
    | "full"
    | "grid3Col";

type NativeImageProps = Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "src" | "srcSet"
>;

export type ImageProps = NativeImageProps & {
    preset?: Preset;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
};
