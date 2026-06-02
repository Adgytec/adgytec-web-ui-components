import clsx from "clsx";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./navigationSectionLabel.module.css";

export const NavigationSectionLabel: React.FC<
    React.ComponentPropsWithRef<typeof Heading>
> = ({ className, ...props }) => {
    return (
        <Heading
            className={clsx(styles["label"], typography.titleSmall, className)}
            {...props}
        />
    );
};
