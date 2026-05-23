import { createContext } from "react";
import type {
    ButtonIconPlacement,
    ButtonShape,
    ButtonSize,
    ConnectedButtonGroupColor,
    CoreButtonColor,
} from "../../core";

export type ButtonGroupContextValue = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: CoreButtonColor;
    iconPlacement?: ButtonIconPlacement;
};

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({});

export type ConnectedButtonGroupContextValue = {
    size: ButtonSize;
    shape: ButtonShape;
    color: ConnectedButtonGroupColor;
    iconPlacement?: ButtonIconPlacement;
};

export const ConnectedButtonGroupContext =
    createContext<ConnectedButtonGroupContextValue>({
        size: "small",
        shape: "round",
        color: "filled",
    });
