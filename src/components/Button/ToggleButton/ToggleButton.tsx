import { ToggleButton as UnstyledToggleButton } from "react-aria-components";
import styles from "@/components/Button/ButtonBase/button.module.css";
import { useSplash } from "@/components/Splash/useSplash";
import { Tooltip } from "@/components/Tooltip";
import { Splash } from "@/components/Splash/Splash";
import type {
  ButtonShape,
  ButtonVariant,
  ToggleButtonProps,
} from "@/components/Button/ButtonBase";

export const ToggleButton = ({
  id,
  value,
  description,
  isDisabled,
  theme = "primary",
}: ToggleButtonProps) => {
  const { coords, handlePress } = useSplash();
  const buttonVariant: ButtonVariant = "outlined";
  const buttonShape: ButtonShape = "rectangle";

  return (
    <Tooltip description={description}>
      <UnstyledToggleButton
        id={id}
        onPress={handlePress}
        className={`${styles["button"]} ${styles[theme]} ${styles[buttonVariant]} ${styles[buttonShape]}`}
        isDisabled={isDisabled}
      >
        {coords && <Splash {...coords} />}
        {value}
      </UnstyledToggleButton>
    </Tooltip>
  );
};
