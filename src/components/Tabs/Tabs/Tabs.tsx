import clsx from "clsx";
import { Tabs as AriaTabs } from "react-aria-components";
import styles from "./tabs.module.css";

export const Tabs: React.FC<React.ComponentPropsWithRef<typeof AriaTabs>> = ({
    className,
    ...props
}) => {
    return (
        <AriaTabs
            className={(renderProps) =>
                clsx(
                    styles["tabs"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
