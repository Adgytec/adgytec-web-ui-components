export type IconSize =
    | "dense"
    | "standard"
    | "medium"
    | "large"
    | "extra-large";

export type IconWeight = "regular" | "medium" | "bold";

export type IconProps = {
    icon: string;
    size?: IconSize;
    weight?: IconWeight;
    fill?: boolean;
    withText?: boolean;
};
