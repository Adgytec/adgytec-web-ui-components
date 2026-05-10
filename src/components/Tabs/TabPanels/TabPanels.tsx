import clsx from "clsx";
import type { TabPanels as AriaTabPanels } from "react-aria-components";
import styles from "./tabPanels.module.css";

export const TabPanels = <T extends object>({
    className,
    ...props
}: React.ComponentPropsWithRef<typeof AriaTabPanels<T>>) => {
    return (
        <TabPanels
            className={clsx(styles["tab-panels"], className)}
            {...props}
        />
    );
};
