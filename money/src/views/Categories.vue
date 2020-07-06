<template>
  <div class="categories">
    <CategoriesMod/>
  </div>
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
