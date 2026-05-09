import clsx from "clsx";
import { ModalOverlay as AriaModalOverlay } from "react-aria-components";
import styles from "./modalOverlay.module.css";

export const ModalOverlay: React.FC<
    React.ComponentPropsWithRef<typeof AriaModalOverlay>
> = ({ className, ...props }) => {
    return (
        <AriaModalOverlay
            className={(renderProps) =>
                clsx(
                    styles["overlay"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        />
    );
};
