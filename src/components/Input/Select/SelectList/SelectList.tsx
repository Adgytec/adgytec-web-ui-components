import { clsx } from "clsx";
import { ListBox } from "react-aria-components";
import {
    MenuBaseLayout,
    type MenuColor,
    type MenuLayout,
    MenuStyles,
    menuBaseColor,
    menuColorConfig,
    menuLayoutConfig,
} from "@/components/Menu";

export const SelectList = <T extends object>({
    color = "standard",
    menuLayout = "standard",
    className,
    ...props
}: React.ComponentPropsWithRef<typeof ListBox<T>> & {
    color?: MenuColor;
    menuLayout?: MenuLayout;
}) => {
    return (
        <ListBox
            className={(renderProps) =>
                clsx(
                    menuColorConfig(color),
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
        />
    );
};
