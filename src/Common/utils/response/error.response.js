export const globalErrorHandler = (error, req, res, next) => {
  const status = error.cause?.status ?? 500;
  return res.status(status).json({
    Message: "Something Went Wrong !!",
    Error: error.message,
  });
};

export const errorException = ({
  message = "Fail",
  status = 400,
  extra = undefined,
}) => {
  throw new Error(message, { cause: { status, extra } });
};

export const conflictException = ({
  message = "Conflict",
  extra
}) => {
  return errorException({message, status:409, extra})
};

export const notFoundException = ({
  message = "Not Found",
  extra
}) => {
  return errorException({message, status:404, extra})
};

