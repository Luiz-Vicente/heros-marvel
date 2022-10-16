<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Favs from './views/Favs.vue';
import Detalhes from './views/Detalhes.vue';

export default {
  components: {
    Navbar,
    Home,
    Favs,
    Detalhes,
  }
}
</script>
  
<style lang="scss">
    #app{
      background-color: #212534 !important;
      color: white;
    }
</style>
