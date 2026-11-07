import clsx from "clsx";
import { Sheet, SheetContent } from "react-aria-components";
import styles from "./bottomSwipeSheet.module.css";

export const BottomSwipeSheet: React.FC<
    React.ComponentPropsWithRef<typeof SheetContent>
> = ({ className, ...props }) => {
    return (
        <Sheet className={clsx(styles["sheet"])}>
            <SheetContent
                className={clsx(styles["sheet-content"], className)}
                {...props}
            />
        </Sheet>
    );
};
