//tipagem estática
//forçar a tipagem

//tipagem estática de variáveis/constantes
const nome: string = 'Victor'
//
const pessoa: string | null | number | Date | Array<string | number> = new Date()
//any | unknown | never

//Tipos primitivos: string, number, boolean, null, undefined, symbol
//Estrutura de dados: Objeto, Array, Map, Set...

//tipar parâmetros e retornos de funções/métodos
function createUser(name: any, bio: string, birthdate: string | Date): string | number {
    return ""
}

const user = createUser(1,'2','3')

/*
No caso de uma função assíncrona, podemos tipar o retorno:
async function createUser(name: any, bio: string, birthdate: string | Date)Promise: <string> {
    return ""
}
*/

function digiteUser(name: any, bio: string, birthdate: string | Date): void {}

class User {
    constructor(name: string | object, age: number) {

    }
}

//Interface: definir a tipagem de um objeto
interface Pessoa {
    nome: string
    dataNascimento: Date
    cpf?: string
}

const pessoa1: Pessoa = {nome: "", dataNascimento: new Date()}
