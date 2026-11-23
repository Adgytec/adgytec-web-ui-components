import clsx from "clsx";
import { type RefProp, typography } from "@/utils";
import { CharacterCountStyles } from "../../../core";

/**
 * Props for the {@link CharacterCount} component.
 */
export interface CharacterCountProps extends RefProp<"span"> {
    /**
     * Current character length of the input field.
     */
    count: number;

    /**
     * Maximum character limit allocated for the field.
     */
    maxLength?: number;
}

export const CharacterCount: React.FC<CharacterCountProps> = ({
    count,
    maxLength,
    ref,
    ...props
}) => {
    return (
        <span
            ref={ref}
            className={clsx(CharacterCountStyles, typography.labelMedium)}
            {...props}
        >
            {count}
            {maxLength ? `/${maxLength}` : ""}
        </span>
    );
};
