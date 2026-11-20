export interface BadgeProps
    extends Omit<React.ComponentPropsWithRef<"span">, "children"> {
    count?: number;
    truncateAfter?: number;
}
