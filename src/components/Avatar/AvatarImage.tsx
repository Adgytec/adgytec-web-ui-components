import { clsx } from "clsx";
import { Image } from "../Image";
import styles from "./avatar.module.css";
import type { AvatarImageProps } from "./types";

export const AvatarImage: React.FC<AvatarImageProps> = ({ image, alt }) => {
    // max avatar render size is 3rem * 3rem
    return (
        <Image
            className={clsx(styles["image"])}
            alt={alt}
            preset="thumbnail"
            thumbnail={image}
            small={image}
            medium={image}
            large={image}
            extraLarge={image}
        />
    );
};
