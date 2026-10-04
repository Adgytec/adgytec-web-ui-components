import { clsx } from "clsx";
import { Search, X } from "lucide-react";
import { SearchField as AriaSearchField, Input } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils";
import styles from "./searchField.module.css";
import type { SearchFieldProps } from "./types";

/**
 * A search input field providing a leading search icon and automatic clear button.
 *
 * Implements accessible search interactions based on React Aria's `SearchField`,
 * clearing text via keyboard (`Escape`) or the integrated clear button.
 *
 * @example
 * ```tsx
 * import { SearchField } from '@adgytec/web-ui-components';
 *
 * <SearchField
 *     placeholder="Search documents..."
 *     onSubmit={(query) => console.log('Searching for:', query)}
 * />
 * ```
 */
export const SearchField: React.FC<SearchFieldProps> = ({
    placeholder = "Search",
    className,
    ...props
}) => {
    return (
        <AriaSearchField
            className={(renderProps) =>
                clsx(
                    styles["search-field"],
                    typeof className === "function"
                        ? className(renderProps)
                        : className
                )
            }
            {...props}
        >
            {({ isEmpty }) => (
                <>
                    <Icon icon={Search} size={24} data-search-icon />

                    <Input
                        className={clsx(styles["input"], typography.bodyLarge)}
                        placeholder={placeholder}
                    />

                    {!isEmpty && (
                        <IconButton
                            icon={X}
                            size="small"
                            width="default"
                            color="standard"
                        />
                    )}
                </>
            )}
        </AriaSearchField>
    );
};
