<template>
  <v-container>
    <v-card class="pa-4">
      <v-row class="text-center">
        <v-col v-for="item in paymentMethods" :key="item.text" cols="12">
          <v-card flat>
              <v-list-item>
              <v-list-item-avatar>
                  <v-icon :class="`${item.color}--text`">{{ item.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                  <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                  <v-list-item-title>1000.00$</v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-action>
                  <v-btn outlined :class="`${item.color}--text`">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
              </v-list-item-action>
              </v-list-item>
          </v-card>
          <v-divider></v-divider>
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
export default {
  name: 'SelectPaymentMethod',
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
