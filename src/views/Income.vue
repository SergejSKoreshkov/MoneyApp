<template>
  <div class="income">
    <Income/>
  </div>
</template>

<script>
import Income from '@/components/Income.vue'

export default {
  name: 'Categories',
  components: {
    Income
  }
}
</script>

<style lang="less" scoped>
  .income {
    width: 100%;
    min-height: 100vh;
  }
</style>
