import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { AppBarActionStyles } from "../core";
import type { AppBarActionProps } from "./types";

/**
 * Action button specifically styled and sized for use inside the {@link AppBar}.
 *
 * Wraps {@link IconButton} with `size="small"` (per Material 3 Top App Bar specs)
 * and defaults to `color="standard"`.
 *
 * @example
 * ```tsx
 * import { AppBarAction } from '@adgytec/web-ui-components';
 * import { ArrowLeft } from 'lucide-react';
 *
 * <AppBarAction icon={ArrowLeft} aria-label="Go back" onPress={() => history.back()} />
 * ```
 */
export const AppBarAction: React.FC<AppBarActionProps> = ({
    color = "standard",
    ...props
}) => {
    return (
        <IconButton
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(AppBarActionStyles, className)
            )}
            color={color}
            size="small"
        />
    );
};
