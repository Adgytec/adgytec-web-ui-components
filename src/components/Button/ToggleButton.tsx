import { ToggleButton as UnstyledToggleButton } from "react-aria-components";
import styles from "./button.module.css";
import { useSplash } from "../Splash/useSplash";
import { Splash } from "../Splash/Splash";
import { Tooltip } from "../Tooltip/Tooltip";
import { ButtonShape, ButtonVariant, type ToggleButtonProps } from "./types";
import { ColorTheme } from "../../utils/types";

export const ToggleButton = ({
  id,
  value,
  description,
  isDisabled,
  theme = ColorTheme.primary,
}: ToggleButtonProps) => {
  const { coords, handlePress } = useSplash();

  return (
    <Tooltip description={description}>
      <UnstyledToggleButton
        id={id}
        onPress={handlePress}
        className={`${styles["button"]} ${styles[theme]} ${styles[ButtonVariant.outlined]} ${styles[ButtonShape.rectangle]}`}
        isDisabled={isDisabled}
      >
        {coords && <Splash {...coords} />}
        {value}
      </UnstyledToggleButton>
    </Tooltip>
  );
};
