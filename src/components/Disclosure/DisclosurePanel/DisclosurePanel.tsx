import { clsx } from "clsx";
import {
    DisclosurePanel as AriaDisclosurePanel,
    type DisclosurePanelProps,
} from "react-aria-components";
import type { Typography } from "@/utils";
import { useDisclosureTypographyContext } from "../context";
import styles from "./disclosurePanel.module.css";

export const DisclosurePanel: React.FC<
    DisclosurePanelProps & {
        panelTypography?: Typography;
    }
> = ({ className, children, panelTypography, ...props }) => {
    const { panel } = useDisclosureTypographyContext({
        panel: panelTypography,
    });

    return (
        <AriaDisclosurePanel
            className={(renderProps) =>
                clsx(
                    styles["panel"],
                    panel,
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            <div>{children}</div>
        </AriaDisclosurePanel>
    );
};
