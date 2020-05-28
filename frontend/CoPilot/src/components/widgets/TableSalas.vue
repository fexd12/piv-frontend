<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <div class="info-box-text">
          <b-table
            hover
            fixed
            responsive="true"
            head-variant="light"
            :items="ativos"
            :fields="fields"
          ></b-table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "TableSalas",
  props: ["value"],
  data: () => {
    return {
      ativos: [],
      content: {
        id: this.value.id
      },
      fields: [
        {
          key:"usuario",
          label:""
        },
        {
          key:"agendamento",
          label:""
        },
        {
          key:"tag",
          label:""
        }
      ]
    };
  },
  methods:{
    async carregaTabela(){
      // this.ativos.splice(0, this.ativos.length);
      // let dados = await this.$http.get(`${this.$baseUrl}/agendamento/${this.content.id}`, {});
      // this.ativos.push(...dados.data);
    }
  },
  async mounted(){
    await this.carregaTabela();
  }
};
</script>

<style>
</style>