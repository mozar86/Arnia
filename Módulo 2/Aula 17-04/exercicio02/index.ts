// Função para buscar um livro pelo título no banco de dados
export function buscarLivroPeloTitulo(titulo: string, database: Array<any>) {
    return database.find(livro => livro.titulo === titulo);
}

// Função para atualizar o ano de publicação de um livro no banco de dados
export function atualizarLivroLancamento(livroId, novoAno: string, database: Array<any>) {
    const indiceLivro = database.findIndex(livro => livro.id === livroId);

    if (indiceLivro === -1) {
        return 'Livro não encontrado';
    }

    database[indiceLivro] = {
        ...database[indiceLivro], ano: novoAno
    };
    return 'Ano do livro atualizado com sucesso';
}

// Função para alterar a disponibilidade de um livro no banco de dados
export function atualizarDisponibilidadeLivro(livroId, novaDisponibilidade: string, database: Array<any>) {
    const disponibilidadeLivro = database.findIndex(livro => livro.id === livroId);

    if (disponibilidadeLivro === -1) {
        return 'Livro não encontrado';
    }

    database[disponibilidadeLivro] = {...database[disponibilidadeLivro], disponibilidade: novaDisponibilidade};
    return 'Disponibilidade de livro atualizada com sucesso';
}

// Função para excluir um livro do banco de dados
export function excluirLivro(livroId, database: Array<any>) {
    const indiceLivro = database.findIndex(livro => livro.id === livroId);

    if (indiceLivro === -1) {
        return 'Livro não encontrado';
    }

    database.splice(indiceLivro, 1);
    return 'Livro deletado com sucesso'
}