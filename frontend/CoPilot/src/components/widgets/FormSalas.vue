<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="Nome da Sala:" label-for="input-1">
        <b-form-input v-model="content.nome" id="input-1" @input="handleInput" required />
      </b-form-group>

      <b-form-group id="input-group-2" label="Quantidade de Cadeiras:" label-for="input-2">
        <b-form-input v-model="content.quantidade" id="input-2" @input="handleInput" required />
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "SalasForm",
  props: ["value"],
  data() {
    return {
      content: {
        id: this.value.id,
        nome: this.value.nome,
        quantidade: this.value.quantidade
      }
    };
  },
  methods: {
    handleInput() {
      let retorno = {
        id: this.content.id,
        nome: this.content.nome,
        quantidade: this.content.quantidade
      };
      this.$emit("input", retorno);
    }
  }
};
</script>

<style>
</style>