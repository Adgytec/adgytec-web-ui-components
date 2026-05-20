import type { Link } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

export interface LinkButtonProps
    extends React.ComponentPropsWithRef<typeof Link>,
        ButtonBaseProps {}
