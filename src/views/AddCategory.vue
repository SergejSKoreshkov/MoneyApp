<template>
  <div class="addcategory">
    <AddCategory/>
  </div>
</template>

<script>
import AddCategory from '@/components/AddCategory.vue'

export default {
  name: 'Categories',
  components: {
    AddCategory
  }
}
</script>

<style lang="less" scoped>
  .addcategory {
    width: 100%;
    min-height: 100vh;
  }
</style>
