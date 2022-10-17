<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Detalhes from './views/Details.vue';

export default {
  components: {
    Navbar,
    Home,
    Detalhes,
  }
}
</script>
