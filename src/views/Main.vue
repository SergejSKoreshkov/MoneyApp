<template>
  <div class="main">
    <TotalBalance/>
    <IncomeSpendingsRate/>
    <Accounts/>
    <TopCategory/>
  </div>
</template>

<script>
import Accounts from '@/components/Accounts.vue'
import TotalBalance from '@/components/TotalBalance.vue'
import IncomeSpendingsRate from '@/components/IncomeSpendingsRate.vue'
import TopCategory from '@/components/TopCategory.vue'

export default {
  name: 'Main',
  components: {
    Accounts,
    TotalBalance,
    TopCategory,
    IncomeSpendingsRate
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
