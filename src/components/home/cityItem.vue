<template>
<div class="city__item text-center pa-6">
  <p class="mb-3">{{ city }}</p>
  <h2 class="ma-0 city__item-temperature">{{ temperature }}°</h2>
  <img :src="require(`@/assets/icon/weather/${icon}.png`)" alt="" height="78" width="78">
</div>
</template>

<script>
export default {
  name: "cityItem",
  props: ['temperature', 'city', 'icon'],
  computed: {}
}
</script>

<style scoped>

</style>