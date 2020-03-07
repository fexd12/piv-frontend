import {criaClient} from './banco'

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
        let query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table}`;
    }

    async readbyid(id){
        let query = `SELECT ${this.config.fields.join(',')} FROM ${this.config.table} WHERE ${this.config.pk} = ?`;

    }

    async insertInto(tag){
        // let query = `insert into ${this.config.table} (${this.config.fields.join(',')}) values (${this.config.fields.map(q=>'?').join(',')})`;
        let query = `INSERT INTO ${this.config.table} (${this.config.fields.join(',')}) values ?`;

    }
}

module.exports = {tag}