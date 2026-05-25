import clsx from "clsx";
import { Modal as AriaModal } from "react-aria-components";
import styles from "./modal.module.css";

export const Modal: React.FC<React.ComponentPropsWithRef<typeof AriaModal>> = ({
    className,
    ...props
}) => {
    return (
        <AriaModal
            className={(renderProps) =>
                clsx(
                    styles["modal"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
