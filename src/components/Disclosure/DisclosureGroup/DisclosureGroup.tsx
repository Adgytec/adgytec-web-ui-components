import clsx from "clsx";
import {
    DisclosureGroup as AriaDisclosureGroup,
    type DisclosureGroupProps,
} from "react-aria-components";
import type { Typography } from "@/utils";
import { DisclosureTypographyContext } from "../context";
import styles from "./disclosureGroup.module.css";

export const DisclosureGroup: React.FC<
    DisclosureGroupProps & {
        labelTypography?: Typography;
        panelTypography?: Typography;
    }
> = ({ labelTypography, panelTypography, className, ...props }) => {
    return (
        <DisclosureTypographyContext
            value={{ label: labelTypography, panel: panelTypography }}
        >
            <AriaDisclosureGroup
                className={(renderProps) =>
                    clsx(
                        styles["group"],
                        typeof className === "function"
                            ? className(renderProps)
                            : className
                    )
                }
                {...props}
            />
        </DisclosureTypographyContext>
    );
};
