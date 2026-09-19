import clsx from "clsx";
import { ListBox as AriaListBox } from "react-aria-components";
import styles from "./listBox.module.css";
import type { ListBoxProps } from "./types";

export const ListBox = <T extends object>({
    alignY = "center",
    className,
    ...props
}: ListBoxProps<T>) => {
    return (
        <AriaListBox
            className={(renderProps) =>
                clsx(
                    styles["list-box"],
                    styles[alignY],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
