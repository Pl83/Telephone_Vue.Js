<template lang="">
  <div class="phone">
    <h1>Clavier</h1>
    <h2 v-text="toi"></h2><h2 v-text="nom"></h2>
    <ClavierNb @toi="WorkingToi"></ClavierNb>
    <div class="func">
      <button @click="FDelette" class="back">back</button>
      <BtnCall class="Appel" :nom="nom" :numero="toi"></BtnCall>
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
import ClavierNb from '@/components/ClavierNb.vue'
import BtnCall from '@/components/BtnCall.vue'
export default {
  name: 'ClavierView',
  components:{
    ClavierNb,
    BtnCall,
  },
  data() {
    return {
      toi: "",
      nom:""
    }
  },
  methods: {
    WorkingToi(toi) {
        this.toi = this.toi + toi;
        if (this.toi !== '') {
          let contact = this.$store.state.Contactes.find(c => c.numero === this.toi);
          if (contact) {
              this.nom = contact.nom;
          } else {
              this.nom = 'Inconnu';
          }
        }
      },
    FDelette(){
      this.toi = this.toi.slice(0, -1);
      if (this.toi !== '') {
        let contact = this.$store.state.Contactes.find(c => c.numero === this.toi);
        if (contact) {
            this.nom = contact.nom;
        } else {
            this.nom = 'Inconnu';
        }
      } else if (this.toi === '') {
        this.nom = '';
      }
    }
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
  .func{
    display: flex;
    justify-content: center;
    gap: 3%;
    padding-top: 2%;
  }
  .back{
    height: 80px;
    width: 80px;
    border-radius: 60px;
    background-color: red;
    color: white;
    cursor: pointer;
  }

  .back:hover{
    background-color: #740000;
  }
  
  .Appel{
    height: 80px;
    width: 80px;
    border-radius: 100px;
    background-color: rgb(0, 177, 0);
    color: white;
    cursor: pointer;
  }

  .Appel:hover{
    background-color: #00ff00;
  }
</style>