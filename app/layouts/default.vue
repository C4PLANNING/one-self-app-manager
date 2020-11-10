<template>
  <div class="container">
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from '~/components/common/TheHeader.vue'
import TheFooter from '~/components/common/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1700px;
}
</style>
