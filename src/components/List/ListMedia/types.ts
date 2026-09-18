// constants values to be used by img or video tag

export const ListMediaImageWidth = 56;
export const ListMediaImageHeight = 56;

export const ListMediaSmallVideoWidth = 100;
export const ListMediaSmallVideoHeight = 56;

export const ListMediaLargeVideoWidth = 114;
export const ListMediaLargeVideoHeight = 64;

export type ListMediaVariant = "image" | "video" | "large-video";

export interface ListMediaProps extends React.ComponentPropsWithRef<"div"> {
    variant?: ListMediaVariant;
}
