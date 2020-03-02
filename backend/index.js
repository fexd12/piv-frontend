import express from 'express';
import cors from 'cors';

import tempo from './api/tempo';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tempo',tempo);

app.get('/', function (req, res) {
    res.send('Hello World!')
});

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000'),
);