export interface LoadingIndicatorProps {
    containment?: "default" | "contained";
    size?: number;
}

export const MinLoadingIndicatorSize = 24;
export const DefaultLoadingIndicatorSize = 48;
export const MaxLoadingIndicatorSize = 240;

export function getUsableIndicatorSize(size: number) {
    if (Number.isNaN(size)) {
        return DefaultLoadingIndicatorSize;
    }

    return Math.min(
        MaxLoadingIndicatorSize,
        Math.max(MinLoadingIndicatorSize, Math.round(size))
    );
}
