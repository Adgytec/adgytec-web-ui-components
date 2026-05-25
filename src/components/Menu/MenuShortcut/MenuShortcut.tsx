import clsx from "clsx";
import { typography } from "@/utils/typography";

export const MenuShortcut: React.FC<React.ComponentPropsWithRef<"kbd">> = ({
    className,
    ...props
}) => {
    return (
        <kbd className={clsx(typography.labelLarge, className)} {...props} />
    );
};
