import clsx from "clsx";
import { typography } from "@/utils/typography";

export const MenuTrailingText: React.FC<{ value: string }> = ({ value }) => {
    return <p className={clsx(typography.labelLarge)}>{value}</p>;
};
