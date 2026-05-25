import clsx from "clsx";
import { Disclosure as AriaDisclosure } from "react-aria-components";
import styles from "./disclosure.module.css";

export const Disclosure: React.FC<
    React.ComponentPropsWithRef<typeof AriaDisclosure>
> = ({ className, ...props }) => {
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
