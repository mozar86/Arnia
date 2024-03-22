import { Transaction } from "../entities/transaction";
// Importa a classe Transaction do arquivo 'transaction.ts' localizado na pasta '../entities/'.
import { TransactionRepository } from "../repositories/transaction-repository";
// Importa o repositório de transações do arquivo 'transaction-repository.ts' localizado na pasta '../repositories/'.

export class TransactionService {
  repository: TransactionRepository
  // Declaração do atributo repository, que será uma instância de TransactionRepository.

  constructor(repository: TransactionRepository) {
    // Método construtor da classe TransactionService que recebe um repositório de transações como parâmetro.
    this.repository = repository
    // Atribui o repositório recebido ao atributo repository da instância.
  }

  async create(transaction: Transaction) {
    // Método assíncrono para criar uma nova transação.
    const result = await this.repository.create(transaction)
    // Chama o método 'create' do repositório para criar a transação.
    return result
    // Retorna o resultado da criação da transação.
  }

  async list() {
    // Método assíncrono para listar todas as transações.
    const transactions = await this.repository.list()
    // Chama o método 'list' do repositório para obter a lista de transações.
    return transactions
    // Retorna a lista de transações.
  }

  async getById(id: string) {
    // Método assíncrono para obter uma transação por seu ID.
    const transaction = await this.repository.getById(id)
    // Chama o método 'getById' do repositório para obter a transação com o ID fornecido.
    if (!transaction) {
      // Verifica se a transação não foi encontrada.
      return { error: true, message: "Transaction not found" }
      // Retorna um objeto indicando que ocorreu um erro e a transação não foi encontrada.
    }
    return transaction
    // Retorna a transação encontrada.
  }

}

/*
Neste comentário, foram explicadas as ações realizadas em cada método da classe TransactionService. Cada método corresponde a uma operação específica relacionada à manipulação das transações. As operações de manipulação dos dados são delegadas ao repositório TransactionRepository, mantendo a separação de responsabilidades entre a camada de serviço e a camada de persistência de dados.
*/