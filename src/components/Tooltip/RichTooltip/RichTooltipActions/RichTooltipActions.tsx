import clsx from "clsx";
import styles from "./richTooltipActions.module.css";

export const RichTooltipActions: React.FC<
    React.ComponentPropsWithRef<"div">
> = ({ className, ...props }) => {
    return <div className={clsx(styles["actions"], className)} {...props} />;
};
