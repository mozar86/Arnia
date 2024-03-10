// [ 'carlos', 'augusto', 'mozar', 'jose', 'elizabete' ]
// - Deve ser possível cadastrar uma tarefa, fornecendo as seguintes informações: título, descrição, data de criação, data de conclusão (opcional) e prioridade.
// - Deve ser possível buscar uma tarefa pelo título.
// - Deve ser possível listar todas as tarefas de um determinado usuário.
// - Deve ser possível atualizar as informações de uma tarefa, fornecendo o seu ID.
// - Deve ser possível marcar uma tarefa como concluída, fornecendo o seu ID.
// - Deve ser possível excluir uma tarefa pelo seu ID.
// - Deve ser possível cadastrar um usuário, fornecendo as informações: nome e email.
// - Deve ser possível buscar um usuário pelo seu email.
// - Deve ser possível listar todas as tarefas de um usuário, incluindo as tarefas concluídas e as pendentes.

/*Tarefa {
    título
    descrição
    data de criação
    data de conclusão
    prioridade
    usuario
  }*/

// Usuário {
//  nome
//  email
//}

class Usuario {
    constructor(nome, email){
        this.nome = nome
        this.email = email
    }
}

class Tarefa{
    constructor(data){
        this.id = new Date().getTime()
        this.titulo = data.titulo
        this.descricao = data.descricao
        this.dataCriacao = new Date()
        this.dataConclusao = null
        this.prioridade = data.prioridade
        this.usuario = null
    }
}

class TarefaRepository {
    database = []
    
    criarTarefa(titulo,descricao, prioridade ){
        const novaTarefa = new Tarefa({titulo: titulo, descricao: descricao, prioridade: prioridade})
        this.database.push(novaTarefa)
        return novaTarefa
    }
    
    buscarTarefaPeloNome(titulo){
        return this.database.find((tarefa) => tarefa.titulo== titulo)
    }

    cadastrarUsuarioNaTarefa(idTarefa, usuario){
        const criarUsuario = new Usuario(usuario.nome, usuario.email)
        const tarefa = this.database.find((tarefa) => tarefa.id == idTarefa)
        tarefa.usuario = criarUsuario
        return tarefa
    }
}

const repositorio = new TarefaRepository()
const tarefa1 = repositorio.criarTarefa('titulo', 'descricao', 0)
repositorio.criarTarefa('titulo1', 'descricao1', 1 )
const respostaTarefa = repositorio.buscarTarefaPeloNome('titulo')

repositorio.cadastrarUsuarioNaTarefa(tarefa1.id, {nome: "elizabete", email: "eliza@asasas.com"})
console.log(repositorio.buscarTarefaPeloNome(tarefa1.titulo))
