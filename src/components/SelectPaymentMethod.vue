<template>
  <v-container>
    <v-card class="pa-1">
      <v-row class="text-center">
        <v-col class="pa-2" v-for="item in Object.keys($store.state.payments)" :key="item" cols="12">
          <Payment
            :color="$store.state.payments[item].color"
            :name="item"
            :icon="$store.state.payments[item].icon"
            :total="$store.state.payments[item].total"
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
  }
}
</script>
