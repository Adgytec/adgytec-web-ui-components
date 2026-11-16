import clsx from "clsx";
import { composeRenderProps } from "react-aria-components";
import { IconButton, type IconButtonProps } from "@/components/Button";
import styles from "./appBarAction.module.css";

/**
 * Props for the {@link AppBarAction} component, omitting `size` which is fixed to `"small"`.
 */
export type AppBarActionProps = Omit<IconButtonProps, "size">;

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
                clsx(styles["action"], className)
            )}
            color={color}
            size="small"
        />
    );
};
