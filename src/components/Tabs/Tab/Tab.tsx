import clsx from "clsx";
import {
    Tab as AriaTab,
    composeRenderProps,
    SelectionIndicator,
} from "react-aria-components";
import styles from "./tab.module.css";

export const Tab: React.FC<React.ComponentPropsWithRef<typeof AriaTab>> = ({
    className,
    ...props
}) => {
    return (
        <AriaTab
            className={(renderProps) =>
                clsx(
                    styles["tab"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {composeRenderProps(props.children, (children) => (
                <>
                    {children}
                    <SelectionIndicator />
                </>
            ))}
        </AriaTab>
    );
};
