import { ToggleButton as UnstyledToggleButton } from "react-aria-components";
import styles from "./button.module.css";
import { useSplash } from "@/components/Splash/useSplash";
import { ColorTheme } from "@/utils/types";
import { Tooltip } from "@/components/Tooltip";
import { Splash } from "@/components/Splash/Splash";
import {
  ButtonVariant,
  type ToggleButtonProps,
  ButtonShape,
} from "@/components/Button/ButtonBase";

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
