import type { AvatarBaseProps, AvatarProps, AvatarSize } from "./types";
import styles from "./avatar.module.css";
import { Image } from "@/components/Image";

const AVATAR_RENDER_SIZE: Record<AvatarSize, number> = {
    small: 32,
    normal: 48,
    large: 64,
};

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
            <Image {...image} sizes={`${AVATAR_RENDER_SIZE[size]}px`} />
        </AvatarBase>
    );
};
