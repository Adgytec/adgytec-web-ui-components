import clsx from "clsx";
import { typography } from "@/utils";
import { CharacterCountStyles } from "../core";

export const CharacterCount: React.FC<{
    count: number;
    maxLength?: number;
}> = ({ count, maxLength }) => {
    return (
        <span className={clsx(CharacterCountStyles, typography.labelMedium)}>
            {count}
            {maxLength !== undefined && `/${maxLength}`}
        </span>
    );
};
