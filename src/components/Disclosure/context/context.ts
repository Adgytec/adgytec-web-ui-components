import { createContext } from "react";
import type { Typography } from "@/utils";

export type DisclosureTypographyContextValue = {
    label?: Typography;
    panel?: Typography;
};

export const DisclosureTypographyContext =
    createContext<DisclosureTypographyContextValue>({});
