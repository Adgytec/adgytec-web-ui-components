import { useContext } from "react";
import { type Typography, typography } from "@/utils";
import { DisclosureTypographyContext } from "./context";

/**
 * Parameters for the {@link useDisclosureTypographyContext} hook.
 */
export interface UseDisclosureTypographyContextProps {
    /** Optional label typography override passed directly to the component. */
    label?: Typography;
    /** Optional panel typography override passed directly to the component. */
    panel?: Typography;
}

/**
 * Resolves the active typography styles for disclosure headers and panels.
 *
 * Checks explicit component props first, then falls back to inherited values from
 * an enclosing {@link DisclosureGroup}, and finally defaults to Material 3 standard
 * typography (`typography.titleMediumEmphasized` for labels, `typography.bodyLarge` for panels).
 *
 * @param props - Explicit typography overrides from component props.
 * @returns An object containing resolved `label` and `panel` typography classes.
 */
export function useDisclosureTypographyContext({
    label,
    panel,
}: UseDisclosureTypographyContextProps) {
    const { label: groupLabel, panel: groupPanel } = useContext(
        DisclosureTypographyContext
    );

    const labelTypography =
        label ?? groupLabel ?? typography.titleMediumEmphasized;
    const panelTypography = panel ?? groupPanel ?? typography.bodyLarge;

    return { label: labelTypography, panel: panelTypography };
}
