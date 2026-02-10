type ContainerVariant = "default" | "wide" | "full";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    varaint?: ContainerVariant;
}
