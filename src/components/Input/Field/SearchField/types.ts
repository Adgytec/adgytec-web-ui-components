import type { Input, SearchField } from "react-aria-components";
import type { RefProp } from "@/utils";

/**
 * Props for the {@link SearchField} component.
 * Extends React Aria's `SearchField` props (excluding `children`).
 */
export interface SearchFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof SearchField>, "children">,
        RefProp<typeof Input, "inputRef"> {
    /**
     * Placeholder text displayed within the search field when empty.
     *
     * @default "Search"
     */
    placeholder?: string;
}
