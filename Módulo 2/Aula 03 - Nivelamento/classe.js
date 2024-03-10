class Employee {
    id
    nome
    salario
    cargo
    horasDeTrabalho

    constructor(nome, salario, cargo, horasDeTrabalho) {
        this.id = new Date().getTime()
        this.nome = nome
        this.salario = salario
        this.cargo = cargo
        this.horasDeTrabalho = horasDeTrabalho
    }


    apresentar(){
    return `${this.nome}, cargo ${this.cargo} que recebe R$ ${this.salario}`
    }

    aumentarSalario(porcentagem){
    this.salario = this.salario * (1 + (porcentagem / 100))
    }
}
const mozar = new Employee("Mozar", 15000, "Desenvolvedor", 8)
console.log(mozar.apresentar())
mozar.aumentarSalario(20)
console.log(mozar.apresentar())