import clsx from "clsx";
import {
    type ToggleButtonGroupProps,
    ToggleButtonGroup as UnstyledToggleButtonGroup,
} from "react-aria-components";
import styles from "./toggleButtonGroup.module.css";

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    className,
    ...props
}) => {
    return (
        <UnstyledToggleButtonGroup
            {...props}
            className={(renderProps) =>
                clsx(
                    styles["toggle-button-group"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
        />
    );
};
