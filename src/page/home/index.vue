<template>
  <div>
    <current></current>
    {{data}}
  </div>
</template>

<script>
  import current from './current.vue'
  export default {
    name: 'home',
    components: {
      current
    },
    data () {
      return {
        data: 'ireader home'
      }
    }
  }
</script>

<style scoped>

</style>
