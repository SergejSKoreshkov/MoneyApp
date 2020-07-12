<template>
  <div class="payments">
    <AccountsMod/>
  </div>
</template>

<script>
import AccountsMod from '@/components/AccountsMod.vue'

export default {
  name: 'Payments',
  components: {
    AccountsMod
  }
}
</script>

<style lang="less" scoped>
  .payments {
    width: 100%;
    min-height: 100vh;
  }
</style>
