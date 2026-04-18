import { Menu as AriaMenu } from "react-aria-components";
import type { MenuProps } from "./types";

export const Menu = <T extends object>({
    color = "standard",
    ...props
}: MenuProps<T>) => {
    return <AriaMenu {...props} />;
};
