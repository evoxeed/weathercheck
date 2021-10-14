<template>
  <v-app-bar :color="this.$vuetify.breakpoint.mdAndUp ? 'accent' : 'transparent'"
             absolute
             app
             class="header"
             dark
             flat
  >
    <v-row class="align-center">
      <v-col class="header__nav d-flex align-center" cols="12">
        <div class="header__logo">
          <img :src="require('@/assets/icon/logo.png')" alt="logo">
        </div>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <div class="d-flex">
            <router-link v-for="i in navItems" :key="i.name" :to="i.path"
                         class="header__nav-link d-flex text-decoration-none">
              <img :src="currentPath.match(i.path) ? require(`@/assets/icon/${i.name}.png`) : require(`@/assets/icon/${i.name}-disabled.png`)" alt="" class="header__nav-icon">
              <p class="mb-0 d-flex align-center">{{ i.text }}</p>
            </router-link>
          </div>
        </div>
        <v-spacer></v-spacer>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import {getNavItems} from "@/data"

export default {
  name: "Header",
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

<style scoped>
</style>