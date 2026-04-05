// TODO: better api

import clsx from "clsx";
import { ToggleButtonGroup as UnstyledToggleButtonGroup } from "react-aria-components";
import { ToggleButton } from "@/components/Button/ToggleButton";
import styles from "./toggleButtonGroup.module.css";
import type { ToggleButtonGroupProps } from "./types";

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
