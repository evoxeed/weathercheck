<template>
  <v-bottom-navigation
      v-model="currentPath"
      absolute
      app
      background-color="accent"
      color="accent"
      grow>
    <v-btn v-for="i in navItems" :key="i.name" :to="i.path" :value="i.path" plain>
      <img :src="currentPath  === i.path ? require(`@/assets/icon/${i.name}.png`) : require(`@/assets/icon/${i.name}-disabled.png`)" alt="">
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import {getNavItems} from "@/data";

export default {
  name: "header-mobile",
  data: function () {
    return {
      currentPath: '/home',
      navItems: []
    }
  },
  watch: {
    $route(to) {
      this.currentPath = to.path
    }
  },
  mounted() {
    this.navItems = getNavItems()
  }
}
</script>