### Exercício

Crie um aplicativo React simples que simula o controle de estoque de um e-commerce. O aplicativo deve ter as seguintes funcionalidades:

# Exibir uma lista de produtos:
Cada produto deve ter nome, descrição, preço e quantidade em estoque.
A lista deve ser atualizada dinamicamente à medida que os produtos são adicionados, removidos ou modificados.

# Adicionar novos produtos:
Permitir ao usuário inserir o nome, descrição, preço e quantidade inicial do novo produto.
Validar as entradas do usuário (nome, preço e quantidade devem ser preenchidos).
Adicionar o novo produto à lista de produtos no estado.

# Remover produtos:
Permitir ao usuário remover um produto da lista selecionando-o.
Exibir uma mensagem de confirmação antes de remover o produto. (window.confirm)
Remover o produto selecionado da lista de produtos no estado.

# Atualizar a quantidade de um produto:
Permitir ao usuário editar a quantidade em estoque de um produto selecionado.
Validar a nova quantidade (deve ser um número inteiro positivo).


## Desafio

.Implementar um sistema de busca para filtrar produtos por nome ou descrição.
Exibir um alerta quando um produto estiver com estoque baixo. (produto.qtd < 5)

.Trocar o window.confirm da confirmação de remoção de produto para um modal personalizado. (Não usar biblioteca)

.Deverá ser possível alterar o valor do produto.

.Separar produtos pelas seguintes características: Comida, Bebida, Não comestível
Dica: Colocar atributo ao objeto ou identificar na sua descrição.

Exemplo de objeto com atributos: 

{
    id:
    nome:
    descricao:
    preco:
    qtd:
    isBebida:
    isComida:
}

.Adicionar um filtro tipo select onde podemos filtrar pelas características do produto (comida, bebida, etc) <= isso você decide quais características colocar.