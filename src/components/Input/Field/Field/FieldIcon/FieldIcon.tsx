import { Icon, type IconProps } from "@/components/Icon";
import { FieldNode } from "../FieldNode";

/**
 * An icon wrapper specifically sized and styled for placement as a leading or trailing element inside a Field.
 */
export const FieldIcon: React.FC<Omit<IconProps, "size" | "withText">> = (
    props
) => {
    return (
        <FieldNode>
            <Icon {...props} size={24} />
        </FieldNode>
    );
};
