import {criaClient} from './banco'

class tag{
    config = {
        //tabela e colunas
    }
    readbyid(){

    }
    insertInto(tag){
        let query = `insert into ${this.config} values ${tag}`

    }
}

module.exports = {tag}