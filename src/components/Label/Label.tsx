import clsx from "clsx";
import { type LabelProps, Label as UnstyledLabel } from "react-aria-components";
import styles from "./label.module.css";

export const Label: React.FC<LabelProps> = ({ className, ...props }) => {
    return (
        <UnstyledLabel
            className={clsx(styles["label"], className)}
            {...props}
        />
    );
};
