import {
    DisclosurePanel as AriaDisclosurePanel,
    type DisclosurePanelProps,
} from "react-aria-components";

export const DisclosurePanel: React.FC<DisclosurePanelProps> = (props) => {
    return <AriaDisclosurePanel {...props} />;
};
