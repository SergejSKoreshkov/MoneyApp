<template>
  <v-container>
    <v-card class="pa-1">
      <v-row class="text-center">
        <v-col class="pa-2" v-for="item in $store.state.payments" :key="item.text" cols="12">
          <Payment
            :color="item.color"
            :name="item.name"
            :icon="item.icon"
            :total="item.total"
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
