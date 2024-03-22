import { Request, Response } from "express"
import { TransactionService } from "../services/transaction-service"

export class TransactionController {
  service: TransactionService

  constructor(service: TransactionService) {
    // Construtor da classe TransactionController que recebe uma instância de TransactionService como parâmetro e a atribui ao atributo 'service'.
    this.service = service
  }

  async create(req: Request, res: Response) {
    // Método assíncrono para lidar com a criação de uma transação.
    const { body } = req // Extrai o corpo da requisição.
    await this.service.create(body) // Chama o método 'create' do serviço, passando o corpo da requisição.
    return res.status(201).json() // Retorna uma resposta de sucesso indicando a criação da transação.
  }

  async list(req: Request, res: Response) {
    // Método assíncrono para lidar com a listagem de transações.
    const transactions = await this.service.list() // Chama o método 'list' do serviço para obter a lista de transações.
    return res.status(200).json({ transactions }) // Retorna uma resposta com status 200 e a lista de transações em formato JSON.
  }

  async getById(req: Request, res: Response) {
    // Método assíncrono para obter uma transação por seu ID.
    const { params } = req // Extrai os parâmetros da requisição.
    
    const transaction = await this.service.getById(params.id) // Chama o método 'getById' do serviço, passando o ID da transação como parâmetro.

    if (transaction.error === true) {
      // Verifica se houve um erro ao buscar a transação.
      return res.status(404).json({ message: transaction.message }) // Retorna uma resposta com status 404 e uma mensagem indicando que a transação não foi encontrada.
    }
    return res.status(200).json({ transaction }) // Retorna uma resposta com status 200 e a transação encontrada em formato JSON.
  }
}

/*
Neste comentário, foram explicadas as ações realizadas em cada método da classe TransactionController. Cada método corresponde a uma função específica de um controlador, como criar uma transação, listar transações e obter uma transação por ID. As requisições HTTP são manipuladas através dos parâmetros req (requisição) e res (resposta), fornecidos pelo Express.js. As operações de manipulação dos dados são delegadas ao serviço TransactionService, mantendo a separação de responsabilidades entre a camada de controle e a camada de serviço.
*/