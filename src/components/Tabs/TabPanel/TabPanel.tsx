import clsx from "clsx";
import { TabPanel as AriaTabPanel } from "react-aria-components";
import styles from "./tabPanel.module.css";

export const TabPanel: React.FC<
    React.ComponentPropsWithRef<typeof AriaTabPanel>
> = ({ className, ...props }) => {
    return (
        <AriaTabPanel
            className={(renderProps) =>
                clsx(
                    styles["tab-panel"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
