import { NextFunction, Request, Response } from "express";
import token from "../service/token";

export default (request: Request, _response: Response, next: NextFunction) => {
  const { token: authorization } = request.headers;
  

  if (!authorization) throw new Error("Require token on header");
  
  const tokenDecoded = token.decode(authorization as string);

  request.headers.authorization = JSON.stringify(tokenDecoded);
  next()
  
}