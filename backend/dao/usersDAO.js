import {criaClient} from './db'

class usersDAO{
    
    constructor() {
        this.config = { 
            table: 'users',
            sequence: 'users_sequence',
            fields: [
              'id',
              'name',
              'created_at',
              'update_at'
            ],
            pk: 'id'
          };
    }

    async readAll(){
        let client =  criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table}`;
        let result = await client.query(_query);
        await client.end();
        return result
    }

    async readbyid(id){
        let client = criaClient();
        await client.connect();
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} WHERE ${this.config.pk} = ${id}`;
        let result = await client.query(_query);
        await client.end();
        return result
    }

    async insertInto(tag){
        // let query = `insert into ${this.config.table} (${this.config.fields.join(',')}) values (${this.config.fields.map(q=>'?').join(',')})`;
        let client = criaClient();
        await client.connect();
        let _query = `INSERT INTO ${this.config.table} (${this.config.fields.join(',')}) values ?`;
        await client.query
    }
}

export{usersDAO}