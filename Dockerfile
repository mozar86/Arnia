# Usar imagem base do Node
FROM node:18

# Criar diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos de configuração
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar código da aplicação
COPY . .

# Construir o projeto TypeScript
RUN npm run build

# Expor a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD [ "npm", "start" ]
