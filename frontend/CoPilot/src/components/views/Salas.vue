<template>
  <div>
    <div class="container">
      <b-button class="btn btn-primary" v-b-modal.criaSala>
        <span>Nova Sala</span>
      </b-button>
    </div>

    <b-modal
      id="criaSala"
      title="Nova Sala"
      ok-title="Salvar"
      cancel-title="Cancelar"
      @show="beforeSala"
      @ok="saveSala"
    >
      <SalasForm v-model="ativoAtual" />
    </b-modal>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <div class="media text-muted pt-3">
          <div class="container">
            <!-- No data message -->
            <!-- Sala list -->
            <div class="info-box-text">
              <b-table
                class="table table-bordered dataTable"
                hover
                fixed
                head-variant="light"
                :items="ativos"
                :fields="fields"
              ></b-table>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import SalasForm from "../widgets/FormSalas";
export default {
  components: {
    SalasForm
  },
  data: () => {
    return {
      ativoAtual: {
        id: "",
        nome: "",
        quantidade: ""
      },
      ativos: [],
      fields: [
        {
          key: "nome",
          label: "nome"
        },
        {
          key: "quantidade",
          label: "quantidade"
        }
      ]
    };
  },
  methods: {
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      let dados = await this.$http.get(`${this.$baseUrl}/salas/`, {});
      this.ativos.push(...dados.data);
    },
    beforeSala() {
      this.ativoAtual.nome = "";
      this.ativoAtual.quantidade = "";
    },
    async saveSala() {
      let payload = {
        nome: this.ativoAtual.nome,
        quantidade: this.ativoAtual.quantidade
      };
      try {
        await this.$http.post(`${this.$baseUrl}/salas/`, payload);
        await this.carregaTabela();
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
</style>