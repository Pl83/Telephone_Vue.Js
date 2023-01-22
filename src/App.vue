<template>
  <nav class="dam">
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/">Clavier</router-link> |
    <router-link to="/historique">Historique</router-link>
  </nav>
  <router-view/>
</template>
<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.dam{
  display: none;
}

.bg{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(@/assets/office.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}

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
  background-color: aliceblue;
}

.nav{
  position: absolute;
  top: 89%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background-color: aliceblue;
  width: 370px;
  height: 50px;
  border: 1px solid black;
}

.nav a{
  border: none;
  color: rgb(0, 0, 0);
  padding: 10px 20px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
}

.nav a:hover{
  color: rgb(34, 255, 0);
}

.nav a.router-link-exact-active{
  color: rgb(34, 255, 0);
}
</style>
