import express from 'express'
import homeRouter from './routes/index';

const app = express(); //variável armazenando servidor que vai receber as configurações de rotas

app.use(express.json()); //tratar a requisição body e transformar em json

app.use('/home', homeRouter);

app.listen(3000, () => console.log('Servidor rodando na porta 3000!'))//ouvinte para saber o que foi feito com o servidor