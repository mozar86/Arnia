class Paciente {
    
    constructor(nome, dataNascimento) {
        this.id = `pacient_id${new Date().getTime()}`
        this.nome = nome
        this.dataNascimento = dataNascimento
    }
}

class PacientesRepository {
    databasePacientes = []

    create(nome, dataNascimento) {
        const paciente = new Paciente(nome, dataNascimento)
        this.databasePacientes.push(paciente)
        return paciente
    }

    findById(id) {
        return this.databasePacientes.find((paciente) => paciente.id === id)
    }   

    findAll() {
        return this.databasePacientes
    }
}

const PacientesRepository = new PacientesRepository()

const mozar = pacienteRepository.create('Mozar Lima', '16/09/1986')
const carlos = pacienteRepository.create('Carlos Shimanski', '13/04/1998')



