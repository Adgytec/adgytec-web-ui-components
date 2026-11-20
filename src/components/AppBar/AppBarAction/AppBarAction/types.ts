import type { IconButtonProps } from "@/components/Button";

/**
 * Props for the {@link AppBarAction} component, omitting `size` which is fixed to `"small"`.
 */
export type AppBarActionProps = Omit<IconButtonProps, "size">;
