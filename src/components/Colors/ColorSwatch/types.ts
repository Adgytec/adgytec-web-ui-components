import type { ColorSwatch } from "react-aria-components";

export interface ColorSwatchProps
    extends React.ComponentPropsWithRef<typeof ColorSwatch> {
    size?: "extra-small" | "small" | "medium" | "large" | "extra-large";
    shape?: "round" | "square";
}
