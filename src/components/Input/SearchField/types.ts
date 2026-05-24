import type { SearchField } from "react-aria-components";

export interface SearchFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof SearchField>, "children"> {
    placeholder?: string;
}
