export interface BadgeProps
    extends Omit<React.ComponentPropsWithRef<"span">, "children"> {
    count?: number;
    overflowAt?: number;
}

export const MAX_OVERFLOW_AT = 1000;
