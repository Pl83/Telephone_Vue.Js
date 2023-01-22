<template>
  <div class="phone">
    <div class="up">
      <h1>Mes Contacts</h1>
      <router-link to="/create">+add</router-link>
    </div>
      <div v-for="Contacte in Contactes" :key="Contacte.pseudo">
        <CardContacte :Contacte="Contacte"/>

      </div>
  </div>
  <div class="nav">
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/">Clavier</router-link> |
    <router-link to="/historique">Historique</router-link>
  </div>
  <div class="bg"></div>
</template>
<script>
import CardContacte from '@/components/CardContacte.vue';

export default {
  name: 'ContactView',
  components:{
    CardContacte,

  },
  computed: {
    Contactes() {
      let Contactes = this.$store.state.Contactes;
      return Contactes.sort((a,b) => a.nom.localeCompare(b.nom));
    }
  }
}
</script>
<style scoped>
.up{
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding-left: 33%;
}
.up a{
  border: none;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  padding-left: 5%;
  padding-top: 2.2%;
  text-decoration: none;
  font-size: 24px;
  font-weight: bolder;
  cursor: pointer;
}
</style>