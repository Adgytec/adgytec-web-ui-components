/**
 * List of all 35 Material Design 3 expressive shapes.
 */
export const ShapeNames = [
    "arch",
    "arrow",
    "boom",
    "bun",
    "burst",
    "circle",
    "clamshell",
    "diamond",
    "fan",
    "flower",
    "gem",
    "ghost-ish",
    "heart",
    "leaf-clover4",
    "leaf-clover8",
    "oval",
    "pentagon",
    "pill",
    "pixel-circle",
    "pixel-triangle",
    "puffy",
    "puffy-diamond",
    "semicircle",
    "sided-cookie4",
    "sided-cookie6",
    "sided-cookie7",
    "sided-cookie9",
    "sided-cookie12",
    "slanted",
    "soft-boom",
    "soft-burst",
    "square",
    "sunny",
    "triangle",
    "very-sunny",
] as const;

/**
 * Union of all 35 Material Design 3 expressive shapes.
 */
export type ShapeName = (typeof ShapeNames)[number];

/**
 * Props for the {@link Shape} component.
 *
 * Extends all standard `<div>` HTML attributes while requiring a valid `name` prop.
 */
export interface ShapeProps extends React.ComponentPropsWithRef<"div"> {
    /**
     * The Material Design 3 expressive shape to display.
     */
    name: ShapeName;

    rotate?: boolean;
}
