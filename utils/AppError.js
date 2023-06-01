class AppError {
  constructor(message = "Something went wrong", statusCode = 500) {
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "error" : "fail";
  }
}

export default AppError;
