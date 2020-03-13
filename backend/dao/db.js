import {Client} from 'pg'

function criaClient(){
    return new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'pi_v',
        password: '1234',
        port:5432
    });
}

export {
    criaClient
}