import { typography } from "@/utils/typography";
import clsx from "clsx";

export const MenuShortcut: React.FC<React.ComponentPropsWithoutRef<"kbd">> = ({
    className,
    ...props
}) => {
    return (
        <kbd className={clsx(typography.labelLarge, className)} {...props} />
    );
};
