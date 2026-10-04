import clsx from "clsx";
import { type RefProp, typography } from "@/utils";
import { CharacterCountStyles } from "../core";

/**
 * Props for the {@link CharacterCount} component.
 */
export interface CharacterCountProps extends RefProp<"span"> {
    /** Current character count. */
    count: number;
    /** Optional maximum allowed character limit. */
    maxLength?: number;
}

/**
 * Displays the current character count and optional maximum character limit below text inputs.
 */
export const CharacterCount: React.FC<CharacterCountProps> = ({
    count,
    maxLength,
    ...props
}) => {
    return (
        <span
            className={clsx(CharacterCountStyles, typography.labelMedium)}
            {...props}
        >
            {count}
            {maxLength !== undefined && `/${maxLength}`}
        </span>
    );
};
