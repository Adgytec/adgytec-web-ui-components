export interface ApiErrorResponse {
  message?: string;
  fieldErrors?: Record<string, string | string[]>;
}

export class ApiError extends Error {
  data: ApiErrorResponse;
  response: Response;

  constructor(response: Response, data: ApiErrorResponse) {
    super();

    this.name = "ApiError";
    this.data = data;
    this.response = response;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}
