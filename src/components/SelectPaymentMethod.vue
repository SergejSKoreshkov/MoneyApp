<template>
  <v-container>
    <v-card class="pa-4">
      <v-row class="text-center">
        <v-col v-for="item in paymentMethods" :key="item.text" cols="12">
          <Payment
            :color="item.color"
            :name="item.name"
            :icon="item.icon"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn text class="w100" @click="$router.push('/payments')">
            <v-icon class="mr-4">mdi-bank</v-icon>
            <span class="mr-4">Manage payment methods</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Payment from '@/components/Payment.vue'
export default {
  name: 'SelectPaymentMethod',
  components: {
    Payment
  },
  data () {
    return {
      paymentMethods: [
        { name: 'Cash', icon: 'mdi-currency-usd', color: 'green' },
        { name: 'Swedbank', icon: 'mdi-credit-card', color: 'orange' },
        { name: 'Revolut', icon: 'mdi-power-socket-eu', color: 'indigo' },
        { name: 'Stocks', icon: 'mdi-plus', color: 'amber' }
      ]
    }
  }
}
</script>
