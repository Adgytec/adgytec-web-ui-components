export interface SplashState {
  id: number;
  x: number;
  y: number;
}

export type SetTimeoutReturnType = ReturnType<typeof setTimeout>;

export interface SplashProps extends SplashState {}
