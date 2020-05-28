<template>
  <div>
    <div>
      <b-button class="btn btn-primary" v-b-modal.criaUser>
        <span>Adicionar</span>
      </b-button>
    </div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <b-modal
          id="criaUser"
          title="Novo Usuario"
          ok-title="Salvar"
          cancel-title="Cancelar"
          @show="beforeUsers"
          @ok="saveUsers"
        >
          <UsersForm v-model="ativoAtual" />
        </b-modal>

        <b-modal
          id="editaAtivo"
          :title="'Editar Usuario - ' + ativoAtual.name"
          ok-title="Alterar"
          cancel-title="Cancelar"
          @ok="editarAtivo"
        >
          <UsersForm v-model="ativoAtual" />
        </b-modal>

        <div class="info-box-text">
          <b-table
            hover
            fixed
            responsive="true"
            head-variant="light"
            :items="ativos"
            :fields="fields"
          >
            <template slot="cell(actionDelete)" slot-scope="{ item }">
              <b-button class="btn btn-primary" v-on:click="excluirUser(item)">
                <i class="fa fa-trash"></i>
              </b-button>
            </template>

            <template slot="cell(actionEdit)" slot-scope="{ item }">
              <b-button class="btn btn-primary" v-on:click="beforeEditaUser(item)">
                <i class="fa fa-pencil"></i>
              </b-button>
            </template>
          </b-table>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import UsersForm from "../widgets/UsersForm";
import axios from "axios";

export default {
  name: "Usuarios",
  components: {
    UsersForm
  },
  data: () => {
    return {
      ativoAtual: {
        name: "",
        email: "",
        id: ""
      },
      ativos: [],
      fields: [
        {
          key: "name",
          label: "nome"
        },
        {
          key: "email",
          label: "email"
        },
        {
          key: "actionDelete",
          label: " "
        },
        {
          key: "actionEdit",
          label: " "
        }
      ]
    };
  },
  methods: {
    async excluirUser(ativo) {
      try {
        await this.$http.delete(`${this.$baseUrl}/users/${ativo.id}`);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao excluir ativo");
      }
    },
    beforeEditaUser(ativo) {
      this.ativoAtual = {
        id: ativo.id,
        name: ativo.name,
        email: ativo.email
      };
      this.$root.$emit("bv::show::modal", "editaAtivo");
    },
    async editarAtivo() {
      let payload = {
        id: this.ativoAtual.id,
        name: this.ativoAtual.name,
        email: this.ativoAtual.email
      };
      try {
        await this.$http.put(
          `${this.$baseUrl}/users/${this.ativoAtual.id}`,
          payload
        );
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao atualizar ativo");
      }
    },
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      let dados = await this.$http.get(`${this.$baseUrl}/users`, {});
      this.ativos.push(...dados.data);
    },
    beforeUsers() {
      this.ativoAtual.id = "";
      this.ativoAtual.name = "";
      this.ativoAtual.email = "";
    },
    async saveUsers() {
      let payload = {
        id: this.ativoAtual.id,
        name: this.ativoAtual.name,
        email: this.ativoAtual.email
      };
      try {
        await this.$http.post(`${this.$baseUrl}/users/`, payload);
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
