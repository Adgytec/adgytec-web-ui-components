import { clsx } from "clsx";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { Button, DisclosureStateContext, Heading } from "react-aria-components";
import {
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
} from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Splash } from "@/components/Splash/Splash";
import { useSplash } from "@/components/Splash/useSplash";
import { TapTarget, type Typography } from "@/utils";
import { useDisclosureTypographyContext } from "../context";
import styles from "./disclosureHeader.module.css";

export const DisclosureHeader: React.FC<
    React.ComponentPropsWithRef<typeof Heading> & {
        labelTypography?: Typography;
    }
> = ({ children, labelTypography, ...props }) => {
    const { splashInfo, handlePress } = useSplash();

    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    const { label } = useDisclosureTypographyContext({
        label: labelTypography,
    });

    return (
        <Heading {...props}>
            <Button
                onPress={handlePress}
                className={clsx(
                    ButtonReset,
                    TapTarget,
                    styles["trigger"],
                    buttonColorBase,
                    buttonColorConfig("standard"),
                    label
                )}
                slot="trigger"
                data-expanded={isExpanded || undefined}
                data-shape="square"
            >
                <span className={styles["state-layer"]}>
                    {splashInfo && <Splash {...splashInfo} />}
                </span>
                <Icon withText icon={ChevronRight} />
                {children}
            </Button>
        </Heading>
    );
};
