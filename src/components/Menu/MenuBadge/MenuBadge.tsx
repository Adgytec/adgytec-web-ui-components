export const MenuBadge: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
    className,
    ...props
}) => {
    return <div className={className} {...props} />;
};
