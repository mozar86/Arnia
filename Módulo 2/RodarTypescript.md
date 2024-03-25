
1 - npm init -y
npm install express
npm i typescript ts-node-dev -D
npx tsc --init
2 - npm install typescript ts-node

3 - No arquivo package.json, ir na parte de scripts (ou criá-lo), para criar um comando para executar o arquivo. Exemplo: "start": "node src/index.ts". Depois pra executar, teria que digitar: npm run start

4 - npx tsc --init

5 - npx ts-node local_do_projeto (pode-se criar um atalho para executar esse comando também, no package.json e em scripts, a diferença é que o comando só precisa do npx no terminal)

6 - Ir no package.json, scripts, e inserir um novo atalho para o comando: ts-node-dev --watch --respawn local_do_arquivo. Depois dar o comando: npm run dev:watch no terminal. Obs.: dev:watch pode ser substituído
