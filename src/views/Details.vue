<template>
  <sync-loader style="height: 100vh" class="w-100 bg-blue-secondary text-center pt-5" v-if="loading" :loading="loading" color="#0d6efd"></sync-loader>
  <div v-else class="details bg-blue-secondary p-4">
    <div class="d-flex w-100">
      <a
        href="/"
        type="button"
        class="btn-close btn-close-white"
        aria-label="Close"
      ></a>
    </div>
    <h1 class="text-white">{{ hero.name }}</h1>
    <p class="text-white">{{ hero.description }}</p>
    <div v-if="series.length" class="list">
      <h2 class="text-white">Series:</h2>
      <ul v-for="serie in series" :key="serie.id">
        <li class="text-white">{{ serie.name }}</li>
      </ul>
    </div>
    <div v-if="events.length" class="list">
      <h2 class="text-white">Eventos:</h2>
      <ul v-for="event in events" :key="event.id">
        <li class="text-white">{{ event.name }}</li>
      </ul>
    </div>
    <div v-if="comics.length" class="list">
      <h2 class="text-white">HQ's:</h2>
      <ul v-for="comic in comics" :key="comic.id">
        <li class="text-white">{{ comic.name }}</li>
      </ul>
    </div>
    <div v-if="links.length" class="list">
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
import api from "@/services/api.js";
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';
import { track } from '@/services/tracker.js';

export default {
  name: "Details",
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
        this.$notify({
          type: 'error',
          title: `Unexpected error (${error})`,
          text: "Unable to fetch heroes. Try later!",
        });
      }
    },
    showHero() {
      this.heroList.forEach((element) => {
        if (element.id == this.url) {
          this.hero = element;
          this.series = element.series.items;
          this.events = element.events.items;
          this.comics = element.comics.items;
          this.links = element.urls;
        }
      });
      track('Details', { 'hero': this.hero.name });
    },
  },
  mounted() {
    this.getHeros();
  },
};
</script>

<style scoped lang="scss">
.details {
  min-height: 100vh;
  text-align: center;
  padding-bottom: 2rem;
}
.list {
  text-align: start;
}
</style>