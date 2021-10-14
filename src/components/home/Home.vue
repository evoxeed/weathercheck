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
            @input="searchItems()"
        ></v-text-field>

        <v-list v-if="value" class="input-hints__wrapper" color="#30354B">
          <v-list-item-group>
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.city"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <!--        <div class="input-hints__wrapper" v-if="value">-->
        <!--          <div class="input-hints__item">123</div>-->
        <!--          <div class="input-hints__item">123</div>-->
        <!--          <div class="input-hints__item">123</div>-->
        <!--          <div class="input-hints__item">123</div>-->
        <!--        </div>-->
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="i in items" :key="i.city" cols="6" md="4">
        <router-link :to="'/home/' + i.city">
          <city-item :city="i.city" :temperature="i.temperature"/>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CityItem from "@/components/home/cityItem";

export default {
  name: "Home",
  components: {CityItem},
  data() {
    return {
      value: '',
      items: [
        {
          city: 'Москва',
          temperature: '-13'
        },
        {
          city: 'Санкт-Петербург',
          temperature: '-10'
        },
        {
          city: 'Самара',
          temperature: '-21'
        },
        {
          city: 'Казань',
          temperature: '-28'
        },
        {
          city: 'Нижний новгород',
          temperature: '-17'
        },
      ],
    }
  },
  methods: {
    searchItems() {
      console.log(this.value)
    }
  }
}
</script>

<style scoped>

</style>