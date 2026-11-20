import type { LinkIconButtonProps } from "@/components/Button";

/**
 * Props for the {@link AppBarLinkAction} component, omitting `size` which is fixed to `"small"`.
 */
export type AppBarLinkActionProps = Omit<LinkIconButtonProps, "size">;
