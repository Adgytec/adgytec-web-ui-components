import { createContext, useContext } from "react";
import type { ButtonIconPlacement } from "./button";
import type { ConnectedButtonGroupColor, CoreButtonColor } from "./color";
import type { ButtonShape } from "./shape";
import type { ButtonSize } from "./sizes";

/**
 * Configuration options provided by a standard {@link ButtonGroup} to its descendant buttons.
 */
export type ButtonGroupContextValue = {
    /** Preset size inherited by child buttons. */
    size?: ButtonSize;
    /** Corner rounding shape inherited by child buttons. */
    shape?: ButtonShape;
    /** Visual color style variant inherited by child buttons. */
    color?: CoreButtonColor;
    /** Icon placement relative to label inherited by child buttons. */
    iconPlacement?: ButtonIconPlacement;
};

/**
 * React Context providing styling and layout configuration from an ancestor `ButtonGroup`
 * to child buttons.
 */
export const ButtonGroupContext = createContext<ButtonGroupContextValue>({});

/**
 * Configuration options provided by a {@link ConnectedButtonGroup} to nested {@link ConnectedButton}s.
 */
export type ConnectedButtonGroupContextValue = {
    /** Uniform size preset for connected buttons. */
    size: ButtonSize;
    /** Uniform corner shape preset for the connected group boundary. */
    shape: ButtonShape;
    /** Visual color style variant applied across connected buttons. */
    color: ConnectedButtonGroupColor;
    /** Default icon placement relative to label for connected buttons. */
    iconPlacement?: ButtonIconPlacement;
};

/**
 * React Context providing required size, shape, and color styling from an ancestor
 * `ConnectedButtonGroup` to its child `ConnectedButton` elements.
 */
export const ConnectedButtonGroupContext =
    createContext<ConnectedButtonGroupContextValue>({
        size: "small",
        shape: "round",
        color: "filled",
    });

/**
 * Accesses the enclosing {@link ButtonGroupContext} values.
 *
 * @returns The inherited configuration from the nearest ancestor `ButtonGroup`, or an empty object if unnested.
 */
export function useButtonGroupContext() {
    return useContext(ButtonGroupContext);
}

/**
 * Accesses the enclosing {@link ConnectedButtonGroupContext} values.
 *
 * @returns The configuration provided by the enclosing `ConnectedButtonGroup`. Defaults to small/round/filled if unnested.
 */
export function useConnectedButtonGroupContext() {
    return useContext(ConnectedButtonGroupContext);
}
