import express  from 'express';
import homeRouter from './routes/index'

const app = express();
app.use(express.json());

app.use('/home',homeRouter);
/*
app.get('/users', (request, response) => {
    const { page, limit } = request.query;

    response.send({ page, limit });
})

app.post("/user", (request, response) => {
    const { name, age, email } = request.body;

    const newUser = {}
    
    response.send({ return: "ok" })
})
*/

app.listen(3000, () => console.log("Servidor rodando na porta 3000!"))