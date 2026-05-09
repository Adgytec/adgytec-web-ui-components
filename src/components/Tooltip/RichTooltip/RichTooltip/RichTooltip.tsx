import clsx from "clsx";
import styles from "./richTooltip.module.css";

export const RichTooltip: React.FC<React.ComponentPropsWithRef<"div">> = ({
    className,
    ...props
}) => {
    return <div className={clsx(styles["tooltip"], className)} {...props} />;
};
