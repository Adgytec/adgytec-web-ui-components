import type { ToggleButtonGroupProps } from "./types";
import { ToggleButtonGroup as UnstyledToggleButtonGroup } from "react-aria-components";
import styles from "./toggleButtonGroup.module.css";
import { ToggleButton } from "@/components/Button/ToggleButton";
import clsx from "clsx";

export const ToggleButtonGroup = ({
    items,
    theme = "primary",
    ...props
}: ToggleButtonGroupProps) => {
    return (
        <UnstyledToggleButtonGroup
            {...props}
            className={clsx(styles["toggle-button-group"], props.className)}
        >
            {items.map((item) => {
                return (
                    <ToggleButton
                        key={item.id}
                        {...item}
                        theme={theme}
                        isDisabled={props.isDisabled || item.isDisabled}
                    />
                );
            })}
        </UnstyledToggleButtonGroup>
    );
};
