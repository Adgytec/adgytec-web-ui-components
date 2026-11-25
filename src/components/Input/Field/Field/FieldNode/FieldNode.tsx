import clsx from "clsx";
import styles from "./fieldNode.module.css";

export const FieldNode: React.FC<React.ComponentPropsWithRef<"span">> = ({
    className,
    ...props
}) => {
    return <span {...props} className={clsx(styles["node"], className)} />;
};
