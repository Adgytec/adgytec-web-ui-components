import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Tab as AriaTab, SelectionIndicator } from "react-aria-components";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils";
import styles from "./tab.module.css";
import { useSplash } from "@/components/Splash/useSplash";
import { Splash } from "@/components/Splash/Splash";

export const Tab: React.FC<
    Omit<React.ComponentPropsWithRef<typeof AriaTab>, "children"> & {
        label?: ReactNode;
        icon?: LucideIcon;
    }
> = ({ className, label, icon, onPress, ...props }) => {
    const { splashInfo, handlePress } = useSplash(onPress);

    return (
        <AriaTab
            onPress={handlePress}
            className={(renderProps) =>
                clsx(
                    styles["tab"],
                    typography.titleSmall,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
            data-icon={icon ? true : undefined}
            data-tab={true}
        >
            {splashInfo && <Splash {...splashInfo} />}
            {icon && <Icon icon={icon} size={24} />}
            {label}
            <SelectionIndicator
                className={clsx(styles["selection-indicator"])}
                data-selection-indicator={true}
            />
        </AriaTab>
    );
};
