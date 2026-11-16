import type { SineWaveBaseProps } from "../core";

/**
 * Props for the linear {@link Sine} wave component.
 *
 * Inherits all wave parameters from {@link SineWaveBaseProps}.
 */
export interface SineWaveProps extends SineWaveBaseProps {
    width: number;
}
