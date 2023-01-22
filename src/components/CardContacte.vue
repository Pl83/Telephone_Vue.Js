<template>
  <div class="contact-list">
    <ul>
      <li class="contact-item">
        <h2 class="contact-name">{{ Contacte.nom }}</h2>
        <p class="contact-number">{{ Contacte.numero }}</p>
        <BtnCall class="call-button" :nom="Contacte.nom" :numero="Contacte.numero"/>
      </li>
    </ul>
  </div>

</template>
<script>
import BtnCall from '@/components/BtnCall.vue';
export default {
  name : 'CardContacte',
  components: {
    BtnCall
},
  props: [
    'Contacte'
  ]
}
</script>
<style scoped>
.contact-list {
  width: 300px;
  margin: 0 auto;
}

.contact-item {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.contact-name {
  margin: 0;
  font-weight: bold;
}

.contact-number {
  margin: 0;
  color: gray;
  font-size: 12px;
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