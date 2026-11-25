import { Icon, type IconProps } from "@/components/Icon";
import { FieldNode } from "../FieldNode";

/**
 * Props for the {@link FieldIcon} component.
 * Extends {@link IconProps} omitting `size` (fixed at 24) and `withText`.
 */
export interface FieldIconProps extends Omit<IconProps, "size" | "withText"> {}

/**
 * An icon wrapper specifically sized and styled for placement as a leading or trailing element inside a Field.
 * Internally wraps an {@link Icon} within a {@link FieldNode} for consistent 40px block-size alignment.
 */
export const FieldIcon: React.FC<FieldIconProps> = (props) => {
    return (
        <FieldNode>
            <Icon {...props} size={24} />
        </FieldNode>
    );
};
