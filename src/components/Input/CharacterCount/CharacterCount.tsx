import clsx from "clsx";
import { type RefProp, typography } from "@/utils";
import { CharacterCountStyles } from "../core";

export const CharacterCount: React.FC<
    {
        count: number;
        maxLength?: number;
    } & RefProp<"span">
> = ({ count, maxLength, ...props }) => {
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
