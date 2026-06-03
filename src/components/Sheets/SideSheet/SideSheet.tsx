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
