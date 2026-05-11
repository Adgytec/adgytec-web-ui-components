import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";
import type { Tag } from "react-aria-components";

// icon or avatar only one is required
// if both are present avatar is given more priority
export interface TagProps
    extends Omit<React.ComponentPropsWithRef<typeof Tag>, "children"> {
    label: string;
    icon?: LucideIcon;
    avatar?: ReactElement;
}
