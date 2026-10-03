import type { ComponentRef, ElementType, Ref } from "react";

/**
 * Utility type that provides a strongly typed `ref` prop for a given React component or HTML element.
 *
 * Primarily used in composite input and form components (such as `Input`, `TextArea`,
 * `DateField`, `DatePicker`, `TimeField`, and `CharacterCount`) where the component wraps
 * an underlying primitive DOM element or React Aria component, allowing callers to pass
 * a ref targeting the inner interactive element.
 *
 * @template T - The React component or intrinsic HTML tag name whose instance/DOM ref type is extracted via {@link ComponentRef}.
 *
 * @example
 * ```tsx
 * import type { RefProp } from "@/utils";
 * import type { Input } from "react-aria-components";
 *
 * export interface CustomInputProps extends RefProp<typeof Input> {
 *     label: string;
 * }
 * ```
 *
 * @example
 * ```tsx
 * import type { RefProp } from "@/utils";
 *
 * export interface CharacterCountProps extends RefProp<"span"> {
 *     current: number;
 *     max: number;
 * }
 * ```
 */
export type RefProp<T extends ElementType> = {
    /**
     * Optional ref targeting the underlying DOM element or component instance.
     */
    ref?: Ref<ComponentRef<T>>;
};
