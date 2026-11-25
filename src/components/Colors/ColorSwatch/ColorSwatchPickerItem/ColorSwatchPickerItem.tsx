import { clsx } from "clsx";
import { Check } from "lucide-react";
import {
    ColorSwatchPickerItem as AriaColorSwatchPickerItem,
    composeRenderProps,
} from "react-aria-components";
import { Icon } from "@/components/Icon";
import { TapTarget } from "@/utils";
import styles from "./colorSwatchPickerItem.module.css";
import type { ColorSwatchPickerItemProps } from "./types";

export const ColorSwatchPickerItem: React.FC<ColorSwatchPickerItemProps> = (
    props
) => {
    return (
        <AriaColorSwatchPickerItem
            {...props}
            className={composeRenderProps(props.className, (className) =>
                clsx(styles["item"], TapTarget, className)
            )}
        >
            {composeRenderProps(props.children, (children, { isSelected }) => (
                <>
                    {isSelected && (
                        <Icon
                            className={clsx(styles["selection"])}
                            icon={Check}
                            size={18}
                            strokeWidth={4}
                        />
                    )}

                    {children}
                </>
            ))}
        </AriaColorSwatchPickerItem>
    );
};
