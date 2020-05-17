<template>
  <div>
    <div>
      <b-button class="btn btn-primary" v-b-modal.criaUserTag>
          <span>Adicionar</span>
      </b-button>
    </div>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        
        <b-modal
          id="criaUserTag"
          title="Vincular tag com usuario"
          ok-title="Salvar"
          cancel-title="Cancelar"
          @show="beforeUsersTags"
          @ok="saveUsersTags"
        >
          <UsersTags v-model="ativoAtual" />
        </b-modal>

        <div class="info-box-text">
          <b-table
            class="table table-bordered dataTable"
            hover
            fixed
            head-variant="light"
            :items="ativos"
            :fields="fields"
          >
          </b-table>

        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UsersTags from "../widgets/UsersTags";

export default {
  name: "Tags",
  components: {
    UsersTags
  },
  data: () => {
    return {
      ativoAtual: {
        name: "",
        tag: "",
        acesso: ""
      },
      ativos: [],
      fields: [
        {
          key: "name",
          label: "nome"
        },
        {
          key: "tag",
          label: "tag"
        },
        {
          key: "acesso",
          label: "tipo acesso"
        }
      ]
    };
  },
  methods: {
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      let dados = await this.$http.get(`${this.$baseUrl}/userstag`, {});
      this.ativos.push(...dados.data);
    },
    beforeUsersTags() {
      this.ativoAtual.name = "";
      this.ativoAtual.tag = "";
      this.ativoAtual.acesso = "";
    },
    async saveUsersTags() {
      let payload = {
        name: this.ativoAtual.name,
        tag: this.ativoAtual.tag,
        acesso: this.ativoAtual.acesso
      };
      try {
        if(payload.acesso !=null){
          await this.$http.post(`${this.$baseUrl}/userstag/`, payload);
          await this.carregaTabela();
        }else{
          alert("inserir um tipo de acesso valido");
        }
      } catch (err) {
        alert("erro ao inserir");
      }
    }
  },
  async mounted() {
    await this.carregaTabela();
  }
};
</script>

<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

/* 
@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: '\f0dc';
}

table.dataTable thead .sorting_asc:after {
  content: '\f0dd';
}

table.dataTable thead .sorting_desc:after {
  content: '\f0de';
} */
</style>
