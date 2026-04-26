import clsx from "clsx";
import { Menu as AriaMenu } from "react-aria-components";
import { MenuBaseLayout, menuColorConfig, menuLayoutConfig } from "../core";
import type { MenuProps } from "./types";

export const Menu = <T extends object>({
    color = "standard",
    layout = "standard",
    className,
    ...props
}: MenuProps<T>) => {
    return (
        <AriaMenu
            className={(renderProps) =>
                clsx(
                    menuColorConfig(color),
                    MenuBaseLayout,
                    menuLayoutConfig(layout),
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-layout={layout}
        />
    );
};
