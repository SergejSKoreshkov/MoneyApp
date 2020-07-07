<template>
  <v-container class="payments">
    <PaymentMethodMod/>
  </v-container>
</template>

<script>
import PaymentMethodMod from '@/components/PaymentMethodMod.vue'

export default {
  name: 'Payments',
  components: {
    PaymentMethodMod
  }
}
</script>

<style lang="less" scoped>
  .payments {
    width: 100%;
    min-height: 100vh;
  }
</style>
