<template>
  <div class="phone">
    <FormContactes :Contactes="Contactes"/>
  </div>
  <div class="nav">
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/">Clavier</router-link> |
    <router-link to="/historique">Historique</router-link>
  </div>
  <div class="bg"></div>
</template>
<script>
import FormContactes from '@/components/FormContactes.vue';
export default {
  name: 'CreateView',
  components:{
    FormContactes
  },
  computed: {
    Contactes() {
      return this.$store.state.Contactes
    }
  }
}
</script>
<style scoped>

</style>