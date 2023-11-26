export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || 'Internal Server Error';
  err.statusCode = err.statusCode || 500;
  err.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
