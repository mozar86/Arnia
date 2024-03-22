
interface IPost {
    // Definição de uma interface chamada IPost que descreve a estrutura de um post.
    id: string 
    author: string 
    content: string 
    createdAt: Date 
    likes: number 
}

class Post {
    // Definição de uma classe chamada Post que implementa a estrutura definida na interface IPost.
    id: string 
    author: string 
    content: string 
    createdAt: Date 
    likes: number 
    constructor(data: IPost) {
        // Método construtor da classe Post que inicializa os atributos com os valores fornecidos.
        this.id = data.id 
        this.author = data.author 
        this.content = data.content 
        this.createdAt = new Date() 
        this.likes = data.likes 
    }
}

export { IPost, Post }
// Exporta a interface IPost e a classe Post para que possam ser utilizadas em outros arquivos.
