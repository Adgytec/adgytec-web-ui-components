import type { GridListItem } from "react-aria-components";

export type CardVariant = "elevated" | "outlined" | "filled";

export interface CardProps
    extends React.ComponentPropsWithRef<typeof GridListItem> {
    variant?: CardVariant;
}

export const PaddingBetweenCards = 12;

export const CardIconSize = 24;
