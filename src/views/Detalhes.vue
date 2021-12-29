<template>
  <a
    href="/"
    type="button"
    class="btn-close btn-close-white"
    aria-label="Close"
    style="margin-top: 2rem; margin-left: 2rem"
  ></a>
  <div class="detalhes">
    {{ printHeroi() }}
    <h1>{{ heroi.name }}</h1>
    <p style="padding:0 12.3rem">{{ heroi.description }}</p>
    <div class="list">
      <h2>Series:</h2>
      <ul v-for="serie in series" :key="serie.id">
        <li>{{ serie.name }}</li>
      </ul>
    </div>
    <div class="list">
      <h2>Eventos:</h2>
      <ul v-for="event in events" :key="event.id">
        <li>{{ event.name }}</li>
      </ul>
    </div>
    <div class="list">
      <h2>HQ's:</h2>
      <ul v-for="comic in comics" :key="comic.id">
        <li>{{ comic.name }}</li>
      </ul>
    </div>
    <div class="list">
      <h2>Saiba mais em:</h2>
      <ul v-for="link in links" :key="link.id">
        <li>
          <a :href="link.url">{{ link.type }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from "@/services/api.js";

export default {
  name: "Detalhes",
  data() {
    return {
      herois: [],
      url: this.$route.params.username,
      heroi: [],
      series: [],
      events: [],
      comics: [],
      links: [],
    };
  },
  methods: {
    printHeroi() {
      this.herois.forEach((element) => {
        if (element.id == this.url) {
          this.heroi = element;
          this.series = element.series.items;
          this.events = element.events.items;
          this.comics = element.comics.items;
          this.links = element.urls;
        }
      });
    },
  },
  mounted() {
    api
      .get(
        "v1/public/characters/" +
          this.url +
          "?ts=1640212576&apikey=d1283b4d024b37009288459ead0ea7ea&hash=1ea41f7e69249d72e718c14b6cccd430"
      )
      .then((response) => {
        console.log(response.data.data.results);
        this.herois = response.data.data.results;
      });
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