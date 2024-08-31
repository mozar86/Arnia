### PROJETO EM ATUALIZAÇÃO, podendo sofrer atualizações para resolução de possíveis erros. Foi bastante desafiador concluir em tão pouco tempo, mas dei meu melhor na disponibilidade que tinha, inclusive obtendo novos conhecimentos. Apreciem meu trabalho, espero que gostem!

### Serviço de Leitura de Imagens

Este projeto implementa um serviço de back-end para leitura de imagens utilizando IA. O sistema é capaz de receber imagens de medidores de água ou gás, enviar essas imagens para a API do Google Gemini para extração de dados e, em seguida, armazenar os valores retornados em um banco de dados. Também é possível confirmar ou corrigir essas leituras, bem como listar as medições realizadas por clientes específicos.

## Endpoints

# 1. Upload de Medição

Método: POST
Rota: /api/measures/upload
Descrição: Recebe uma imagem em base64, consulta a API do Google Gemini para obter a leitura, e armazena os dados no banco de dados.

# 2. Confirmação de Medição

Método: POST
Rota: /api/measures/confirm
Descrição: Confirma ou corrige o valor de uma medição existente e atualiza o banco de dados.

# 3. Listagem de Medições

Método: GET
Rota: /api/measures
Descrição: Lista todas as medições de um determinado cliente, com a opção de filtrar por tipo de medição (água ou gás).

## Tecnologias Utilizadas

TypeScript
Node.js
Express
Yup para validação
Jest para testes
Docker para containerização
Git e GitHub para controle de versão
Configuração e Execução do Projeto
Pré-requisitos
Node.js (versão LTS recomendada)
Docker
Git
Conta na Google Cloud para acesso à API do Google Gemini