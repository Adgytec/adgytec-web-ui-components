import clsx from "clsx";
import { Heading } from "react-aria-components";
import { useAppBarContext } from "../core";
import styles from "./appBarHeadline.module.css";

export const AppBarHeadline: React.FC<
    React.ComponentPropsWithRef<typeof Heading>
> = ({ className, ...props }) => {
    const appBarContext = useAppBarContext();

    return (
        <Heading
            className={clsx(
                appBarContext.headlineTypography,
                styles["headline"],
                styles[appBarContext.alignment],
                className
            )}
            {...props}
            data-app-bar-headline
        />
    );
};
