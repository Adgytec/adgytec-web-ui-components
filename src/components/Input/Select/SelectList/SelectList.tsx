import { clsx } from "clsx";
import { ListBox, type ListBoxProps } from "react-aria-components";
import {
    MenuBaseLayout,
    type MenuColor,
    type MenuLayout,
    MenuStyles,
    menuColorConfig,
    menuLayoutConfig,
} from "@/components/Menu";

export const SelectList = <T extends object>({
    color = "standard",
    menuLayout = "standard",
    className,
    ...props
}: ListBoxProps<T> & {
    color?: MenuColor;
    menuLayout?: MenuLayout;
}) => {
    return (
        <ListBox
            className={(renderProps) =>
                clsx(
                    menuColorConfig(color),
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
