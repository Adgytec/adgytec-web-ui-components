/**
 * Layout styles for Material 3 sheets (`SideSheet` and `BottomSheet`).
 *
 * - `"standard"`: The sheet is attached directly to the edge(s) of the viewport (no outer margins; corners on the attachment edge are square).
 * - `"detached"`: The sheet has outer margins separating it from the viewport edges and features rounded corners on all sides, appearing as a floating container.
 *
 * @example
 * ```tsx
 * const layout: SheetLayout = "detached";
 * ```
 */
export type SheetLayout = "standard" | "detached";
