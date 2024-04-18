import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

export function ensureAuthMiddleware(req: Request, res: Response, next: NextFunction) {
  /**
   * 1. capturar o campo "authorization" dentro do headers
   *  a. Se o campo não existir: retornar um erro
   *  b. Se existir, continuamos o algoritmo
   * 2. Remover do campo "Authorization" o texto "Bearer "
   * 3. Validar o token
   * 4. executar a função "next"
   */
  const { headers } = req
  const authorization = headers['authorization'] as string
  if (!authorization) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  
  const token = authorization.replace('Bearer ', '')

  try {
    verify(token, "rtedytfyguiopiiouwehfoqeuwfhoiwu")
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  next()
}
