import { TooltipTrigger as AriaTooltipTrigger } from "react-aria-components";

export const TooltipTrigger: React.FC<
    React.ComponentPropsWithRef<typeof AriaTooltipTrigger>
> = ({ delay = 250, closeDelay = 150, ...props }) => {
    return (
        <AriaTooltipTrigger delay={delay} closeDelay={closeDelay} {...props} />
    );
};
