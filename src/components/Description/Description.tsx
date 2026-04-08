import clsx from "clsx";
import { Text, type TextProps } from "react-aria-components";
import styles from "./description.module.css";

export const Description: React.FC<TextProps> = ({
    className,
    slot: _,
    ...props
}) => {
    return (
        <Text
            slot="description"
            className={clsx(styles["description"], className)}
            {...props}
        />
    );
};
