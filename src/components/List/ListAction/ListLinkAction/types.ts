import type { LinkIconButtonProps } from "@/components/Button";

/**
 * Props for the [`ListLinkAction`](src/components/List/ListAction/ListLinkAction/ListLinkAction.tsx) component.
 */
export interface ListLinkActionProps
    extends Omit<LinkIconButtonProps, "size"> {}
