import { clsx } from "clsx";
import {
    DisclosurePanel as AriaDisclosurePanel,
    type DisclosurePanelProps,
} from "react-aria-components";
import styles from "./disclosurePanel.module.css";

export const DisclosurePanel: React.FC<DisclosurePanelProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <AriaDisclosurePanel
            className={(renderProps) =>
                clsx(
                    styles["panel"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            <div>{children}</div>
        </AriaDisclosurePanel>
    );
};
