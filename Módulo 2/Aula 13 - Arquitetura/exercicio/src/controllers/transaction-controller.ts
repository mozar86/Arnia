import { Request, Response } from "express"
import { TransactionRepository } from "../repositories/transaction-repository"

const repository = new TransactionRepository()

export async function createTransactionController (req: Request, res: Response) {
  const { body } = req
  await repository.create(body)
  return res.status(201).json()
}

export async function listTransactionController (req: Request, res: Response) {
  const transactions = await repository.list()

  return res.status(200).json({ transactions })
}

export async function getTransactionByIdController(req: Request, res: Response) {
  const { params } = req
  const transaction = await repository.getById(params.id)
  return res.status(200).json({ transaction })
}