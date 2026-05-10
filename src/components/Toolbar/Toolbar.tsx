import clsx from "clsx";
import { Toolbar as AriaToolbar } from "react-aria-components";
import styles from "./toolbar.module.css";
import type { ToolbarProps } from "./types";

export const Toolbar: React.FC<ToolbarProps> = ({
    className,
    variant = "docked",
    color = "standard",
    ...props
}) => {
    return (
        <AriaToolbar
            className={(renderProps) =>
                clsx(
                    styles["toolbar"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-variant={variant}
            data-color={color}
        />
    );
};
