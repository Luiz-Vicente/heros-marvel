<template>
  <Navbar/>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
