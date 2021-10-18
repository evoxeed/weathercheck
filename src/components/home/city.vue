<template>
  <div class="bg-city">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex align-center justify-space-between my-3">
            <router-link class="text-decoration-none" to="/home">
              <div class="d-flex justify-center align-center">
                <svg-icon name="arrow_left"/>
                <span class="ml-3 city__back">Назад</span>
              </div>
            </router-link>
            <div class="favorite" @click="setFavoriteItem">
              <svg-icon :name="favoriteItem ? 'favorite-use' : 'favorite-outline'"/>
            </div>
          </div>
        </v-col>
        <v-col class="d-flex justify-center align-center" cols="12">
          <div class="city text-center">
            <h1 class="city__name mb-4">{{ name }}</h1>
            <p class="city__description mb-5">{{ description }}</p>
            <div class="d-flex align-center justify-center mb-16">
              <h2 class="city__temperature">{{ temperature }}°</h2>
              <img v-if="iconName" :src="require(`@/assets/icon/weather/${iconName}.png`)" alt="">
            </div>
            <div class="d-flex align-center justify-center mb-8">
              <svg-icon name="pressure"/>
              <p class="city__pressure ma-0 ml-2">{{ pressure }} мм рт. ст.</p>
            </div>
            <span class="city__time">Закат в {{ time }}</span>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SvgIcon from "@/assets/IconBase";
import axios from "axios";

export default {
  props: ["city"],
  name: "city",
  data: function () {
    return {
      favoriteItem: localStorage.getItem("saveCites") ? JSON.parse(localStorage.getItem("saveCites")).some(i => i === this.$route.params.id) : false,
      name: '',
      description: '',
      temperature: '',
      pressure: '',
      time: '',
      iconName: ''
    }
  },
  components: {SvgIcon},
  methods: {
    setFavoriteItem() {
      this.favoriteItem = !this.favoriteItem
      if (this.favoriteItem) {
        let temp = JSON.parse(localStorage.getItem("saveCites"))
        if (temp) {
          temp.push(this.name)
          localStorage.setItem("saveCites", JSON.stringify(temp))
          return
        }
        localStorage.setItem("saveCites", JSON.stringify([this.name]))
      } else {
        let temp = JSON.parse(localStorage.getItem("saveCites"))
        temp = temp.filter(i => i !== this.name)
        localStorage.setItem("saveCites", JSON.stringify(temp))
      }
    },

    ucFirst(str) {
      return str[0].toUpperCase() + str.slice(1);
    },
    convertTime(unixTime) {
      let date = new Date((unixTime * 1000));
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      return hours + ":" + minutes.substr(-2);
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
  created() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.$route.params.id}&lang=ru&appid=d3bc95ecaecd4ef6878235514423582d&units=metric`)
        .then(response => {
          this.name = response.data.name
          this.description = this.ucFirst(response.data.weather[0].description)
          this.temperature = Math.round(response.data.main.temp)
          this.pressure = Math.round(response.data.main.pressure * 0.75)
          this.time = this.convertTime(Math.round(response.data.sys.sunset))
          this.iconName = this.getIcon(response.data.weather[0].main)
        })
        .catch(response => {
          console.error("Error", response)
        })
  }
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>