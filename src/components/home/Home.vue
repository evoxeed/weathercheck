<template>
  <v-container class="home">
    <v-row
        align="center"
        justify="center">
      <v-col cols="12" md="5">
        <v-text-field
            v-model="value"
            background-color="accent"
            class="home__input"
            full-width
            label="Укажите город"
            max-height="56"
            single-line
            solo
        ></v-text-field>

        <v-list v-if="value.length > 2" class="input-hints__wrapper col-md-5 col-12" color="#30354B">
          <v-list-item-group>
            <v-list-item
                v-for="(item, i) in searchResults"
                :key="i"
                @click="selectItem(item)"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>

    <div v-if="!saveItems.length">
      <v-row align="center" class="ma-0" justify="center">
        <v-col class="d-flex justify-center home-hint" cols="12" md="4">
          <svg-icon class="home-hint__arrow" name="arrow-top" width="40"/>
          <p class="home-hint">Начните вводить город,
            например,
            <router-link :to="'home/' + 'Ижевск'" class="text-decoration-none">
              <span class="home-hint__city">Ижевск</span>
            </router-link>
          </p>
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col class="d-flex justify-center home-hint home-hint-two" cols="12">
          <div class="text-center">
            <p>Используйте значок «закладки»,
              чтобы закрепить город на главной</p>
            <svg-icon height="40" name="favorite-outline" width="40"/>
          </div>
        </v-col>
      </v-row>
    </div>

    <v-row v-if="saveItems.length">
      <v-col v-for="i in saveItems" :key="i.name" cols="6" md="4">
        <router-link :to="'/home/' + i.name" class="text-decoration-none">
          <city-item :city="i.name" :icon="i.iconName" :temperature="i.temperature"/>
        </router-link>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import CityItem from "@/components/home/cityItem";
import {getCities} from "@/data";
import SvgIcon from "@/assets/IconBase";
import axios from "axios";

export default {
  name: "Home",
  components: {SvgIcon, CityItem},
  data() {
    return {
      value: '',
      items: [],
      saveItems: []
    }
  },
  methods: {
    capitalizeFirstLetter(str) {
      return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
    },

    selectItem(i) {
      this.$router.push('home/' + i.name)
      this.value = ''
    },
    getIcon(main) {
      switch (main) {
        case "Thunderstorm":
          return "Thunderstorm"
        case "Drizzle":
          return "Drizzle"
        case "Rain":
          return "Rain"
        case "Snow":
          return "Snow"
        case "Tornado":
          return "Tornado"
        case "Clear":
          return "Clear"
        case "Clouds":
          return "Clouds"
        case "Squall":
          return "Squall"
        case "Dust" || "Sand" || "Ash":
          return "DSA"
        case "Mist" || "Smoke" || "Haze" || "Fog":
          return "MSHF"
      }
    }
  },
  mounted() {
    this.items = getCities()
  },
  computed: {
    searchResults() {
      return this.items.filter(i => i.name.match(this.capitalizeFirstLetter(this.value)))
    }
  },
  created() {
    let temp = JSON.parse(localStorage.getItem("saveCites"))
    if (temp) {
      temp.forEach(i => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${i}&lang=ru&appid=d3bc95ecaecd4ef6878235514423582d&units=metric`)
            .then(response => {
              this.saveItems.push(
                  {
                    name: response.data.name,
                    temperature: Math.round(response.data.main.temp),
                    iconName: this.getIcon(response.data.weather[0].main)
                  }
              )
            })
            .catch(response => {
              console.error("Error", response)
            })
      })
    }
  }
}
</script>

<style scoped>

</style>