export type Preset =
    | "default"
    | "thumbnail"
    | "normal"
    | "wide"
    | "full"
    | "grid3Col";

export interface ImageProps
    extends Omit<React.ComponentPropsWithRef<"img">, "src" | "srcSet"> {
    preset?: Preset;
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    extraLarge: string;
}
