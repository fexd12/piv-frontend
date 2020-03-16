<template>
  <b-form>
    <b-form-group id="input-group-1" label="Food:" label-for="input-1">
      <b-form-select id="input-1" :options="users" required />
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
      acessos: [],
      show: true
    }
  }
}
</script>
