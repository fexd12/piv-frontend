<template>
  <b-form>
    <b-form-group id="input-group-1" label="Usuario:" label-for="input-1">
      <b-form-select v-model="content.name" id="input-1" :options="users" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-2" label="Tag:" label-for="input-2">
      <b-form-select v-model="content.tag" id="input-2" :options="tags" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-1" label="Acesso:" label-for="input-3">
      <b-form-select v-model="content.acesso" id="input-3" :options="acessos" @input="handleInput" required />
    </b-form-group>
    
  </b-form>
    
</template>

<script>
import axios from 'axios'
export default {
  name: 'UsersTags',
  props: ['value'],
  data () {
    return {
      content:{
        id:this.value.id,
        name: this.value.name,
        tag: this.value.tag,
        acesso: this.value.acesso
      },
      users: [{value:null,text:'Selecione um usuario'}],
      tags: [{value:null,text:'Selecione uma tag'}],
      acessos: [{value:'1',text:'acesso full'},
      {value:'0',text:'acesso restrito'},
      {value:null,text:'selecione um acesso'}]
    }
  },
  methods:{
    async carregaLista(){
      //this.users.splice(0, this.users.length)
      let dados1 = await this.$http.get(`${this.$baseUrl}/users/userstag`)
      dados1.data.forEach(element => {
        this.users.push({
        value:element.id,
        text:element.name
        })
      })
      //this.tags.splice(0, this.tags.length)
      let dados2 = await this.$http.get(`${this.$baseUrl}/tag/userstag`)
      dados2.data.forEach(element => {
        this.tags.push({
        value:element.id,
        text:element.tag
        })
      });
    },
    handleInput(){
      let retorno = {
        id:this.content.id,
        name: this.content.name,
        tag: this.content.tag,
        acesso: this.content.acesso
      }
      this.$emit("input",retorno)
    }
    
  },
  async mounted(){
    await this.carregaLista()
  }
}

</script>
