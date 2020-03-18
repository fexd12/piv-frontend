<template>
  <b-form>
    <b-form-group id="input-group-1" label="Food:" label-for="input-1">
      <b-form-select id="input-1" :options="users" required />
    </b-form-group>

    <b-form-group id="input-group-2" label="Food:" label-for="input-2">
      <b-form-select id="input-2" :options="tags" required />
    </b-form-group>

    <b-form-group id="input-group-1" label="Food:" label-for="input-3">
      <b-form-select id="input-3" :options="acessos" required />
    </b-form-group>
    
  </b-form>
    
</template>

<script>
export default {
  name: 'UsersTags',
  props: ['value'],
  data: () => {
    return {
      users: [],
      tags: [],
      acessos: []
    }
  }
}

</script>
