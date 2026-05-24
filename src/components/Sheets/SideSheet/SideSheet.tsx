import clsx from "clsx";
import { X } from "lucide-react";
import { Dialog, Header, Heading } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { typography } from "@/utils";
import styles from "./sideSheet.module.css";
import type { SideSheetProps } from "./types";

export const SideSheet: React.FC<SideSheetProps> = ({
    alignment = "end",
    layout = "standard",
    headline,
    actions,
    className,
    children,
    ...props
}) => {
    const hasActions = Array.isArray(actions) ? actions.length > 0 : !!actions;

    return (
        <Dialog
            className={clsx(styles["side-sheet"], className)}
            {...props}
            data-alignment={alignment}
            data-layout={layout}
            data-actions={hasActions || undefined}
        >
            {(renderProps) => (
                <>
                    <Header
                        className={clsx(styles["header"])}
                        data-headline={!!headline || undefined}
                    >
                        {headline && (
                            <Heading className={clsx(typography.titleLarge)}>
                                {headline}
                            </Heading>
                        )}

                        <IconButton icon={X} />
                    </Header>

                    <div className={clsx(styles["main"])}>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </div>

                    {hasActions && (
                        <div className={clsx(styles["actions"])}>
                            {typeof actions === "function"
                                ? actions(renderProps)
                                : actions}
                        </div>
                    )}
                </>
            )}
        </Dialog>
    );
};
