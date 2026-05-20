import clsx from "clsx";
import { ListBoxItem } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./calendarMenuItem.module.css";

export const CalendarMenuItem: React.FC<
    React.ComponentPropsWithRef<typeof ListBoxItem>
> = ({ className, ...props }) => {
    return (
        <ListBoxItem
            className={(renderProps) =>
                clsx(
                    styles["item"],
                    typography.bodyLarge,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
