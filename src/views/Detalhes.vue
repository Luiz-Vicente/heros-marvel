<template>
  <a
    href="/"
    type="button"
    class="btn-close btn-close-white"
    aria-label="Close"
    style="margin-top: 2rem; margin-left: 2rem"
  ></a>

  <div class="detalhes">
    {{ printHero() }}
    <h1>{{ hero.name }}</h1>
    <p style="padding:0 12.3rem">{{ hero.description }}</p>
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
//arquivo que conecta com a API da marvel
import api from "@/services/api.js";

export default {
  name: "Detalhes",
  data() {
    return {
      hero_list: [], //recebe os dados da API
      url: this.$route.params.username, //recebe o id passado como parâmetro na URL
      hero: [], //recebe o heroi específico
      series: [], //recebe as series específicas
      events: [], //recebe os eventos específicos
      comics: [], //recebe as HQ's específicas
      links: [], //recebe os links específicos
    };
  },
  methods: {
    //mostra os dados do heroi ao iniciar o app
    printHero() {
      //busca na lista de herois um heroi compativel com o ID
      this.hero_list.forEach((element) => {
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
    api
      .get(
        "v1/public/characters/" +
          this.url +
          "?ts=1640212576&apikey=d1283b4d024b37009288459ead0ea7ea&hash=1ea41f7e69249d72e718c14b6cccd430"
      )
      .then((response) => {
        console.log(response.data.data.results);
        this.hero_list = response.data.data.results;
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