// icons with typography ref
// https://m3.material.io/styles/icons/applying-icons#f9db4adc-ca78-473f-85eb-a351b73c39ac

import clsx from "clsx";
import styles from "./icon.module.css";
import type { IconProps } from "./types";

/**
 * A standardized icon wrapper component implementing Material Design 3 icon sizing guidelines.
 *
 * Wraps `lucide-react` icons to enforce consistent sizing via predefined size tokens
 * (`"dense"`, `"standard"`, `"medium"`, `"large"`, `"extra-large"`), custom numeric pixel values,
 * or proportional `1em` inline text scaling via `withText`.
 *
 * @see https://m3.material.io/styles/icons/applying-icons
 *
 * @example
 * ```tsx
 * import { Icon } from '@adgytec/web-ui-components';
 * import { Settings, AlertTriangle } from 'lucide-react';
 *
 * // Standard 24px icon (default)
 * <Icon icon={Settings} />
 *
 * // Large preset icon
 * <Icon icon={Settings} size="large" />
 *
 * // Explicit numeric pixel dimension
 * <Icon icon={AlertTriangle} size={36} />
 *
 * // Inline with typography (scales to 1em)
 * <h2>
 *     <Icon icon={Settings} withText /> Account Settings
 * </h2>
 * ```
 */
export const Icon: React.FC<IconProps> = ({
    size,
    withText,
    icon: Icon,
    className,
    ...props
}) => {
    if (process.env.NODE_ENV !== "production") {
        if (withText && typeof size !== "undefined") {
            console.warn("Icon: 'size' is ignored when 'withText' is true.");
        }
    }

    const sizeInNum = typeof size === "number";

    const shouldAddSizeClasses = !withText && !sizeInNum;
    const shouldAddSizeProp = !withText && sizeInNum;
    return (
        <Icon
            className={clsx(
                withText && styles["with-text"],
                {
                    [styles["icon"]]: shouldAddSizeClasses,
                    [styles[size ?? "standard"]]: shouldAddSizeClasses,
                },
                className
            )}
            size={shouldAddSizeProp ? size : undefined}
            {...props}
        />
    );
};
