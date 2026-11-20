import type { ReactNode } from "react";

export interface BadgeAnchorProps extends React.ComponentPropsWithRef<"span"> {
    badge?: ReactNode;
}
