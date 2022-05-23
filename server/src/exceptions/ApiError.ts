class ApiError extends Error {

  constructor(public status: number, message: string, public errors?: any[]) {
    super(message);
  }

  static BadRequest(message: string, errors: any[] = []) {
    return new ApiError(400, message, errors)
  }
}

export default ApiError