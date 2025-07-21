export enum ButtonState {
  enabled = "enabled",
  disabled = "disabled",
  pending = "pending",
  completed = "completed",
  error = "error",
}

// deafult for disabled, pending, and completed is enabled text
// default for error is Try again
export interface ButtonStateText {
  enabled: string;
  disabled?: string;
  pending?: string;
  completed?: string;
  error?: string;
}

export interface ButtonChildProps {
  buttonState: ButtonState;
  value: ButtonStateText;
}
