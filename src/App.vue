<template>
  <div id="app">
    <v-app>
      <Header/>
      <HeaderMobile class="hidden-md-and-up"/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import Header from "@/components/header/Header";
import HeaderMobile from "@/components/header/Header-mobile";

export default {
  components: {HeaderMobile, Header}
}
</script>