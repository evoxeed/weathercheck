<template>
  <v-container class="home">
    <v-row
        align="center"
        justify="center">
      <v-col cols="4">
        <v-text-field
            background-color="accent"
            class="home__input"
            height="56"
            label="Укажите город"
            single-line
            solo
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>