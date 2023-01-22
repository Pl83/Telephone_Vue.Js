<template lang="">
  <div class="phone">
    <h1>Mon historique d'appel</h1>
    <div>
      <CardHistorique/>
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
import CardHistorique from '@/components/CardHistorique.vue';
export default {
  name: 'HistoriqueView',
  components:{
    CardHistorique,
  }
}
</script>
<style scoped>
.phone{
  border: 5px solid black;
  border-radius: 10px;
  width: 370px;
  height: 800px;
  overflow: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>