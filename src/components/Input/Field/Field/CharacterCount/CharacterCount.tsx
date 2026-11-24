import clsx from "clsx";
import { typography } from "@/utils";

/**
 * Props for the {@link CharacterCount} component.
 */
export interface CharacterCountProps
    extends React.ComponentPropsWithRef<"span"> {
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
    className,
    ...props
}) => {
    return (
        <span
            ref={ref}
            className={clsx(typography.labelMedium, className)}
            {...props}
        >
            {count}
            {maxLength ? `/${maxLength}` : ""}
        </span>
    );
};
