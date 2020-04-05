<template>
  <b-form>
    <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
      <b-form-input v-model="content.name" id="input-1" @input="handleInput" required />
    </b-form-group>

    <b-form-group id="input-group-2" label="Email:" label-for="input-2">
      <b-form-input v-model="content.email" id="input-2" @input="handleInput" required />
    </b-form-group>
  </b-form>
</template>

<script>
export default {
  name: "UsersForm",
  props: ["value"],
  data() {
    return {
      content: {
        id: this.value.id,
        name: this.value.name,
        email: this.value.email
      }
    };
  },
  methods: {
    handleInput() {
      let retorno = {
        id: this.content.id,
        name: this.content.name,
        email: this.content.email
      };
      this.$emit("input", retorno);
    }
  }
};
</script>
