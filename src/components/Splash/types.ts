/**
 * State object representing an active ripple splash animation.
 */
export interface SplashState {
    /** Unique incremental identifier for keying the ripple animation instance. */
    id: number;
    /** Horizontal position (in pixels) of the pointer interaction relative to the element. */
    x: number;
    /** Vertical position (in pixels) of the pointer interaction relative to the element. */
    y: number;
    /** Callback triggered when the ripple CSS animation finishes, cleaning up state. */
    onAnimationEnd: () => void;
}

/**
 * Props for the {@link Splash} component.
 */
export interface SplashProps extends SplashState {}
