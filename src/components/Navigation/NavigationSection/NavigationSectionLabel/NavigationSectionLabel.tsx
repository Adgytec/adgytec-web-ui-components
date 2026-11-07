import clsx from "clsx";
import { Heading } from "react-aria-components";
import { typography } from "@/utils";
import { useNavigationContext } from "../../Navigation/navContext";
import styles from "./navigationSectionLabel.module.css";

/**
 * Props for the [`NavigationSectionLabel`](src/components/Navigation/NavigationSection/NavigationSectionLabel/NavigationSectionLabel.tsx) component.
 */
export interface NavigationSectionLabelProps
    extends React.ComponentPropsWithRef<typeof Heading> {}

/**
 * Styled title heading for a [`NavigationSection`](src/components/Navigation/NavigationSection/NavigationSection/NavigationSection.tsx).
 *
 * Rendered with Material Design 3 `titleSmall` typography and accessible heading semantics.
 * Adapts layout between expanded and collapsed navigation variants, truncating with ellipsis in collapsed mode.
 *
 * @example
 * ```tsx
 * <NavigationSectionLabel>Workspaces</NavigationSectionLabel>
 * ```
 */
export const NavigationSectionLabel: React.FC<NavigationSectionLabelProps> = ({
    className,
    ...props
}) => {
    const { variant } = useNavigationContext();

    return (
        <Heading
            className={clsx(styles["label"], typography.titleSmall, className)}
            data-variant={variant}
            {...props}
        />
    );
};
