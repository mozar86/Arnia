import { TransactionController } from "../controllers/transaction-controller"
// Importa o controlador de transações do arquivo 'transaction-controller.ts' localizado na pasta '../controllers/'.

import { transactionCollection } from "../database/connection"
// Importa a coleção de transações do arquivo 'connection.ts' localizado na pasta '../database/'.

import { TransactionRepository } from "../repositories/transaction-repository"
// Importa o repositório de transações do arquivo 'transaction-repository.ts' localizado na pasta '../repositories/'.

export function makeTransaction() {
  // Cria uma instância do repositório de transações, passando a coleção de transações como parâmetro.
  const repository = new TransactionRepository(transactionCollection)
  // Cria uma instância do controlador de transações, passando o repositório como parâmetro.
  const transactionController = new TransactionController(repository)
  // Retorna o controlador de transações criado.
  return transactionController
}

/*
Este comentário descreve a função makeTransaction(), que é responsável por instanciar e configurar o controlador de transações. Primeiro, uma instância do TransactionRepository é criada, utilizando a coleção de transações fornecida pelo transactionCollection. Em seguida, uma instância do TransactionController é criada, recebendo o repositório de transações como parâmetro. Por fim, a função retorna o controlador de transações configurado e pronto para uso.
*/

