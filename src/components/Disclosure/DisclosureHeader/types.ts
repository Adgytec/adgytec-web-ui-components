import type { ReactNode } from "react";

/**
 * Props for the {@link DisclosureHeader} component.
 */
export interface DisclosureHeaderProps {
    /**
     * Optional leading element rendered at the start of the header,
     * typically a {@link DisclosureIcon} or avatar.
     */
    leading?: ReactNode;

    /**
     * The primary label content of the header, typically wrapped in {@link DisclosureLabel}.
     */
    label: ReactNode;
}
