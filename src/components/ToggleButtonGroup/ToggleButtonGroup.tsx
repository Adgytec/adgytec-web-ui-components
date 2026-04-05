import clsx from "clsx";
import {
    type ToggleButtonGroupProps,
    ToggleButtonGroup as UnstyledToggleButtonGroup,
} from "react-aria-components";
import styles from "./toggleButtonGroup.module.css";

export const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <UnstyledToggleButtonGroup
            {...props}
            className={clsx(styles["toggle-button-group"], className)}
        >
            {children}
        </UnstyledToggleButtonGroup>
    );
};
