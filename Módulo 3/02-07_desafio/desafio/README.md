### Exercício e-commerce

Crie um aplicativo React simples que simula o controle de estoque de um e-commerce. O aplicativo deve ter as seguintes funcionalidades:

# 1 
Exibir uma lista de produtos:

Cada produto deve ter nome, descrição, preço e quantidade em estoque.
A lista deve ser atualizada dinamicamente à medida que os produtos são adicionados, removidos ou modificados.

# 2 
Adicionar novos produtos:

Permitir ao usuário inserir o nome, descrição, preço e quantidade inicial do novo produto.
Validar as entradas do usuário (nome, preço e quantidade devem ser preenchidos).
Adicionar o novo produto à lista de produtos no estado.

# 3 
Remover produtos:

Permitir ao usuário remover um produto da lista selecionando-o.
Exibir uma mensagem de confirmação antes de remover o produto. (window.confirm)
Remover o produto selecionado da lista de produtos no estado.

# 4 
Atualizar a quantidade de um produto:

Permitir ao usuário editar a quantidade em estoque de um produto selecionado.
Validar a nova quantidade (deve ser um número inteiro positivo).

# 5 
Implementar tema claro ou escuro utilizando o useContext()

# 6
Incluir no título de cada aba de produtos, a quantidade de produtos total para aquela aba em específico utilizando o useEffect()

# 7
Implementar um sistema de busca para filtrar produtos por nome ou descrição.
Exibir um alerta quando um produto estiver com estoque baixo. (produto.qtd < 5)

# 8
Separar produtos pelas seguintes características: Comida, Bebida, Não comestível
Dica: Colocar atributo ao objeto ou identificar na sua descrição.

# 9
Criar um arquivo de rotas, com 2 rotas ao todo. Página inicial onde deverá ficar todos os produtos listados com suas características. E Novo Produto, que será a página que ficará o seu formulário de cadastro de um novo produto.
Layout e formatação é livre.

# 10 
Desafio

# 10.1
Trocar o window.confirm da confirmação de remoção de produto para um modal personalizado. (Não usar biblioteca)

# 10.2
Adicionar um filtro tipo select onde podemos filtrar pelas características do produto (comida, bebida, etc) <= isso você decide quais características colocar.

# 10.3
Cada produto deverá ter um valor para compra. Você iniciará sua carteira com 100 “moedas”,  ao “adicionar” um produto, sua carteira irá reduzir o total subtraindo o valor do produto em questão. a função “remover” deverá ser função “vender” e cada venda não poderá te dar um lucro maior do que 20% do valor total daquele produto.

# 10.4 
Ao clicar para vender deverá exibir o modal de confirmação de venda e nele você deverá decidir quantos produtos você irá vender. (Não poderá passar nunca da quantidade que você tem daquele produto em estoque)

# 10.5
Deverá ser feito uma condição de 50% por meio de if else, para quando vender o produto realmente será vendido e o valor irá para sua carteira ou o produto será apenas removido e o valor não será adicionado à sua carteira. (fazer com Math.random).

# 10.6
Para fazer a interação de valores e atualizações em tempo real de valores da carteira, deverá ser utilizado useEffect().


