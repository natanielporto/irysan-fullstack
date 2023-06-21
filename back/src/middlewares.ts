import { Request, Response, NextFunction } from "express";

//not found error
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not found: ${req.originalUrl}`);
  res.status(404);
  next(error);
};

//generic error handler
export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? "Bad stack." : error.stack,
  });
};
