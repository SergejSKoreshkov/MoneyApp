<template>
  <v-container>
    <v-card class="pa-4">
      <v-row class="text-center">
        <v-col v-for="item in paymentMethods" :key="item.text" cols="6">
          <v-card>
            <v-card-title class="d-block">1000.00$</v-card-title>
            <v-card-subtitle class="d-block">
              <span>{{ item.name }}</span>
            </v-card-subtitle>
            <v-card-actions class="d-flex justify-center">
              <v-btn class="w45 h50 green--text text--accent-4" outlined>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn class="w45 h50 deep-orange--text text--accent-4" outlined>
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn class="w100">
            <v-icon class="mr-4">mdi-bank-plus</v-icon>
            <span class="mr-4">Add new payment method</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'SelectPaymentMethod',
  data () {
    return {
      paymentMethods: [
        { name: 'Cash', icon: 'mdi-currency-usd' },
        { name: 'Swedbank', icon: 'mdi-plus' },
        { name: 'Revolut', icon: 'mdi-plus' },
        { name: 'Stocks', icon: 'mdi-plus' }
      ]
    }
  }
}
</script>
