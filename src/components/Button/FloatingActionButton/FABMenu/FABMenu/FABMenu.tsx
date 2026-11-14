import { clsx } from "clsx";
import { Menu } from "react-aria-components";
import styles from "./fabMenu.module.css";

export const FABMenu = <T extends object>({
    className,
    ...props
}: React.ComponentPropsWithRef<typeof Menu<T>>) => {
    return (
        <Menu
            className={(renderProps) =>
                clsx(
                    styles["fab-menu"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
