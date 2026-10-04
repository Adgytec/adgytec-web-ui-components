import clsx from "clsx";
import styles from "./listMedia.module.css";
import type { ListMediaProps } from "./types";

/**
 * Styled media container for thumbnail images and video previews within a [`ListItem`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListItem/ListItem.tsx).
 *
 * Automatically applies rounded corners and `object-fit: cover` to nested `<img>` or `<video>` elements.
 * Supports dimension presets: `"image"` (56×56), `"video"` (100×56), and `"large-video"` (114×64).
 *
 * @example
 * ```tsx
 * import { ListMedia, ListMediaImageWidth, ListMediaImageHeight } from "@adgytec/web-ui-components";
 *
 * <ListMedia variant="image">
 *     <img
 *         src="https://picsum.photos/56/56"
 *         alt="Thumbnail"
 *         width={ListMediaImageWidth}
 *         height={ListMediaImageHeight}
 *     />
 * </ListMedia>
 * ```
 */
export const ListMedia: React.FC<ListMediaProps> = ({
    variant = "image",
    className,
    ...props
}) => {
    return (
        <div
            className={clsx(styles["media"], styles[variant], className)}
            {...props}
        />
    );
};
