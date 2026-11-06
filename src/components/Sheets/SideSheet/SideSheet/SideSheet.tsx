import clsx from "clsx";
import { X } from "lucide-react";
import { useContext } from "react";
import { Header, Heading } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { typography } from "@/utils";
import { SideSheetContext } from "../SideSheetModal";
import { SideSheetDialog } from "./SideSheetDialog";
import styles from "./sideSheet.module.css";
import type { SideSheetProps } from "./types";

/**
 * High-level content container for side sheets, conforming to
 * [Material 3 Side Sheets](https://m3.material.io/components/side-sheets/overview).
 *
 * Provides a standard structured side sheet layout containing:
 * - A top header with an optional `headline` (`typography.titleLarge`) and a built-in close `IconButton` (`X`).
 * - A scrollable `main` content area.
 * - An optional bottom `actions` footer, automatically aligned with the sheet's alignment setting.
 *
 * Configurable CSS tokens:
 * - `--md-side-sheet-background`: Background color of the side sheet (`var(--md-sys-color-surface-container-low)`).
 * - `--md-side-sheet-color`: Text color of the side sheet (`var(--md-sys-color-on-surface)`).
 * - `--md-side-sheet-headline-color`: Color of the side sheet headline (`var(--md-sys-color-on-surface-variant)`).
 *
 * @example
 * ```tsx
 * import { DialogTrigger } from "react-aria-components";
 * import {
 *     Button,
 *     ModalOverlay,
 *     SideSheet,
 *     SideSheetModal,
 * } from "@adgytec/web-ui-components";
 *
 * export function Example() {
 *     return (
 *         <DialogTrigger>
 *             <Button label="Open Side Sheet" />
 *             <ModalOverlay>
 *                 <SideSheetModal alignment="end" layout="standard">
 *                     <SideSheet
 *                         headline="Side Sheet Title"
 *                         actions={[
 *                             <Button key="save" label="Save" onPress={() => {}} />,
 *                             <Button key="cancel" label="Cancel" variant="outline" onPress={() => {}} />,
 *                         ]}
 *                     >
 *                         <p>This is the side sheet content.</p>
 *                     </SideSheet>
 *                 </SideSheetModal>
 *             </ModalOverlay>
 *         </DialogTrigger>
 *     );
 * }
 * ```
 */
export const SideSheet: React.FC<SideSheetProps> = ({
    headline,
    actions,
    className,
    children,
    ...props
}) => {
    const { alignment } = useContext(SideSheetContext);
    const hasActions = Array.isArray(actions) ? actions.length > 0 : !!actions;

    return (
        <SideSheetDialog
            className={clsx(styles["side-sheet"], className)}
            {...props}
            data-actions={hasActions || undefined}
        >
            {(renderProps) => (
                <>
                    <Header
                        className={clsx(styles["header"])}
                        data-headline={!!headline || undefined}
                    >
                        {headline && (
                            <Heading
                                slot="title"
                                className={clsx(
                                    styles["headline"],
                                    typography.titleLarge
                                )}
                            >
                                {headline}
                            </Heading>
                        )}

                        <IconButton
                            slot="close"
                            icon={X}
                            color="standard"
                            className={clsx(styles["close"])}
                        />
                    </Header>

                    <div className={clsx(styles["main"])}>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </div>

                    {hasActions && (
                        <div
                            className={clsx(styles["actions"])}
                            data-alignment={alignment}
                        >
                            {typeof actions === "function"
                                ? actions(renderProps)
                                : actions}
                        </div>
                    )}
                </>
            )}
        </SideSheetDialog>
    );
};
