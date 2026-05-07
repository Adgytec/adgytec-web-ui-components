import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import {
    Button,
    type ButtonProps,
    DisclosureStateContext,
    Heading,
} from "react-aria-components";
import { Icon } from "@/components/Icon";

export const DisclosureHeader: React.FC<
    Omit<ButtonProps, "slot" | "className">
> = ({ children, ...props }) => {
    const disclosureContext = useContext(DisclosureStateContext);
    const { isExpanded } = disclosureContext || {};

    return (
        <Heading>
            <Button
                slot="trigger"
                {...props}
                data-expanded={isExpanded || undefined}
            >
                {(renderProps) => (
                    <>
                        <Icon size={20} icon={ChevronRight} />

                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                    </>
                )}
            </Button>
        </Heading>
    );
};
