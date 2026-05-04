import {
    MenuTrigger as AriaMenuTrigger,
    type MenuTriggerProps,
} from "react-aria-components";

export const MenuTrigger: React.FC<MenuTriggerProps> = (props) => {
    return <AriaMenuTrigger {...props} />;
};
