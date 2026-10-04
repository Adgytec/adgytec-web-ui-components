import styles from "./textField.module.css";

/**
 * Standard icon size (in pixels) for leading and trailing icons in text fields.
 */
export const TextFieldIconSize = 24;

/** CSS class resetting browser-default text field container styles. */
export const UnsetStyles = styles["unset"];

/** CSS class providing color tokens for text fields. */
export const Colors = styles["colors"];

/** CSS class for the composite input group container. */
export const InputGroupStyles = styles["group"];

/** CSS class for the editable input container. */
export const EditorStyles = styles["editor"];

/** CSS class for the input element wrapper group. */
export const EditorInputGroupStyles = styles["editor-input-group"];

/** CSS class for native `<input>` and `<textarea>` elements. */
export const EditorInputStyles = styles["editor-input"];

/** CSS class for supporting text below text fields. */
export const SupportingTextStyles = styles["supporting-text"];

/** CSS class for the character count display. */
export const CharacterCountStyles = styles["character-count"];

/** CSS class for date field composite inputs. */
export const DateInputStyles = styles["date-input"];

/** CSS class for individual date segments within a date field. */
export const DateSegmentStyles = styles["date-segment"];
