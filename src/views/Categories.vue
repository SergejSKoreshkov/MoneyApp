<template>
  <v-container class="categories">
    <CategoriesMod/>
  </v-container>
</template>

<script>
import CategoriesMod from '@/components/CategoriesMod.vue'

export default {
  name: 'Categories',
  components: {
    CategoriesMod
  }
}
</script>

<style lang="less" scoped>
  .categories {
    width: 100%;
    min-height: 100vh;
  }
</style>
