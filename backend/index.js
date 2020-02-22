import express from 'express';
import cors from 'cors'; 

const app = express();

app.use(cors());
app.use(express.json());


app.route('/:codigo')
    .get(function (req,res){
        res.redirect('/operacoes/'+ req.params.codigo);
       // app.use('/viagens/'+ req.params.codigo,viagens)
})

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000'),
);