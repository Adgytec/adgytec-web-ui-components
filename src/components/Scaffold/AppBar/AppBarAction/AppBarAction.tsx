import { IconButton, type IconButtonProps } from "@/components/Button";

export const AppBarAction: React.FC<Omit<IconButtonProps, "size">> = (
    props
) => {
    return <IconButton {...props} size="small" />;
};
