import clsx from "clsx";
import { X } from "lucide-react";
import { Tag as AriaTag } from "react-aria-components";
import { typography } from "@/utils";
import { IconButton } from "../Button";
import { Icon } from "../Icon";
import { TagIconSize } from "./core";
import styles from "./tag.module.css";
import type { TagProps } from "./types";

export const Tag: React.FC<TagProps> = ({
    icon,
    avatar,
    label,
    className,
    ...props
}) => {
    return (
        <AriaTag
            className={(renderProps) =>
                clsx(
                    styles["tag"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-avatar={avatar ? true : undefined}
            data-icon={!avatar && icon ? true : undefined}
        >
            {({ allowsRemoving }) => (
                <>
                    {avatar ? (
                        <div className={clsx(styles["avatar-constraint"])}>
                            {avatar}
                        </div>
                    ) : (
                        icon && <Icon icon={icon} size={TagIconSize} />
                    )}

                    <p className={clsx(typography.labelLarge)}>{label}</p>

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
