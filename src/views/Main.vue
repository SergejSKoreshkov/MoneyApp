<template>
  <div class="main">
    <TotalBalance/>
    <SelectPaymentMethod/>
    <TopCategory/>
  </div>
</template>

<script>
import SelectPaymentMethod from '@/components/SelectPaymentMethod.vue'
import TotalBalance from '@/components/TotalBalance.vue'
import TopCategory from '@/components/TopCategory.vue'

export default {
  name: 'Main',
  components: {
    SelectPaymentMethod,
    TotalBalance,
    TopCategory
  }
}
</script>

<style lang="less" scoped>
  .main {
    width: 100%;
    min-height: 100vh;
    // background: linear-gradient(-160deg, #ff4e00,#ffa53c,#ffffff00);
  }
</style>
