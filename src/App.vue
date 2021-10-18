<template>
  <div id="app">
    <v-app>
      <Header/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import Header from "@/components/header/Header";


export default {
  components: {Header}
}
</script>