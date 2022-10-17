<template>
  <sync-loader style="height: 100vh" class="w-100 bg-blue-secondary text-center pt-5" v-if="loading" :loading="loading" color="#0d6efd"></sync-loader>
  <div v-else class="detalhes bg-blue-secondary">
    <div class="d-flex w-100">
      <a
        href="/"
        type="button"
        class="btn-close btn-close-white"
        aria-label="Close"
        style="margin-top: 2rem; margin-left: 2rem"
      ></a>
    </div>
    <h1 class="text-white">{{ hero.name }}</h1>
    <p class="text-white" style="padding:0 12.3rem">{{ hero.description }}</p>
    <div class="list">
      <h2 class="text-white">Series:</h2>
      <ul v-for="serie in series" :key="serie.id">
        <li class="text-white">{{ serie.name }}</li>
      </ul>
    </div>
    <div class="list">
      <h2 class="text-white">Eventos:</h2>
      <ul v-for="event in events" :key="event.id">
        <li class="text-white">{{ event.name }}</li>
      </ul>
    </div>
    <div class="list">
      <h2 class="text-white">HQ's:</h2>
      <ul v-for="comic in comics" :key="comic.id">
        <li class="text-white">{{ comic.name }}</li>
      </ul>
    </div>
    <div class="list">
      <h2 class="text-white">Saiba mais em:</h2>
      <ul v-for="link in links" :key="link.id">
        <li class="text-white">
          <a :href="link.url">{{ link.type }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//arquivo que conecta com a API da marvel
import api from "@/services/api.js";
import SyncLoader from 'vue-spinner/src/SyncLoader.vue'

export default {
  name: "Detalhes",
  data() {
    return {
      loading: true,
      heroList: [],
      url: this.$route.params.userId,
      hero: [],
      series: [],
      events: [],
      comics: [],
      links: [],
    };
  },
  components: {
    SyncLoader
  },
  methods: {
    async getHeros() {
      this.loading = true;
      try {
        const response = await api.get("v1/public/characters/" + this.url + "?ts=1640212576&apikey=d1283b4d024b37009288459ead0ea7ea&hash=1ea41f7e69249d72e718c14b6cccd430");
        this.heroList = response.data.data.results;
        this.showHero();
        this.loading = false;
      } catch (error) {
        console.log(error)
      }
    },
    //mostra os dados do heroi ao iniciar o app
    showHero() {
      //busca na lista de herois um heroi compativel com o ID
      this.heroList.forEach((element) => {
        if (element.id == this.url) {
          this.hero = element;
          this.series = element.series.items;
          this.events = element.events.items;
          this.comics = element.comics.items;
          this.links = element.urls;
        }
      });
    },
  },
  mounted() {
    this.getHeros();
  },
};
</script>

<style scoped lang="scss">
.detalhes {
  height: 100%;
  text-align: center;
  padding-bottom: 2rem;
}
.list {
  text-align: start;
  padding-left: 15vw;
}
</style>