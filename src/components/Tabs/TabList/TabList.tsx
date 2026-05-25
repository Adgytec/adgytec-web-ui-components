import clsx from "clsx";
import { TabList as AriaTabList } from "react-aria-components";
import styles from "./tabList.module.css";

export const TabList = <T extends object>({
    className,
    ...props
}: React.ComponentPropsWithRef<typeof AriaTabList<T>>) => {
    return (
        <AriaTabList
            className={(renderProps) =>
                clsx(
                    styles["tab-list"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
