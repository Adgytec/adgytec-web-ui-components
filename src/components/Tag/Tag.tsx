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

/**
 * Compact interactive element representing an attribute, entity, or action, based on
 * [Material 3 Chips](https://m3.material.io/components/chips/overview).
 *
 * Extends React Aria Components `Tag` with Material 3 styling and interactive behaviors:
 * - Renders a text `label` using `typography.labelLarge`.
 * - Supports an optional leading `icon` or circular `avatar`.
 * - When selected, dynamically displays a checkmark icon unless an avatar is present.
 * - Supports removable tags by rendering a built-in remove icon button (`X`) when `allowsRemoving` is true.
 * - Interactive ripple feedback via {@link Splash}.
 *
 * Configurable CSS tokens:
 * - `--md-chip-background-color`: Background color of the tag (`var(--md-sys-color-surface-container-low)`).
 * - `--md-chip-selected-background-color`: Background color when selected (`var(--md-sys-color-secondary-container)`).
 * - `--md-chip-icon-color`: Color of the leading icon (`var(--md-sys-color-primary)`).
 * - `--md-chip-selected-icon-color`: Color of the icon when selected (`var(--md-sys-color-on-secondary-container)`).
 * - `--md-chip-label-color`: Text color of the label (`var(--md-sys-color-on-surface-variant)`).
 * - `--md-chip-selected-label-color`: Text color when selected (`var(--md-sys-color-on-secondary-container)`).
 *
 * @example
 * ```tsx
 * import { Tag } from "@adgytec/web-ui-components";
 * import { TagGroup, TagList } from "react-aria-components";
 * import { PlaneTakeoff, ShoppingCart } from "lucide-react";
 *
 * export function Example() {
 *     return (
 *         <TagGroup aria-label="Categories" selectionMode="multiple">
 *             <TagList>
 *                 <Tag id="travel" label="Travel" icon={PlaneTakeoff} />
 *                 <Tag id="shopping" label="Shopping" icon={ShoppingCart} />
 *             </TagList>
 *         </TagGroup>
 *     );
 * }
 * ```
 */
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
