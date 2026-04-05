// TODO: better api for clients
// remove type parameter
// client directly send nullable image that will be passed to Image components
// and required string whose first letter will be displayed if no image details
// will also use that string for image alt value

import clsx from "clsx";
import { Image } from "@/components/Image";
import styles from "./avatar.module.css";
import type { AvatarBaseProps, AvatarProps, AvatarSize } from "./types";

const AVATAR_RENDER_SIZE: Record<AvatarSize, number> = {
    small: 32,
    normal: 48,
    large: 64,
};

const AvatarBase = ({ children, size, type, theme }: AvatarBaseProps) => {
    return (
        <div
            className={clsx(
                styles.avatar,
                styles[size],
                styles[type],
                styles[theme]
            )}
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
