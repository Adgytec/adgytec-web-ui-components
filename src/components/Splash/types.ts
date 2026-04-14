export interface SplashState {
    id: number;
    x: number;
    y: number;
    onAnimationEnd: () => void;
}

export interface SplashProps extends SplashState {}
