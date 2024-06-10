# TO-DO

## Entities

User {
  fullname    String
  email       String Unique
  password    String
}

List {
  title               String
  description         String
  banner_img          String?
  items_completed     Number
  user                User
  items               Item[]
}

Item {
  title   String
  status  String "pending" | "done"
}

## Usecases

[x] - Criar usuário
[x] - Logar com o usuário

[x] - Criar lista personalizada de tarefas
[ ] - Excluir uma lista

[ ] - Criar tarefa em uma lista
[ ] - Completar uma tarefa
[ ] - Editar o title de uma tarefa
[ ] - Excluir uma tarefa