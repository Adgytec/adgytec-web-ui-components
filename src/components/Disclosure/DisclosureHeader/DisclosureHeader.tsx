import { clsx } from "clsx";
import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import {
    Button,
    type ButtonProps,
    DisclosureStateContext,
    Heading,
} from "react-aria-components";
import {
    ButtonReset,
    buttonColorBase,
    buttonColorConfig,
} from "@/components/Button";
import { Icon } from "@/components/Icon";
import {
    type FluidTypographyVariant,
    TapTarget,
    type TypographyVariant,
    typography,
} from "@/utils";
import styles from "./disclosureHeader.module.css";

export const DisclosureHeader: React.FC<
    Omit<ButtonProps, "slot" | "className"> & {
        labelTypography?: TypographyVariant | FluidTypographyVariant;
    }
> = ({
    children,
    labelTypography = typography.titleMediumEmphasized,
    ...props
}) => {
    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    return (
        <Heading>
            <Button
                className={clsx(
                    ButtonReset,
                    TapTarget,
                    styles["trigger"],
                    buttonColorBase,
                    buttonColorConfig("standard"),
                    labelTypography
                )}
                slot="trigger"
                {...props}
                data-expanded={isExpanded || undefined}
                data-shape="square"
            >
                {(renderProps) => (
                    <>
                        <Icon withText icon={ChevronRight} />

                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </>
                )}
            </Button>
        </Heading>
    );
};
