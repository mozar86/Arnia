const repository = []
let idCount = 0

// Crie uma funçao que adiciona um carro(Object) ao repository e retorna o objeto salvado
// Parametros: modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function createCar(modelo, cor, ano) {
    
    const car = {
        id: idCount++,
        modelo,
        cor,
        ano,
        registradoEm: new Date()
    }
    repository.push(car)

    return car
}

const carro1 = createCar('stepway', 'cinza', 2019)
const carro2 = createCar('stepway', 'cinza', 2019)

console.log(repository)

// Crie uma funçao que recebe um id por parametro e retorna o objeto referente
// Parametros: id(string) 
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function findCarById(id) {
    return repository.find((car) => car.id === id)
}

// Crie uma funçao que retorna todos os carros
// Returno(Array): (id(string), modelo(string), cor(string), ano(number), createdAt(Date))[]
function findAllCars() {
    return repository
}

// Crie uma funçao que atualiza um carro(Object) no repository e retorna o objeto atualizado
// Parametros: id(string), modelo(string), cor(string), ano(number)
// Returno(Objeto): id(string), modelo(string), cor(string), ano(number), createdAt(Date)
function updateCarById(id, modelo, cor, ano) {
    const car = repository.find((car) => car.id === id)
    const newCar = {modelo, cor, ano}
    Object.assign(car, newCar)
    return car
}
console.log(findAllCars())

updateCarById(1, 'Sandero', 'Preto', 2015)

console.log(findAllCars())

// Crie uma funçao que remove um carro do repositorio
// Parametros: id(string)
function deleteCarById(id) {
    const index = repository.findIndex((car) =>  car.id === id)
    if(index < 0) {
        return 'Carro não encontrado'
    } 

    repository.splice(index, 1)
}

console.log('Antes', findAllCars())

deleteCarById(0)

console.log('Depois', findAllCars())

