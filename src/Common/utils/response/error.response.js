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
  throw Error(message, { cause: { status, extra } });
};
