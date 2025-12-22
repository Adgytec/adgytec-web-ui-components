export function getEnvVar(key: string, defaultValue?: string): string {
  const value = import.meta.env[key];
  if (!value) {
    if (!defaultValue) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
    return defaultValue;
  }
  return value;
}
