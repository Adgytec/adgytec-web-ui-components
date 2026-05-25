import clsx from "clsx";
import { Check, X } from "lucide-react";
import { Tag as AriaTag } from "react-aria-components";
import { typography } from "@/utils";
import { IconButton } from "../Button";
import { Icon } from "../Icon";
import { Splash } from "../Splash/Splash";
import { useSplash } from "../Splash/useSplash";
import { TagIconSize } from "./core";
import styles from "./tag.module.css";
import type { TagProps } from "./types";

export const Tag: React.FC<TagProps> = ({
    icon,
    avatar,
    label,
    className,
    onPress,
    textValue = label,
    ...props
}) => {
    const { splashInfo, handlePress } = useSplash(onPress);

    return (
        <AriaTag
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    styles["tag"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            textValue={textValue}
            {...props}
            data-avatar={avatar ? true : undefined}
            data-icon={!avatar && icon ? true : undefined}
        >
            {({ isSelected, allowsRemoving, isDisabled }) => (
                <>
                    {splashInfo && <Splash {...splashInfo} />}
                    {avatar ? (
                        <div
                            className={clsx(styles["avatar-constraint"])}
                            data-disabled={isDisabled || undefined}
                        >
                            {avatar}
                        </div>
                    ) : isSelected ? (
                        <Icon icon={Check} size={TagIconSize} />
                    ) : (
                        icon && <Icon icon={icon} size={TagIconSize} />
                    )}

                    <p className={clsx(typography.labelLarge, styles["label"])}>
                        {label}
                    </p>

                    {allowsRemoving && (
                        <IconButton
                            slot="remove"
                            icon={X}
                            size="extra-small"
                            color="standard"
                        />
                    )}
                </>
            )}
        </AriaTag>
    );
};
