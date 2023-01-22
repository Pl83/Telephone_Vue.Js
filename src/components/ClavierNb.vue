<template lang="">

  <div>
    <button @click="clicked('1')" value="1">1</button><button @click="clicked('2')" value="2">2</button><button @click="clicked('3')" value="3">3</button>
    <br>
    <button @click="clicked('4')" value="4">4</button><button @click="clicked('5')" value="5">5</button><button @click="clicked('6')" value="6">6</button>
    <br>
    <button @click="clicked('7')" value="7">7</button><button @click="clicked('8')" value="8">8</button><button @click="clicked('9')" value="9">9</button>
    <br>
    <button>*</button><button @click="clicked('0')" value="0">0</button><button  value="#">#</button>
  </div>
</template>
<script>
export default {
  name: 'ClavierNb',
  data() {
    return {
      toi: ""
    }
  },
  methods: {
    clicked(nb){
      //console.log(nb);
      this.toi = nb;
      this.$emit('toi', this.toi);
    }
  },
}
</script>
<style scoped>
  div{
    display: block;
  }
  div button{
    height: 80px;
    width: 80px;
    font-size: 60px;
    cursor: pointer;
  }

</style>