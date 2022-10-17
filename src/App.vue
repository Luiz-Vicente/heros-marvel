<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  <notifications class="mt-3 me-4" />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Home from './views/Home.vue';
import Detalhes from './views/Details.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Home,
    Detalhes,
    Footer
  }
}
</script>
