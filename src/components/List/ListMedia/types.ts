/**
 * Width in pixels for the `"image"` media variant (56px).
 */
export const ListMediaImageWidth = 56;

/**
 * Height in pixels for the `"image"` media variant (56px).
 */
export const ListMediaImageHeight = 56;

/**
 * Width in pixels for the standard `"video"` media variant (100px).
 */
export const ListMediaVideoWidth = 100;

/**
 * Height in pixels for the standard `"video"` media variant (56px).
 */
export const ListMediaVideoHeight = 56;

/**
 * Width in pixels for the `"large-video"` media variant (114px).
 */
export const ListMediaLargeVideoWidth = 114;

/**
 * Height in pixels for the `"large-video"` media variant (64px).
 */
export const ListMediaLargeVideoHeight = 64;

/**
 * Preset dimension variants for the [`ListMedia`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListMedia/ListMedia.tsx) container:
 * - `"image"`: 56px × 56px square thumbnail.
 * - `"video"`: 100px × 56px 16:9 aspect video preview.
 * - `"large-video"`: 114px × 64px enlarged video preview.
 */
export type ListMediaVariant = "image" | "video" | "large-video";

/**
 * Props for the [`ListMedia`](file:///home/rohan/work/adgytec/adgytec-web-ui-components/src/components/List/ListMedia/ListMedia.tsx) container component.
 */
export interface ListMediaProps extends React.ComponentPropsWithRef<"div"> {
    /**
     * Preset dimension variant for the media thumbnail container.
     *
     * @default "image"
     */
    variant?: ListMediaVariant;
}
