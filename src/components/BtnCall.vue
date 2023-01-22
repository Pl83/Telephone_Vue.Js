<template>
  <button @click="ajouteHistorique">Appel</button>
</template>
<script>
export default {
  name: 'BtnCall',
  props: [
    'nom', 
  'numero'
],
  methods: {
    ajouteHistorique() {
        let date = new Date();
        let Historique = {
            date: date.toLocaleString(),
            numero: this.numero, 
            nom: this.nom 
        }
        console.log(Historique.date);
        if (Historique.nom != '' && Historique.numero != ''){
          this.$store.commit('ajouteHistorique', Historique);
        }
    }
}

}
</script>
<style scoped>
  
</style>