import clsx from "clsx";
import {
    Disclosure as AriaDisclosure,
    type DisclosureProps,
} from "react-aria-components";
import styles from "./disclosure.module.css";

export const Disclosure: React.FC<DisclosureProps> = ({
    className,
    ...props
}) => {
    return (
        <AriaDisclosure
            className={(renderProps) =>
                clsx(
                    styles["disclosure"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
