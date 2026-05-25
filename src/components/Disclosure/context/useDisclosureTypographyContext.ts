import { useContext } from "react";
import { type Typography, typography } from "@/utils";
import { DisclosureTypographyContext } from "./context";

export function useDisclosureTypographyContext({
    label,
    panel,
}: {
    label?: Typography;
    panel?: Typography;
}) {
    const { label: groupLabel, panel: groupPanel } = useContext(
        DisclosureTypographyContext
    );

    const labelTypography =
        label ?? groupLabel ?? typography.titleMediumEmphasized;
    const panelTypography = panel ?? groupPanel ?? typography.bodyLarge;

    return { label: labelTypography, panel: panelTypography };
}
