<template>
  <div>
    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Agendamento de Salas</h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <b-form class="row">
              <b-form-group
                id="input-group-1"
                label="Data do Agendamento:"
                label-for="input-1"
                class="col"
              >
                <Datetime
                  v-model="ativoAtual.data"
                  type="date"
                  format="dd-MM-yyyy"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione a data"
                  :week-start="7"
                ></Datetime>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Horário de início:"
                label-for="input-2"
                class="col"
              >
                <Datetime
                  v-model="ativoAtual.horaInicio"
                  type="time"
                  format="HH:mm"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione o horario de inicio"
                ></Datetime>
              </b-form-group>

              <b-form-group
                id="input-group-3"
                label="Horário de término:"
                label-for="input-3"
                class="col"
              >
                <Datetime
                  v-model="ativoAtual.horaFinal"
                  type="time"
                  format=" HH:mm"
                  value-zone="America/Sao_Paulo"
                  placeholder="Selecione o horario de termino"
                ></Datetime>
              </b-form-group>
            </b-form>

            <div class="form-group center">
              <b-button type="submit" class="btn btn-primary" v-on:click="carregaTabela">
                <span>Buscar</span>
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Salas Disponíveis</h6>
        <div class="media text-muted pt-3">
          <div class="container">
            <b-table
              hover
              fixed
              responsive="true"
              head-variant="light"
              :items="ativos"
              :fields="fields"
              @row-clicked="(item,index,event)=>beforeSalvar(item)"
            ></b-table>
          </div>
        </div>
      </div>
    </main>

    <main role="main" class="container">
      <div class="my-3 p-3 bg-white rounded shadow-sm">
        <h6 class="border-bottom border-gray pb-2 mb-0">Usuarios</h6>
        <div class="media text-muted pt-3">
          <b-form class="row">
            <b-form-group id="input-group-4" label="Usuario:" label-for="input-4" class="col">
              <b-form-select
                class="mb-3 form-control"
                v-model="ativoAtual.name"
                id="input-4"
                :options="users"
                required
              ></b-form-select>
            </b-form-group>
          </b-form>
        </div>
        <div class="form-group right">
          <b-button type="submit" class="btn btn-primary" v-on:click="salvar">Salvar</b-button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import moment from "moment";
import { Datetime } from "vue-datetime";

import "vue-datetime/dist/vue-datetime.css";

export default {
  name: "Agendamento",
  components: {
    Datetime
  },
  data: () => {
    return {
      ativoAtual: {
        data: "",
        horaInicio: "",
        horaFinal: "",
        name: "",
        sala: ""
      },
      ativos: [],
      fields: [
        {
          key: "nome",
          label: "Nome da Sala"
        },
        {
          key: "quantidade",
          label: "Quantidade de Cadeiras"
        }
      ],
      users: [{ value: null, text: "Selecione um usuario" }]
    };
  },
  methods: {
    async carregaTabela() {
      this.ativos.splice(0, this.ativos.length);
      this.ativoAtual.horaInicio = moment(this.ativoAtual.horaInicio).format(
        "HH:mm"
      );
      this.ativoAtual.horaFinal = moment(this.ativoAtual.horaFinal).format(
        "HH:mm"
      );
      this.ativoAtual.data = moment(this.ativoAtual.data).format("DD-MM-YYYY");
      let payload = {
        hora_inicio: this.ativoAtual.horaInicio,
        hora_final: this.ativoAtual.horaFinal,
        data: this.ativoAtual.data
      };
      try {
        let dados = await this.$http.post(
          `${this.$baseUrl}/salas/status/`,
          payload
        );
        this.ativos.push(...dados.data);
      } catch (error) {
        alert("erro ao inserir");
      }
    },
    async carregaUsuarios() {
      // this.users.splice(0, this.users.length);
      let dados = await this.$http.get(`${this.$baseUrl}/userstag/`, {});
      dados.data.forEach(element => {
        this.users.push({
          value: element.id,
          text: element.name
        });
      });
    },
    async salvar() {
      // console.log(x)
      let payload = {
        data: this.ativoAtual.data,
        horaInicio: this.ativoAtual.horaInicio,
        horaFinal: this.ativoAtual.horaFinal,
        name: this.ativoAtual.name,
        sala: this.ativoAtual.sala
      };
      try {
        await this.$http.post(`${this.$baseUrl}/agendamento/`, payload);
        await this.carregaTabela();
      } catch (err) {
        alert("erro ao inserir");
      }
    },
    beforeSalvar(x) {
      this.ativoAtual.sala = x.id;
    }
  },
  async mounted() {
    await this.carregaUsuarios();
  }
};
</script>

<style>
</style>