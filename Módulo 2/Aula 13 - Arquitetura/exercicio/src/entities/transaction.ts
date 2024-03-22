interface ITransactionProps {
  // Definição de uma interface chamada ITransactionProps que descreve as propriedades de uma transação.
  value: number 
  description: string 
  kind: 'withdraw' | 'deposit' 
}

class Transaction {
  // Implementação da estrutura definida na interface ITransactionProps.
  value: number
  description: string 
  kind: 'withdraw' | 'deposit'
  createdAt: Date 
  canceledAt: Date | null 

  constructor(data: ITransactionProps) {
    // Método construtor da classe Transaction que inicializa os atributos com os valores fornecidos.
    this.value = data.value 
    this.description = data.description 
    this.kind = data.kind 
    this.createdAt = new Date() 
    this.canceledAt = null 
  }
}

export { Transaction, ITransactionProps }
// Exporta a classe Transaction e a interface ITransactionProps para uso externo.
