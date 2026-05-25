import clsx from "clsx";
import styles from "./richTooltipInfo.module.css";

export const RichTooltipInfo: React.FC<React.ComponentPropsWithRef<"div">> = ({
    className,
    ...props
}) => {
    return <div className={clsx(styles["info"], className)} {...props} />;
};
