export interface SplashState {
    id: number;
    x: number;
    y: number;
}

export interface SplashProps extends SplashState {
    onAnimationEnd?: () => void;
}
