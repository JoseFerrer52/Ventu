export const response = (res, status, message, object) => {
    res.status(status).json({
      status: status,
      error: false,
      message: message,
      object: object,
    });
};
