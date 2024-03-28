# Sistema de Streaming de Filmes

## Entidade
No contexto de desenvolvimento de software, uma entidade no backend geralmente refere-se a um objeto ou conceito que representa algo do mundo real. No caso de um sistema de streaming, a entidade "Filme" pode ser modelada da seguinte forma:

### Filme
- título (string)
- lançamento (number)
- gênero (string)
- duração (number)
- avaliação (number)
- status ("disponível" ou "indisponível") por padrão "disponível"

## Requisitos
- Deve ser possível cadastrar um filme, passando as informações: título, lançamento, gênero, duração e avaliação.
- Deve ser possível buscar um filme pelo título (LIKE QUERY).
- Deve ser possível buscar os filmes com lançamento maior ou igual ao recebido pelo parâmetro (Greater than or equal QUERY).
- Deve ser possível buscar os filmes com avaliação maior ou igual a um determinado valor (Greater than or equal QUERY).
- Deve ser possível atualizar o status do filme passando o seu ID.
- Deve ser possível deletar um filme pelo ID.

## Hints
1 - Para iniciar um projeto node
```bash
npm init
```

2 - Para instalar o driver do MongoDB
```bash
npm install mongodb
#ou
npm i mongodb
```

3 - Para configurar o MongoDB
```js
const { MongoClient } = require('mongodb');

const client = new MongoClient('a url mongo aqui');
const database = client.db('o nome do banco').collection('o nome da sua coleção/tabela');
```

4 - Funções do MongoClient

**Buscar um filme pelo título (LIKE QUERY)**
```js
database.find({ título: { $regex: 'título', $options: 'i' } });
```

**Buscar os filmes com lançamento maior ou igual a um determinado ano (Greater than or equal QUERY)**
```js
database.find({ lançamento: { $gte: ano } });
```

**Buscar os filmes com avaliação maior ou igual a um determinado valor (Greater than or equal QUERY)**
```js
database.find({ avaliação: { $gte: valor } });
```

**Atualizar o status do filme passando o seu id**
```js
database.updateOne({ _id: id }, { $set: { status: 'status' } });
```

**Deletar um filme pelo id**
```js
database.deleteOne({ _id: id });
```

Essas são as instruções básicas para a criação de um sistema de streaming de filmes com as consultas especificadas usando o MongoDB em Node.js.