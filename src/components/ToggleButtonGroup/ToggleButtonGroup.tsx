import type { ToggleButtonGroupProps } from "./types";
import { ToggleButtonGroup as UnstyledToggleButtonGroup } from "react-aria-components";
import styles from "./toggleButtonGroup.module.css";
import { ToggleButton } from "../Button/ToggleButton.tsx";
import { ColorTheme } from "../../utils/types.ts";

export const ToggleButtonGroup = ({
  items,
  theme = ColorTheme.primary,
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
