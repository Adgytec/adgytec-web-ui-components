import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils";
import styles from "./disclosureLabel.module.css";

export const DisclosureLabel: React.FC<
    React.ComponentPropsWithRef<typeof Text>
> = ({ className, ...props }) => {
    return (
        <Text
            className={clsx(
                styles["label"],
                typography.titleMediumEmphasized,
                className
            )}
            {...props}
        />
    );
};
