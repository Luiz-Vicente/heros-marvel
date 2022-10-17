<template>
  <Navbar/>
  <router-view/>
  <notifications class="mt-3 me-4" />
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
