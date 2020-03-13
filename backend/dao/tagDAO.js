import {criaClient} from './db'

class tagDAO{
    constructor() {
        this.config = { 
            table: 'tags',
            sequence: 'taq_sequence',
            fields: [
              'id',
              'id_users',
              'tag',
              'state',
              'created_at',
              'update_at',
            ],
            pk: 'id'
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
        let _query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} WHERE ${this.config.pk} = ${id}`;
        let result = await client.query(_query);
        await client.end();

        if(result > 0){
            return result
        }else{
            return undefined
        }

    }

    async insertInto(tag){
        // let query = `insert into ${this.config.table} (${this.config.fields.join(',')}) values (${this.config.fields.map(q=>'?').join(',')})`;
        const client = criaClient();
        await client.connect();

        let _query = `INSERT INTO ${this.config.table} (id, id_users, tag) values (nextval('tag_sequence'),2,${tag})`;
        await client.query(_query);
        await client.end();
        return true

    }
}

export {tagDAO};