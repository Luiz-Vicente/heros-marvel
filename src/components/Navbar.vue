<template>
  <nav class="navbar navbar-light">
    <div class="container" style="padding: 0 2.5rem">
      <img
        class="navbar-brand"
        src="@/assets/marvel-logo.png"
        style="width: 7rem"
      />
      <router-link to="/">Início </router-link>
      <router-link to="/favs">Favoritos</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
.navbar {
  background-color: #07080c;
}
</style>