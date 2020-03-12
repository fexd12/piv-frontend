import {criaClient} from './db'

class tag{
    constructor() {
        this.config = { 
            table: '',
            sequence: '',
            fields: [
              '',
            ],
            pk: ''
          };
    }

    async readAll(){
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table}`;
        const client = criaClient();
        await client.connect();
        let result = await client.query(_query);

        await client.end();

        return result
    }

    async readbyid(id){
        const client = criaClient();

        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} WHERE ${this.config.pk} = ?`;
        let values=[id];
        let result = await client.query(_query,values);
        await client.end();

        if(result){
            return result
        }else{
            return undefined
        }

    }

    async insertInto(tag){
        // let query = `insert into ${this.config.table} (${this.config.fields.join(',')}) values (${this.config.fields.map(q=>'?').join(',')})`;
        let _query = `INSERT INTO ${this.config.table} (${this.config.fields.join(',')}) values ?`;

    }
}

module.exports = {tag}