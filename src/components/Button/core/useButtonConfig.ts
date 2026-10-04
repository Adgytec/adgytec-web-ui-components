import { useButtonGroupContext } from "../ButtonGroups";
import type { ButtonIconPlacement } from "./button";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";

/**
 * Configuration options passed to {@link useButtonConfig} to resolve button styles.
 */
type ButtonConfigOptions<C extends string> = {
    /** Explicit button size preset override. */
    size?: ButtonSize;
    /** Explicit button corner shape override. */
    shape?: ButtonShape;
    /** Explicit button color style override. */
    color?: C;
    /** Explicit icon placement override relative to label. */
    iconPlacement?: ButtonIconPlacement;
};

/**
 * Resolves button configuration by prioritizing component-level props and falling back
 * to contextual values from an ancestor `ButtonGroupContext` (or system defaults).
 *
 * @template C - String union of allowed color variant values for the button type.
 * @param options - Component-level prop overrides.
 * @returns Resolved visual configuration: `buttonSize`, `buttonShape`, `buttonColor`, and `buttonIconPlacement`.
 *
 * @example
 * ```tsx
 * const { buttonSize, buttonShape, buttonColor, buttonIconPlacement } = useButtonConfig({
 *     size,
 *     shape,
 *     color,
 *     iconPlacement,
 * });
 * ```
 */
export function useButtonConfig<C extends string>({
    size,
    shape,
    color,
    iconPlacement,
}: ButtonConfigOptions<C>) {
    const {
        size: buttonGroupSize,
        shape: buttonGroupShape,
        color: buttonGroupColor,
        iconPlacement: buttonGroupIconPlacement,
    } = useButtonGroupContext();

    const buttonSize = size ?? buttonGroupSize ?? "small";
    const buttonShape = shape ?? buttonGroupShape ?? "round";
    const buttonColor = color ?? buttonGroupColor ?? "filled";
    const buttonIconPlacement =
        iconPlacement ?? buttonGroupIconPlacement ?? "start";

    return { buttonSize, buttonShape, buttonColor, buttonIconPlacement };
}
