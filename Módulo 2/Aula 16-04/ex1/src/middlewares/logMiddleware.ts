import { NextFunction, Request, Response } from "express";

export async function logMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log("url: ", req.originalUrl)
  console.log("method: ", req.method)
  console.log("body: ", req.body)
  console.log("params: ", req.params)
  console.log("query: ", req.query)
  console.log("header: ", req.headers)
  console.log("===================")
  next()
}


