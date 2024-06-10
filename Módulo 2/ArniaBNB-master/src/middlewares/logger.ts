import { Request, Response, NextFunction } from "express";

export function logger(request: Request, response: Response, next: NextFunction) {
    const { baseUrl, method, path } = request;
    console.log("====================");
    console.log(`${method}: ${baseUrl}${path}`);
    console.log(`Date: ${new Date()}`);
    console.log("====================");
    next();
}
