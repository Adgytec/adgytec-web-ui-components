import { clsx } from "clsx";
import { Search, X } from "lucide-react";
import { SearchField as AriaSearchField, Input } from "react-aria-components";
import { IconButton } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { typography } from "@/utils";
import styles from "./searchField.module.css";
import type { SearchFieldProps } from "./types";

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
