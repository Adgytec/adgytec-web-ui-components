import type { Link } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

/**
 * Props for the {@link LinkButton} component.
 * Combines React Aria's {@link Link} props with shared {@link ButtonBaseProps}.
 */
export interface LinkButtonProps
    extends React.ComponentPropsWithRef<typeof Link>,
        ButtonBaseProps {}
