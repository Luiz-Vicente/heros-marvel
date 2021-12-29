<template>
  <div class="container home" style="padding: 2.5rem">
    <form class="d-flex search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Buscar"
        aria-label="Search"
        v-model="name_hero"
      />
      <button class="btn btn-outline-primary" type="submit" @click="search">
        Search
      </button>
    </form>

    <div v-show="print" class="row justify-content-around">
      <div
        class="card col-6"
        style="width: 16rem; padding: 0; margin-bottom: 1rem"
        v-for="hero in hero_list"
        :key="hero.id"
      >
        <img
          :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
          class="card-img-top"
          style="height: 16rem"
          :alt="hero.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ hero.name }}</h5>
          <p @click="pushHeroi(hero.id)" class="btn btn-danger">Ver Mais</p>
        </div>
      </div>
    </div>

    <div v-show="print_card" class="row justify-content-around">
      <div
        class="card col-6"
        style="width: 16rem; padding: 0; margin-bottom: 1rem"
        v-for="hero in heros"
        :key="hero.id"
      >
        <img
          :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
          class="card-img-top"
          style="height: 16rem"
          :alt="hero.name"
        />
        <div class="card-body">
          <h5 class="card-title">{{ hero.name }}</h5>
          <p @click="pushHeroi(hero.id)" class="btn btn-danger">Ver Mais</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//arquivo que conecta com a API da marvel
import api from "@/services/api.js";

export default {
  name: "Home",
  data() {
    return {
      hero_list: [], //recebe os dados da API
      search_value: "", //recebe o valor digitado pelo usuario no input de busca
      name_hero: "", //input do qual o valor é extraído para search_value
      heros: [], //array que contém os elementos do heroi específico como resultado da busca
      print: true,
      print_card: false,
    };
  },
  mounted() {
    //requisição dos dados da API com Axios
    api
      .get(
        "v1/public/characters?ts=1640212576&apikey=d1283b4d024b37009288459ead0ea7ea&hash=1ea41f7e69249d72e718c14b6cccd430&limit=100"
      )
      .then((response) => {
        console.log(response.data.data.results);
        this.hero_list = response.data.data.results; //atribuição dos resultados
      });
  },
  methods: {
    //redireciona o usuário para a rota de Detalhes concatenando o id correspondente ao heroi selecionado
    pushHeroi(id) {
      window.location.href = "/detalhes/" + id;
    },
    //método de busca simples
    search(e) {
      e.preventDefault();
      this.search_value = this.name_hero;
      //verifica cada heroi da API até encontrar algum que tenha um atributo name igual ao digitado no input de busca
      this.hero_list.forEach((element) => {
        if (element.name.toLowerCase() == this.search_value.toLowerCase()) {
          this.heros = [element]; //atribuição do elemento encontrado como igual a busca
          this.print_card = true;
          this.print = false;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  height: 100%;
}
.card {
  background-color: #07080c;
}
.card:hover {
  box-shadow: 0px 0px 20px -1px #000000;
}
.search {
  margin-bottom: 2rem;
}
</style>