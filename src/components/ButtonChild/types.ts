export type ButtonState =
    | "enabled"
    | "disabled"
    | "pending"
    | "completed"
    | "error";

// deafult for disabled, pending, error, and completed is enabled text
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
