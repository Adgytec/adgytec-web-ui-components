import clsx from "clsx";
import { Label as AriaLabel, type LabelProps } from "react-aria-components";
import styles from "./label.module.css";

export const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return (
        <AriaLabel className={clsx(styles["label"], className)} {...props} />
    );
};
