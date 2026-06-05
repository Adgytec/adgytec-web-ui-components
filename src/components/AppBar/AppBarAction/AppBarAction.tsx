import { IconButton, type IconButtonProps } from "@/components/Button";

export const AppBarAction: React.FC<Omit<IconButtonProps, "size">> = ({
    color = "standard",
    ...props
}) => {
    return <IconButton {...props} color={color} size="small" />;
};
