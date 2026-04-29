import { createContext } from "react";
import type {
    ButtonShape,
    ButtonSize,
    ConnectedButtonGroupColor,
    CoreButtonColor,
} from "../../core";

export type ButtonGroupContextValue = {
    size?: ButtonSize;
    shape?: ButtonShape;
    color?: CoreButtonColor;
};

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({});

export type ConnectedButtonGroupContextValue = {
    size: ButtonSize;
    shape: ButtonShape;
    color: ConnectedButtonGroupColor;
};

export const ConnectedButtonGroupContext =
    createContext<ConnectedButtonGroupContextValue>({
        size: "small",
        shape: "round",
        color: "filled",
    });
