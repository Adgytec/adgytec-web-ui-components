import clsx from "clsx";
import { useContext } from "react";
import { Menu as AriaMenu } from "react-aria-components";
import { MenuConfigContext } from "../context";
import {
    MenuBaseLayout,
    MenuStyles,
    menuBaseColor,
    menuColorConfig,
    menuLayoutConfig,
} from "../core";
import type { MenuProps } from "./types";

export const Menu = <T extends object>({
    color,
    layout,
    className,
    ...props
}: MenuProps<T>) => {
    const { color: configColor, layout: configLayout } =
        useContext(MenuConfigContext);
    const menuColor = color ?? configColor ?? "standard";
    const menuLayout = layout ?? configLayout ?? "standard";

    return (
        <AriaMenu
            className={(renderProps) =>
                clsx(
                    menuColorConfig(menuColor),
                    menuBaseColor,
                    MenuBaseLayout,
                    menuLayoutConfig(menuLayout),
                    MenuStyles,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-layout={layout}
            data-menu
        />
    );
};
