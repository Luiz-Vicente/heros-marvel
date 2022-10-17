<template>
  <nav class="bg-blue-tertiary p-4 container-fluid d-flex justify-content-between">
    <img
      src="@/assets/marvel-logo.png"
      style="width: 7rem"
    />
    <a
      target="_blank"
      @click="mixpanel('Contato WhatsApp')"
      class="btn btn-primary btn-md d-flex align-items-center"
      href="https://api.whatsapp.com/send?phone=554197475217&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es"
    >
      Quero meu site
    </a>
  </nav>
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
