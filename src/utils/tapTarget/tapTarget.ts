import styles from "./tapTarget.module.css";

/**
 * CSS class name that ensures an element meets the minimum accessible touch target size (48x48px / 48dp)
 * using an invisible centered `::after` pseudo-element.
 *
 * Implements WCAG Target Size recommendations (48x48px minimum touch area) for small or compact
 * interactive elements without affecting the visual layout or dimensions of the element itself.
 *
 * Automatically collapses to `0px` when the element has the `[data-disabled]` attribute.
 *
 * Extensively used across interactive controls including buttons, icon buttons, checkboxes,
 * radio buttons, switches, and avatar triggers.
 *
 * @remarks
 * If the element or an ancestor container applies `overflow: hidden` or `contain: paint`,
 * the pseudo-element's expanded hit area will be clipped to that boundary.
 *
 * @example
 * ```tsx
 * import { TapTarget } from "@/utils";
 * import clsx from "clsx";
 *
 * function CustomIconButton({ icon: Icon, onClick }) {
 *     return (
 *         <button type="button" className={clsx("icon-button", TapTarget)} onClick={onClick}>
 *             <Icon />
 *         </button>
 *     );
 * }
 * ```
 */
export const TapTarget = styles["after"];

/**
 * CSS class name that ensures an element meets the minimum accessible touch target size (48x48px / 48dp)
 * using an invisible centered `::before` pseudo-element.
 *
 * Alternative to {@link TapTarget} for components where the `::after` pseudo-element is already reserved
 * or in use (such as for focus rings, badges, or ripples).
 *
 * Automatically collapses to `0px` when the element has the `[data-disabled]` attribute.
 *
 * @remarks
 * If the element or an ancestor container applies `overflow: hidden` or `contain: paint`,
 * the pseudo-element's expanded hit area will be clipped to that boundary.
 *
 * @example
 * ```tsx
 * import { TapTargetBefore } from "@/utils";
 * import clsx from "clsx";
 *
 * function CustomAction({ onClick, children }) {
 *     return (
 *         <button type="button" className={clsx("custom-action", TapTargetBefore)} onClick={onClick}>
 *             {children}
 *         </button>
 *     );
 * }
 * ```
 */
export const TapTargetBefore = styles["before"];
