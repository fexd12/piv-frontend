<template>
  <section class="content">
    <!-- GitHub hint -->
    <div class="row">
      <!-- <div class="col-xs-12">
        <alert :dismissible="true"
               type="success"
               :iconClasses="['fa', 'fa-check']"
               title="CoPilot is open source!">
          <span>Click on icon to check it out on github.</span>
          <a href="https://github.com/misterGF/CoPilot" target="_blank">
            <i class="fa fa-github fa-2x"></i>
          </a>
        </alert>
      </div>-->

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
      <!-- /.col -->
      <!-- <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-red"
                  :icon-classes="['fa', 'fa-google-plus']"
                  text="Likes"
                  number="41,410"></info-box>
      </div>-->
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class="clearfix visible-sm-block"></div>

      <!-- <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-green"
                  :icon-classes="['ion', 'ion-ios-cart-outline']"
                  text="Sales"
                  number="760"></info-box>
      </div>-->
      <!-- /.col -->
      <!-- <div class="col-md-3 col-sm-6 col-xs-12">
        <info-box color-class="bg-yellow"
                  :icon-classes="['ion', 'ion-ios-people-outline']"
                  text="New Members"
                  number="2,000"></info-box>
      </div>-->
      <!-- /.col -->

      <!-- /.row -->

      <div class="col-12">
        <div class="box">
          <div class="box-header with-border">
            <h3 class="box-title"></h3>
            <div class="box-body">
              <div class="row">
                <!-- <p class="text-center">
                  <strong>Web Traffic Overview</strong>
                </p>
                <canvas id="trafficBar"></canvas> -->
                <template v-for="list in salas.length">
                  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-bind:key="list">
                    <b-card-group>
                      <b-card :bg-variant="salas[list-1].status === 's' ? 'success':'danger'" text-variant="white" header="sala" class="text-center">
                        <b-card-text v-text="salas[list-1].nome">
                        </b-card-text>
                      </b-card>
                    </b-card-group>
                  </div>
                </template>
              </div>
              <!-- <hr class="d-block d-sm-none-block"> -->
              <!-- <div class="col-lg-6 col-12">
                <p class="text-center">
                  <strong>Language Overview</strong>
                </p>
                <canvas id="languagePie"></canvas>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- /.row -->

      <!-- Main row -->
      <!-- <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-yellow"
                          :icon-classes="['ion', 'ion-ios-pricetag-outline']"
                          text="Inventory"
                          number="5,200"
                          :progress="50"
                          description="50% increase since May"></process-info-box>
      </div>-->
      <!-- /.col -->
      <!-- <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-green"
                          :icon-classes="['ion', 'ion-ios-heart-outline']"
                          text="Mentions"
                          number="92,050"
                          :progress="20"
                          description="20% increase in 30 days"></process-info-box>
      </div>-->
      <!-- /.col -->
      <!-- <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-red"
                          :icon-classes="['ion', 'ion-ios-cloud-download-outline']"
                          text="Downloads"
                          number="114,381"
                          :progress="70"
                          description="70% increase since yesterday"></process-info-box>
      </div>-->
      <!-- /.col -->
      <!-- <div class="col-md-3 col-sm-6 col-xs-12">
        <process-info-box color-class="bg-aqua"
                          :icon-classes="['ion', 'ion-ios-chatbubble-outline']"
                          text="Direct Messages"
                          number="163,921"
                          :progress="40"
                          description="40% increase compared to last year"></process-info-box>
      </div>-->
      <!-- /.col -->
      <!-- </div> -->
      <!-- /.row -->
    </div>
  </section>
  <!-- /.content -->
</template>

<script>
import Chart from "chart.js";
import Alert from "../widgets/Alert";
import InfoBox from "../widgets/InfoBox";
import ProcessInfoBox from "../widgets/ProcessInfoBox";

export default {
  name: "Dashboard",
  components: {
    Alert,
    InfoBox,
    ProcessInfoBox
  },
  data: () => {
    return {
      usuarios: {
        soma: ""
      },
      tags: {
        soma: ""
      },
      salas:[]
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
    async carregaSala(){
      this.salas.splice(0, this.salas.length);
      let dados = await this.$http.get(`${this.$baseUrl}/salas`, {});
      this.salas.push(...dados.data);
      // console.log(this.salas);
    }
  },
  computed: {
    // coPilotNumbers() {
    //   return this.generateRandomNumbers(12, 1000000, 10000);
    // },
    // personalNumbers() {
    //   return this.generateRandomNumbers(12, 1000000, 10000);
    // },
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
