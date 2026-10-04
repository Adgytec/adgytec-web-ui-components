import { clsx } from "clsx";
import { useMemo } from "react";
import { Toolbar } from "react-aria-components";
import { splitButtonSizeConfig } from "../core";
import { SplitButtonContext } from "../SplitButtonContext";
import styles from "./splitButton.module.css";
import type { SplitButtonProps } from "./types";

/**
 * A composite button container implementing Material Design 3 Split Buttons.
 *
 * Couples a primary action button ({@link SplitButtonPrimary}) with an adjacent dropdown menu trigger
 * ({@link SplitButtonTrigger}) inside an accessible React Aria `Toolbar`.
 * Synchronizes size, color variant, disabled, and pending states across both button parts via context.
 *
 * @example
 * ```tsx
 * <SplitButton color="tonal">
 *     <SplitButtonPrimary icon={Save} onPress={handleSave}>
 *         Save
 *     </SplitButtonPrimary>
 *     <MenuTrigger>
 *         <SplitButtonTrigger aria-label="More save options" />
 *         <MenuPopover>
 *             <Menu>
 *                 <MenuItem label="Save as draft" />
 *             </Menu>
 *         </MenuPopover>
 *     </MenuTrigger>
 * </SplitButton>
 * ```
 */
export const SplitButton: React.FC<SplitButtonProps> = ({
    color = "filled",
    size = "small",

    isPending,
    isDisabled,

    children,
    className,

    ...props
}) => {
    const contextValue = useMemo(
        () => ({
            isPending,
            isDisabled,
            color,
            size,
        }),
        [isPending, isDisabled, color, size]
    );

    return (
        <SplitButtonContext value={contextValue}>
            <Toolbar
                className={clsx(
                    styles["split-button"],
                    splitButtonSizeConfig(size),
                    className
                )}
                {...props}
                data-split-button
            >
                {children}
            </Toolbar>
        </SplitButtonContext>
    );
};
