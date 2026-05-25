import { useButtonGroupContext } from "../ButtonGroups";
import type { ButtonIconPlacement } from "./button";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";

type ButtonConfigOptions<C extends string> = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: C;
    iconPlacement?: ButtonIconPlacement;
};

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
