import type { SearchField } from "react-aria-components";

/**
 * Props for the {@link SearchField} component.
 * Extends React Aria's `SearchField` props (excluding `children`).
 */
export interface SearchFieldProps
    extends Omit<React.ComponentPropsWithRef<typeof SearchField>, "children"> {
    /**
     * Placeholder text displayed within the search field when empty.
     *
     * @default "Search"
     */
    placeholder?: string;
}
