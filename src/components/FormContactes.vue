<template>
  <form class="form" @submit.prevent="ajouteContacte">
    <input type="text" placeholder="Nom contacte" v-model="formContactes.nom">
    <span v-if="formContactes.nom.length < 2 && error" class="error">Nom doit avoir 2 caractére minimum</span>

    <input type="number" placeholder="numero" v-model="formContactes.numero">
    <span v-if="formContactes.nom.length < 8 && error" class="error">Nom doit avoir 2 caractére minimum</span>

    <span v-if="formContactes.numero == '' && error || formContactes.nom == '' && error" class="error">Tout les champ doivent étre remplies</span>
    <button type="submit">Ajouter</button>
  </form>
</template>
<script>
export default {
  name: 'FormContactes',
  props: [
    'Contactes'
  ],
  data() {
    return {
      error: false,
      formContactes: {
        nom: "",
        numero: ''
      },
    }
  },
  methods: {
    ajouteContacte() {
      this.formContactes.numero = "0" + this.formContactes.numero
      if (this.formContactes.nom.length < 2) {
        this.error = true
        return
      }
      if (this.formContactes.nom == "" || this.formContactes.numero == '') return
      if (this.Contactes.find(Contacte => Contacte.nom == this.formContactes.nom)) return 
      this.$store.commit('ajouteContacte', this.formContactes)
      this.error = false
      this.formContactes = {
        nom: "",
        numero: ''
      }
      this.$router.push({ name: 'contact' });
    }
  }
}
</script>
<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    gap: 2%;
    padding: 2%;
  }
</style>