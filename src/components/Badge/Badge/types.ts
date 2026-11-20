/**
 * Props for the [`Badge`](src/components/Badge/Badge/Badge.tsx) component.
 *
 * Configurable CSS tokens:
 * - `--md-badge-background`: Background color of the badge (`var(--md-sys-color-error)`).
 * - `--md-badge-color`: Text and content color inside the badge (`var(--md-sys-color-on-error)`).
 */
export interface BadgeProps
    extends Omit<React.ComponentPropsWithRef<"span">, "children"> {
    /**
     * Optional numerical value displayed within the badge.
     * When omitted (`undefined`), renders as a compact 6px dot badge.
     * When provided, renders as an expressive pill badge displaying the number or overflow text.
     */
    count?: number;

    /**
     * Threshold at which the count overflows and is displayed with a `+` suffix.
     * Capped at [`MAX_OVERFLOW_AT`](src/components/Badge/Badge/types.ts) (`1000`),
     * resulting in a maximum display value of `999+`.
     *
     * @default 1000
     */
    overflowAt?: number;
}

/**
 * Maximum upper bound for the `overflowAt` threshold (`1000`), yielding a maximum display of `999+`.
 */
export const MAX_OVERFLOW_AT = 1000;
