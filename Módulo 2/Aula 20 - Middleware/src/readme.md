# Instagram

## Entidade

User {
  name: String,
  email: String,
  password: String,
  photo: ObjectId,
}

Photo {
  filename: String,
  mimetype: String,
}

Post {
  content: String
  user: ObjectId
  likes: ObjectId[]
  comments: ObjectId[]
} 

Like {
  user: ObjectId
}

Comment {
  content: String
}

## Funcionalidades

1. **Cadastro de Usuário:**
   - Um novo usuário se cadastra fornecendo um nome, um endereço de e-mail e uma senha.
   - Os dados do usuário são validados para garantir que o e-mail seja único.
   - Um registro do usuário é criado no banco de dados com as informações fornecidas.

2. **Login de Usuário:**
   - Um usuário registrado insere seu endereço de e-mail e senha.
   - O sistema verifica se as credenciais estão corretas e autentica o usuário.
   - Se a autenticação for bem-sucedida, o usuário recebe o token JWT

3. **Upload de Foto de Perfil:**
   - Um usuário autenticado pode fazer o upload de uma foto de perfil.
   - A foto é armazenada no banco de dados como um objeto com um nome de arquivo e um tipo de mídia.
   - A referência da foto é vinculada ao perfil do usuário.

4. **Publicação de um Novo Post:**
   - Um usuário autenticado cria uma nova postagem.
   - A postagem contém um texto descritivo e pode ser vinculada ao usuário que a criou.
   - A contagem de curtidas é inicializada como zero para a nova postagem.

5. **Curtir um Post:**
   - Um usuário autenticado pode "curtir" um post de outro usuário.
   - A contagem de curtidas no post é incrementada em um.
   - O sistema registra que o usuário atual curtiu o post.

6. **Visualização de um Perfil de Usuário:**
   - Qualquer usuário pode visualizar o perfil de outro usuário.
   - O perfil exibe o nome, a foto de perfil e as postagens do usuário.
   - As postagens podem ser exibidas em ordem cronológica.

7. **Atualização de Dados do Usuário:**
   - Um usuário autenticado pode atualizar seu nome, endereço de e-mail ou senha.
   - As alterações são validadas e atualizadas no banco de dados.

8. **Exclusão de Postagem:**
   - Um usuário autenticado pode excluir uma de suas próprias postagens.
   - A postagem é removida do banco de dados, e a contagem de curtidas é atualizada, se necessário.