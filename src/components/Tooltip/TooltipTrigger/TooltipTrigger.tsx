import {
    TooltipTrigger as AriaTooltipTrigger,
    type TooltipTriggerComponentProps,
} from "react-aria-components";

export const TooltipTrigger: React.FC<TooltipTriggerComponentProps> = ({
    delay = 250,
    closeDelay = 150,
    ...props
}) => {
    return (
        <AriaTooltipTrigger delay={delay} closeDelay={closeDelay} {...props} />
    );
};
