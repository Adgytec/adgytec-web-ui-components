import { clsx } from "clsx";
import { ListBox, type ListBoxProps } from "react-aria-components";
import {
    MenuBaseLayout,
    MenuStyles,
    menuColorConfig,
    menuLayoutConfig,
} from "@/components/Menu";

export const SelectList = <T extends object>({
    className,
    ...props
}: ListBoxProps<T>) => {
    return (
        <ListBox
            className={(renderProps) =>
                clsx(
                    menuColorConfig("standard"),
                    MenuBaseLayout,
                    menuLayoutConfig("standard"),
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
