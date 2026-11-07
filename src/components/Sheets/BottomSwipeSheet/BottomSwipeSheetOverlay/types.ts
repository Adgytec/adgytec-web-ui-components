import type { SheetOverlay } from "react-aria-components";

export interface BottomSwipeSheetOverlayProps
    extends Omit<
        React.ComponentPropsWithRef<typeof SheetOverlay>,
        "position" | "swipeDirection"
    > {}
