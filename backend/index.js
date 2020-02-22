import express from 'express';
import cors from 'cors';

import tempo from './tempo';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/tempo',tempo);

app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000'),
);