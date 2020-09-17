<template>
  <div class="spendings">
    <Spendings/>
  </div>
</template>

<script>
import Spendings from '@/components/Spendings.vue'

export default {
  name: 'Categories',
  components: {
    Spendings
  }
}
</script>

<style lang="less" scoped>
  .spendings {
    width: 100%;
    min-height: 100vh;
  }
</style>
