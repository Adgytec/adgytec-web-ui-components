import clsx from "clsx";
import { type LabelProps, Label as UnstyledLabel } from "react-aria-components";
import styles from "./label.module.css";

export const Label = (props: LabelProps) => {
    return (
        <UnstyledLabel
            {...props}
            className={clsx(styles["label"], props?.className)}
        >
            {props.children}
        </UnstyledLabel>
    );
};
