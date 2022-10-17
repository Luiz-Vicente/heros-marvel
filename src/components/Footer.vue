<template>
  <footer class="bg-blue-tertiary p-4 container-fluid d-flex justify-content-center">
    <p class="text-white">feito com ❤️ por</p>
    <a
      target="_blank"
      class="ms-1 text-decoration-none"
      @click="mixpanel('Contato Instagram')"
      href="https://www.instagram.com/eu_sou_o_luiz/"
    >
      @eu_sou_o_luiz
    </a>
  </footer>
</template>

<script>
import { track } from '@/services/tracker.js';

export default {
  name: 'Navbar',
  methods: {
    mixpanel(value, data) {
      track(value, data);
    }
  }
};
</script>
