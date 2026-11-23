import clsx from "clsx";
import { Text } from "react-aria-components";
import { typography } from "@/utils/typography";

/**
 * Props for the {@link Description} component.
 * Extends React Aria's {@link Text} props.
 */
export interface DescriptionProps
    extends React.ComponentPropsWithRef<typeof Text> {}

/**
 * Informative supporting text placed beneath an input field.
 *
 * Automatically bound via `slot="description"` for accessibility screen reader announcements.
 */
export const Description: React.FC<DescriptionProps> = ({
    className,
    slot: _,
    ...props
}) => {
    return (
        <Text
            slot="description"
            className={clsx(typography.labelMedium, className)}
            {...props}
        />
    );
};
