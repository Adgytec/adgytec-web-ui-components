import type { GridListItem } from "react-aria-components";

/**
 * Visual hierarchy and elevation variants for the {@link Card} component.
 *
 * - `"filled"`: Subtle contrast against a surface without elevation shadows (default).
 * - `"elevated"`: Elevated surface with drop shadow, separating card content from the background.
 * - `"outlined"`: Bordered surface with an outline stroke and no elevation shadow.
 */
export type CardVariant = "elevated" | "outlined" | "filled";

/**
 * Props for the {@link Card} component.
 * Extends React Aria's `GridListItem` props, supporting interaction states,
 * selection, and press handlers.
 */
export interface CardProps
    extends React.ComponentPropsWithRef<typeof GridListItem> {
    /**
     * The visual style and elevation variant of the card.
     *
     * @default "filled"
     */
    variant?: CardVariant;
}

/**
 * Recommended spacing (in pixels) between adjacent cards in a grid layout.
 */
export const PaddingBetweenCards = 12;

/**
 * Fixed icon size (in pixels) used by the {@link CardIcon} component.
 */
export const CardIconSize = 24;
