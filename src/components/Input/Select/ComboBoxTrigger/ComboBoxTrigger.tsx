import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { IconButton } from "@/components/Button";

export const ComboBoxTrigger: React.FC<React.ComponentPropsWithRef<"div">> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={clsx(className)} {...props}>
            {children}
            <IconButton icon={ChevronDown} color="standard" />
        </div>
    );
};
