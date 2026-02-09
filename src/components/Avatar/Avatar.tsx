import type { AvatarBaseProps, AvatarProps } from "./types";
import styles from "./avatar.module.css";
import { Image } from "@/components/Image";

const AvatarBase = ({ children, size, type, theme }: AvatarBaseProps) => {
    return (
        <div
            className={`${styles["avatar"]} ${styles[size]} ${styles[type]} ${styles[theme]}`}
        >
            {children}
        </div>
    );
};

export const Avatar = ({
    type,
    image,
    children,
    size = "normal",
    theme = "primary",
}: AvatarProps) => {
    if (type === "children") {
        return (
            <AvatarBase type="node" size={size} theme={theme}>
                {children}
            </AvatarBase>
        );
    }

    return (
        <AvatarBase size={size} type="image" theme={theme}>
            <Image {...image} />
        </AvatarBase>
    );
};
