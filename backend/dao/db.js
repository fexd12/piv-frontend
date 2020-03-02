import {Client} from 'pg'

const options = {
    host: '',
    user: '',
    password: '',
    database: '',
    port:''
};

function CriaClient(){
    return new Client(options)
}

export {
    CriaClient
}