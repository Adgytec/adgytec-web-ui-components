// TODO: will import styles from utils/button styles (ref src/todo.ts comment)

import clsx from "clsx";
import { ToggleButton as UnstyledToggleButton } from "react-aria-components";
import type {
    ButtonShape,
    ButtonVariant,
    ToggleButtonProps,
} from "@/components/Button/ButtonBase";
import styles from "@/components/Button/ButtonBase/button.module.css";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { Tooltip } from "@/components/Tooltip";

export const ToggleButton = ({
    id,
    value,
    description,
    isDisabled,
    theme = "primary",
}: ToggleButtonProps) => {
    const { coords, handlePress } = useSplash();
    const buttonVariant: ButtonVariant = "outlined";
    const buttonShape: ButtonShape = "default";

    return (
        <Tooltip description={description}>
            <UnstyledToggleButton
                id={id}
                onPress={handlePress}
                className={clsx(
                    styles["button"],
                    styles[theme],
                    styles[buttonVariant],
                    styles[buttonShape]
                )}
                isDisabled={isDisabled}
            >
                {coords && <Splash {...coords} />}
                {value}
            </UnstyledToggleButton>
        </Tooltip>
    );
};
