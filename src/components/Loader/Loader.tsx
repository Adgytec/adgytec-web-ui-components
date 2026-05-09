import { clsx } from "clsx";
import { LoaderCircle } from "lucide-react";
import { Icon } from "../Icon";
import styles from "./loader.module.css";

export const Loader: React.FC<
    Omit<React.ComponentPropsWithRef<typeof Icon>, "icon" | "className">
> = (props) => {
    return (
        <Icon
            icon={LoaderCircle}
            className={clsx(styles["loader"])}
            {...props}
        />
    );
};
