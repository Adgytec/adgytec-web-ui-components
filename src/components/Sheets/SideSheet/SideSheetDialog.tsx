import clsx from "clsx";
import { useContext } from "react";
import { Dialog } from "react-aria-components";
import { SideSheetContext } from "../SideSheetModal";
import styles from "./sideSheet.module.css";
import type { SideSheetDialogProps } from "./types";

export const SideSheetDialog: React.FC<SideSheetDialogProps> = ({
    className,
    ...props
}) => {
    const { layout, alignment } = useContext(SideSheetContext);

    return (
        <Dialog
            className={clsx(styles["side-sheet-dialog"], className)}
            data-alignment={alignment}
            data-layout={layout}
            {...props}
        />
    );
};
