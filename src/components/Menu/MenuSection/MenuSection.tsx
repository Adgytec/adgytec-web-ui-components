import { MenuSection as AriaMenuSection } from "react-aria-components";
import type { MenuSectionProps } from "./types";

export const MenuSection = <T extends object>({
    layout = "grouped",
    ...props
}: MenuSectionProps<T>) => {
    return <AriaMenuSection {...props} />;
};
