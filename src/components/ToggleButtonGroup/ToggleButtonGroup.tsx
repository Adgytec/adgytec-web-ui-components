import type { ToggleButtonGroupProps } from "./types";
import { ToggleButtonGroup as UnstyledToggleButtonGroup } from "react-aria-components";
import styles from "./toggleButtonGroup.module.css";
import { ToggleButton } from "@/components/Button/ToggleButton";

export const ToggleButtonGroup = ({
  items,
  theme = "primary",
  ...props
}: ToggleButtonGroupProps) => {
  return (
    <UnstyledToggleButtonGroup
      {...props}
      className={props.className ?? styles["toggle-button-group"]}
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
