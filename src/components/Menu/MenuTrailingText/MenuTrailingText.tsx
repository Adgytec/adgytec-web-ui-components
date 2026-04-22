import { typography } from "@/utils/typography";
import clsx from "clsx";

export const MenuTrailingText: React.FC<{ value: string }> = ({ value }) => {
    return <p className={clsx(typography.labelLarge)}>{value}</p>;
};
