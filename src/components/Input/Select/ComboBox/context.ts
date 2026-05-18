import { createContext } from "react";
import type { ComboBoxRenderProps } from "react-aria-components";

export const ComboboxContext = createContext<Partial<ComboBoxRenderProps>>({});
