import clsx from "clsx";
import styles from "./fieldNode.module.css";

/**
 * Props for the {@link FieldNode} component.
 * Extends standard HTML `<span>` attributes with ref support.
 */
export interface FieldNodeProps extends React.ComponentPropsWithRef<"span"> {}

/**
 * A layout container for embedding custom non-button elements (such as color swatches,
 * status indicators, badges, or custom icons) inside a `Field` as leading or trailing content.
 *
 * Ensures consistent block sizing (40px) and centered flex alignment matching {@link FieldButton}.
 *
 * @example
 * ```tsx
 * import { Field, FieldNode } from "@adgytec/web-ui-components";
 * import { ColorSwatch } from "react-aria-components";
 *
 * <Field
 *     leading={
 *         <FieldNode>
 *             <ColorSwatch style={{ width: 24, height: 24 }} />
 *         </FieldNode>
 *     }
 * >
 *     <Input />
 * </Field>
 * ```
 */
export const FieldNode: React.FC<FieldNodeProps> = ({
    className,
    ...props
}) => {
    return <span {...props} className={clsx(styles["node"], className)} />;
};
