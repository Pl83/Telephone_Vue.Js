<template>
  <div class="history-list">
    <div v-for="Historique in Historiques" :key="Historique.date" class="history-item">
        <div class="history-info">
          <p class="history-date">Date : {{ Historique.date }} </p>
        </div>
        <div class="history-info">
          <p class="history-name">Nom : {{ Historique.nom }} </p>
          <p class="history-number">Numero : {{ Historique.numero }} </p>
        </div>
        <div>
          <BtnCall class="call-button" :nom="Historique.nom" :numero="Historique.numero"/>
        </div>
    </div>
  </div>
</template>

<script>
import BtnCall from '@/components/BtnCall.vue';
export default {
  name : 'CardHistorique',
  components: {
    BtnCall
  },
  computed: {
    Historiques() {
      let Historiques = this.$store.state.Historiques;
      return Historiques.sort((a,b) => b.date.localeCompare(a.date));
    }
  }
}
</script>

<style scoped>
.history-list {
  width: 90%;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;

}

.history-item {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
}

.history-info {
  width: 80%;
  margin: 10px;
  font-size: 14px;
}

.history-date {
  margin: 0;
  font-weight: bold;
  font-size: 16px;
}
.history-name {
  margin: 0;
  font-size: 14px;
  color: gray;
}

.history-number {
  margin: 0;
  font-size: 14px;
  color: gray;
}

.call-button {
  background-color: #4CAF50; 
  border-radius: 10px;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.call-button:hover {
  background-color: #3e8e41;
}


</style>