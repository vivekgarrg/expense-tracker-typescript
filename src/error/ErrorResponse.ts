import { NextFunction, Request, Response } from "express";
import ErrorHandler from "./ErrorHandler";

class ErrorResponse {
  defaultMethod(
    err: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    res.status(err.statusCode || 500).json({
      error: err.message,
      success: false,
    });
  }
}

export = new ErrorResponse();
