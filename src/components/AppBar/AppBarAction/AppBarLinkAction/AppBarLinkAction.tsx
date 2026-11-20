import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { LinkIconButton } from "@/components/Button";
import { AppBarActionStyles } from "../core";
import type { AppBarLinkActionProps } from "./types";

/**
 * Navigation link action specifically styled and sized for use inside the {@link AppBar}.
 *
 * Wraps {@link LinkIconButton} with `size="small"` (per Material 3 Top App Bar specs)
 * and defaults to `color="standard"`.
 *
 * @example
 * ```tsx
 * import { AppBarLinkAction } from '@adgytec/web-ui-components';
 * import { Github } from 'lucide-react';
 *
 * <AppBarLinkAction href="https://github.com" icon={Github} aria-label="GitHub" />
 * ```
 */
export const AppBarLinkAction: React.FC<AppBarLinkActionProps> = ({
    color = "standard",
    ...props
}) => {
    return (
        <LinkIconButton
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(AppBarActionStyles, className)
            )}
            color={color}
            size="small"
        />
    );
};
