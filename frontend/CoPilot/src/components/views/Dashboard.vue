<template>
  <section class="content">
    <div class="row">
      <!-- Info boxes -->
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-yellow']">
              <i :class="['ion', 'ion-ios-people-outline']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{'Usuarios Cadastrados'}}</span>
              <span :class="'info-box-number'">{{usuarios.soma}}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="col-lg-3">
        <template>
          <div class="info-box">
            <span :class="['info-box-icon', 'bg-yellow']">
              <i :class="['ion', 'ion-ios-people-outline']"></i>
            </span>
            <div class="info-box-content">
              <span :class="'text'">{{'Tags cadastradas'}}</span>
              <span :class="'info-box-number'">{{tags.soma}}</span>
            </div>
          </div>
        </template>
      </div>
      <div class="clearfix visible-sm-block"></div>
      <div class="col-12">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title"></h3>
            <div class="box-body">
              <div class="row">
                <b-modal
                  id="tableSala"
                  title="Agendamento"
                  ok-title="Salvar"
                  cancel-title="Cancelar"
                >
                  <TableSalas v-model="salas[list-1]"/>
                </b-modal>
                <template v-for="list in salas.length" >
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-bind:key="list" v-b-modal.tableSala>
                    <b-card-group>
                      <b-card
                        :bg-variant="salas[list-1].status === 's' ? 'success':'danger'"
                        text-variant="white"
                        header="sala"
                        class="text-center"
                      >
                        <b-card-text v-text="salas[list-1].nome"></b-card-text>
                      </b-card>
                    </b-card-group>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.content -->
</template>

<script>
import TableSalas from '../widgets/TableSalas'

export default {
  name: "Dashboard",
  components:{
    TableSalas
  },
  data: () => {
    return {
      usuarios: {
        soma: ""
      },
      tags: {
        soma: ""
      },
      salas:[{
        id:"",
        nome:"",
        status:"",
        quantidade:""
      }]
    };
  },
  methods: {
    async carregaUsuarios() {
      let dados = await this.$http.get(`${this.$baseUrl}/users/all/`, {});
      this.usuarios.soma = dados.data;
    },
    async carregaTags() {
      let dados = await this.$http.get(`${this.$baseUrl}/tag/all/`, {});
      this.tags.soma = dados.data;
    },
    async carregaSala() {
 
      let dados = await this.$http.get(`${this.$baseUrl}/salas`, {});
      this.salas.push(...dados.data);
      this.salas.splice(0,1);
      console.log(this.salas);
    }
  },
  computed: {
    isMobile() {
      return window.innerWidth <= 800 && window.innerHeight <= 600;
    }
  },
  async mounted() {
    await this.carregaUsuarios();
    await this.carregaTags();
    await this.carregaSala();
  }
};
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
