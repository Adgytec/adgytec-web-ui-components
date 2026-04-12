export type IconSize =
    | "dense"
    | "standard"
    | "medium"
    | "large"
    | "extra-large";

export type IconWeight = "regular" | "w-medium" | "bold";

export type IconProps = {
    size?: IconSize;
    weight?: IconWeight;
    fill?: boolean;
    withText?: boolean;
    icon: string;
};
