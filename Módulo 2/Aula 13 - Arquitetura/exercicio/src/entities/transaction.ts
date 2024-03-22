interface ITransactionProps {
  value: number
  description: string
  kind: 'withdraw' | 'deposit'
}

class Transaction {
  value: number
  description: string
  kind: 'withdraw' | 'deposit'
  createdAt: Date
  canceledAt: Date | null

  constructor(data: ITransactionProps) {
    this.value = data.value
    this.description = data.description
    this.kind = data.kind
    this.createdAt = new Date()
    this.canceledAt = null
  }
}

export { Transaction, ITransactionProps }