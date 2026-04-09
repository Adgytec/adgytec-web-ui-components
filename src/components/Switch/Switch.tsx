import type { ReactNode } from "react";
import { Switch as AriaSwitch, type SwitchProps } from "react-aria-components";
import styles from "./switch.module.css";
import clsx from "clsx";

export const Switch: React.FC<
    Omit<SwitchProps, "children"> & {
        children: ReactNode;
    }
> = ({ children, ...props }) => {
    return (
        <AriaSwitch {...props}>
            {({ isSelected }) => {
                return (
                    <>
                        <div className={clsx(styles["track"])}>
                            <div
                                data-selected={isSelected || undefined}
                                className={clsx(styles["handle"])}
                            ></div>
                        </div>
                        {children}
                    </>
                );
            }}
        </AriaSwitch>
    );
};
