import clsx from "clsx";
import { ToggleButtonGroup } from "react-aria-components";
import styles from "./toolbar.module.css";

export const ToolbarToggleButtonGroup: React.FC<
    React.ComponentPropsWithRef<typeof ToggleButtonGroup>
> = ({ className, ...props }) => {
    return (
        <ToggleButtonGroup
            className={(renderProps) =>
                clsx(
                    styles["section"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
