import { Label as UnstyledLabel, type LabelProps } from "react-aria-components";
import styles from "./label.module.css";
import clsx from "clsx";

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
