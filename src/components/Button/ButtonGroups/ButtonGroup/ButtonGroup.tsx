import { clsx } from "clsx";
import { ToggleButtonGroup as AriaToggleButtonGroup } from "react-aria-components";
import { ButtonGroupContext } from "../ButtonGroupContext";
import styles from "./buttonGroup.module.css";
import type { ButtonGroupProps } from "./types";

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    size = "small",
    className,
    ...props
}) => {
    return (
        <ButtonGroupContext value={{ size }}>
            <AriaToggleButtonGroup
                className={(renderProps) =>
                    clsx(
                        styles["button-group"],
                        styles[size],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
            />
        </ButtonGroupContext>
    );
};
