import type { Button } from "react-aria-components";
import type { ButtonBaseProps } from "../core";

export interface ButtonProps
    extends React.ComponentPropsWithRef<typeof Button>,
        ButtonBaseProps {}
