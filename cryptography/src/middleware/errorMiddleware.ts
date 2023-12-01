import { NextFunction, Request, Response } from "express";

export default (error: Error, _request: Request, response: Response, _next: NextFunction) => (
  response.status(500).json({ message: error.message })
);