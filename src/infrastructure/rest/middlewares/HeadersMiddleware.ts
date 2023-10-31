import { NextFunction, Request, Response } from "express";

export const allow = (req: Request, res: Response, next: NextFunction) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept"
  );
  next();
};
