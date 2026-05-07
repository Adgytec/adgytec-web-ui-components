import { clsx } from "clsx";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import {
    Button,
    DisclosureStateContext,
    Heading,
    type HeadingProps,
} from "react-aria-components";
import {
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
} from "@/components/Button";
import { Icon } from "@/components/Icon";
import { TapTarget, type Typography } from "@/utils";
import { useDisclosureTypographyContext } from "../context";
import styles from "./disclosureHeader.module.css";

export const DisclosureHeader: React.FC<
    HeadingProps & {
        labelTypography?: Typography;
    }
> = ({ children, labelTypography, ...props }) => {
    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    const { label } = useDisclosureTypographyContext({
        label: labelTypography,
    });

    return (
        <Heading {...props}>
            <Button
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
                <Icon withText icon={ChevronRight} />
                {children}
            </Button>
        </Heading>
    );
};
