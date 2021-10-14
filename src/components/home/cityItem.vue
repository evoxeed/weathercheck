<template>
<div class="city__item text-center pa-6">
  <p class="ma-0">{{ city }}</p>
  <h2 class="ma-0">{{ temperature }}</h2>
  <img :src="require(`@/assets/img/1.png`)" alt="">
</div>
</template>

<script>
export default {
  name: "cityItem",
  props: ['temperature', 'city'],
  computed: {

  }
}
</script>

<style scoped>

</style>