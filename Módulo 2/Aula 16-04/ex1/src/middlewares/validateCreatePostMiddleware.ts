import { NextFunction, Request, Response } from "express";
import * as yup from "yup"

enum HttpStatus {
  BAD_REQUEST = 400
}

export async function validateCreatePostMiddleware(req: Request, res: Response, next: NextFunction) {
  const bodyValidator = yup.object({
    author: yup.string(),
    content: yup.string().min(10)
  })

  try {
    await bodyValidator.validate(req.body)
  } catch(error: any) {
    return res.status(HttpStatus.BAD_REQUEST).json({
      message: error.message
    })
  }

  next()
}

// export const validateCreatePostMiddleware = (schema: yup.ObjectSchema<any>) => async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     await schema.validate(req.body)
//   } catch (error: any) {
//     return res.status(400).json({
//       message: error.message
//     })
//   }
//   next()
// }
