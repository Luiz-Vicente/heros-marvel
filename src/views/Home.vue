<template>
  <div class="home bg-blue-secondary p-4">
    <form class="d-flex mb-3">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Buscar"
        v-model="nameHero"
      />
      <button class="btn btn-primary" v-on:click.prevent="filteredList()">Search</button>
    </form>

    <div v-show="showCards" class="row justify-content-around">
      <sync-loader class="w-100 text-center mt-5" :loading="loading" color="#0d6efd"></sync-loader>
      <div
        @click="goToDetails(hero)"
        class="card bg-blue-tertiary my-3 p-0"
        style="width: 242px"
        v-for="hero in filteredList"
        :key="hero.id"
      >
        <img
          :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
          class="rounded-top border-3 border-bottom border-danger"
          style="height: 16rem; cursor: pointer;"
          :alt="hero.name"
        />
        <div class="card-body">
          <p class="card-title text-white text-center">{{ hero.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';
import { track } from '@/services/tracker.js';
import api from "@/services/api.js";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      heroList: [],
      searchValue: "",
      nameHero: "",
      heros: [],
      showCards: true,
    };
  },
  components: {
    SyncLoader
  },
  methods: {
    goToDetails(hero) {
      window.location.href = "/detalhes/" + hero.id;
    },
    async getHeros() {
      this.loading = true;
      try {
        const response = await api.get("v1/public/characters?ts=1640212576&apikey=d1283b4d024b37009288459ead0ea7ea&hash=1ea41f7e69249d72e718c14b6cccd430&limit=100")
        this.heroList = response.data.data.results;
        this.loading = false;
      } catch (error) {
        this.$notify({
          type: 'error',
          title: `Unexpected error (${error})`,
          text: "Unable to fetch heroes. Try later!",
        });
      }
    }
  },
  computed: {
    filteredList() {
      return this.heroList.filter((hero) => hero.name.toLowerCase().includes(this.nameHero.toLowerCase()));
    }
  },
  mounted() {
    track('Home');
    this.getHeros();
  },
};
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
}
.card:hover {
  box-shadow: 0px 0px 20px -1px #000000;
}
</style>