export const MenuShortcut: React.FC<React.ComponentPropsWithoutRef<"kbd">> = ({
    className,
    ...props
}) => {
    return <kbd className={className} {...props} />;
};
