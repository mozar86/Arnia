#### Arnia BNB

A Arnia BNB é uma aplicação de reserva de hotéis fictício, que será realizada como Projeto Final do Módulo 2



### Entidades

## Booking: Representa uma reserva de quarto em um hotel. Atributos:

- id: Identificador único da reserva.
- checkin_date: Data de check-in da reserva.
- checkout_date: Data de checkout da reserva.
- guests: Quantidade de hóspedes.
- id_room: Identificador do quarto reservado.
- id_guest: Identificador do hóspede que fez a reserva.
- status: Status da reserva (por exemplo, "confirmada", "cancelada", "em andamento", "concluída").

## Room: Representa um quarto do hotel. Atributos:

- id: Identificador único do quarto.
- number: Número do quarto.
- type: Tipo de quarto (por exemplo, "individual", "duplo", "suíte").
- guest_capacity: Capacidade máxima de hóspedes no quarto.
- daily_rate: Valor da diária do quarto.
- photo: Foto do quarto.
- status: Status do quarto (por exemplo, "disponível", "ocupado", "em manutenção").

## Guest: Representa um hóspede do hotel. Atributos:

- id: Identificador único do hóspede.
- name: Nome completo do hóspede.
- cpf: CPF do hóspede.
- phone_number: Telefone do hóspede.
- email: Email do hóspede.
- password: Senha do hóspede. Deve ser armazenada criptografada.
- bookings: Booking[]

## Admin: Representa o gerente do hotel. Atributos:

- email: Email do gerente.
- password: Senha do gerente. Deve ser armazenada criptografada.

 

## Relações entre Entidades:

- Uma reserva está associada a um quarto e a um hóspede.
- Um quarto pode ter várias reservas ao longo do tempo.
- Um hóspede pode fazer várias reservas em diferentes quartos.



### Casos de Uso

## 1.Cadastro do Hóspede

- Não permitir o cadastro se um usuário com o mesmo e-mail já existir
- Criptografar a senha antes de armazenar no banco de dados

## 2.Login do Hóspede

- Informações necessárias: e-mail e senha
- Não gerar um token se não existir um usuário com o e-mail fornecido
- Não gerar um token se a senha enviada não for compatível com a do banco de dados
- Gerar um token e retornar se as credenciais estiverem corretas

## 3.Login de Gerente 
# Obs: O cadastro do gerente deve ser feito via banco de Dados

- Informações necessárias: e-mail e senha
- Não gerar um token se não existir um admin com o e-mail fornecido
- Não gerar um token se a senha enviada não for compatível com a do banco de dados
- Gerar um token e retornar se as credenciais estiverem corretas

## 4.Cadastro de Quarto (ROTA PRIVADA - ADMIN)

- Informações necessárias: number, type, gest_capacity, daily_rate e photo. O status inicial é sempre disponível.
- Não permitir o envio se o usuário que está executando a ação não for um administrador

## 5.Alterar Status Quarto 
# (Check in, checkout e manutenção) (ROTA PRIVADA - ADMIN)

- Rota para alterar o status do quarto entre: "disponível", "ocupado", "em manutenção"
- Não permitir o envio se o usuário que está executando a ação não for um administrador

## 6.Listar Todos os Quartos disponíveis

- Deve listar os quartos com status "disponível"

## 7.Listar Todos os Quartos disponíveis por data

- Deve listar os quartos com status "disponível".
- Deve listar apenas os quartos que não possuírem reserva "confirmada" ou "em andamento" na data especificada.

## 8.Reservar quarto 
# (ROTA PRIVADA)

- Deve ser informado: datas de checkin e checkout, quantidade de guests, id_room. O status inicial deve ser "confirmada"
- Verificar se já não existe uma reserva no intervalo solicitado
- Verificar se a quantidade de guests é menor ou igual a capacidade do quarto
- Deve retornar a reserva com o id cadastrado

## 9.Listar todas as reservas para o hóspede 
# (ROTA PRIVADA)

- Deve retornar um array com todas as reservas feitas pelo hóspede logado.

## 10.Cancelar reserva 
# (ROTA PRIVADA)

- Deve ser informado: id da reserva.
- O status atual da reserva não pode estar como "em andamento"



### Link do projeto: 

https://docs.google.com/presentation/d/1QJ3pK3v0RQb7vWuZasU66hsP_6iS1qNBzTmMnqemOzk/edit#slide=id.p14



### Link da documentação do projeto: 

https://gist.github.com/vtpa/68b723b4d56f854c4b868718cf30eb1b


### Link das sprints do projeto: 

https://gist.github.com/vtpa/1ede94a94fc5d4eb31047a4a65f49cd0


### Tasks

## 1ª Sprint (De 03 a 09/05)
# Sprint Inicial

 [ x ] Setup inicial - Estrutura de pastas e arquivos básicos
 [ x ] Criação de repositório no Github
 [ x ] Configurações de Banco de Dados
 [ x ] Criação de um servidor básico no Express
 [ x ] Criação do middleware de validação
 [ x ] Criar entidades (interfaces)
 [ x ] Criar models

 [ x ] 1. Cadastro do Hóspede - POST /guests
         - Criptografar a senha (Provider de criptografia)

 [ x ] 2. Login do Hóspede - POST /guests/auth
         - Comparar senhas criptografada com senha da requisição
         - Utilizar JWT (Provider de Token)
         - Como diferenciar um token de hóspede de um token de gerente? 🤔

 [ x ] 3. Login de Gerente - POST /admin/auth
         - Cadastrar um gerente no banco de dados
         - Vale a pena ter dois middleware diferentes pra algo tão parecido??? 🤔

## 2ª Sprint (De 10 a 16/05)
# Sprint Intermediária 01

 [ x ] Featuries Básicas

 [ x ] 4. Cadastro de Quarto - (ROTA PRIVADA - ADMIN)

## Sprint 03 (De 17 a 23/05)
# Sprint intermediária 02 - Features avançadas

 [ x ] 5. Alterar Status Quarto (Check in, checkout e manutenção) (ROTA PRIVADA - ADMIN)

 [ x ] 6. Listar Todos os Quartos disponíveis

 [ x ] 7. (OPCIONAL) Listar Todos os Quartos disponíveis por data

 [ x ] 8. Reservar quarto (ROTA PRIVADA)

 [ x ] 9. (OPCIONAL) Listar todas as reservas para o hóspede (ROTA PRIVADA)

 [ x ] 10. Cancelar reserva (ROTA PRIVADA)

## Sprint 04 (De 24/05 a 02/06)
# Sprint final

 [ ] Deploy 🚀