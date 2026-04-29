import { useButtonGroupContext } from "../ButtonGroups";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";

type ButtonConfigOptions<C extends string> = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: C;
};

export function useButtonConfig<C extends string>({
    size,
    shape,
    color,
}: ButtonConfigOptions<C>) {
    const {
        size: buttonGroupSize,
        shape: buttonGroupShape,
        color: buttonGroupColor,
    } = useButtonGroupContext();

    const buttonSize = size ?? buttonGroupSize ?? "small";
    const buttonShape = shape ?? buttonGroupShape ?? "round";
    const buttonColor = color ?? buttonGroupColor ?? "filled";

    return { buttonSize, buttonShape, buttonColor };
}
