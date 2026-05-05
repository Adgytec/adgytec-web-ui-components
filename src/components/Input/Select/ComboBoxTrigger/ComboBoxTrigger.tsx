import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { IconButton } from "@/components/Button";
import styles from "./comboBoxTrigger.module.css";

export const ComboBoxTrigger: React.FC<React.ComponentPropsWithRef<"div">> = ({
    className,
    children,
    ...props
}) => {
    return (
        <div className={clsx(className)} {...props}>
            {children}
            <IconButton
                className={clsx(styles["trigger"])}
                icon={ChevronDown}
                color="standard"
            />
        </div>
    );
};
