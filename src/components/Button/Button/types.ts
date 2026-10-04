import type { Button } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

/**
 * Props for the {@link Button} component.
 * Combines React Aria's {@link Button} props with shared {@link ButtonBaseProps}.
 */
export interface ButtonProps
    extends React.ComponentPropsWithRef<typeof Button>,
        ButtonBaseProps {}
