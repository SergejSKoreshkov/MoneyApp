<template>
    <v-container class="d-flex justify-space-between">
        <v-card @click="showIncome" class="w100 mr-2 text-center">
            <v-row>
                <v-col cols="12">
                    <v-card-title class="d-block pl-1 pr-1 subtitle-1 font-weight-medium">{{ income.toFixed(2) + curr }}</v-card-title>
                    <v-card-subtitle>Income</v-card-subtitle>
                </v-col>
            </v-row>
        </v-card>
        <v-card @click="showBalance" class="w100 ml-1 mr-1 text-center">
            <v-row>
                <v-col cols="12">
                    <v-card-title class="d-block pl-1 pr-1 subtitle-1 font-weight-medium">{{ balance.toFixed(2) + curr }}</v-card-title>
                    <v-card-subtitle>Balance</v-card-subtitle>
                </v-col>
            </v-row>
        </v-card>
        <v-card @click="showSpendings" class="w100 ml-2 text-center">
            <v-row>
                <v-col cols="12">
                    <v-card-title class="d-block pl-1 pr-1 subtitle-1 font-weight-medium">{{ spendings.toFixed(2) + curr }}</v-card-title>
                    <v-card-subtitle>Spendings</v-card-subtitle>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'TotalBalance',
  computed: {
    curr () {
      return ' ' + this.$store.state.settings.currency
    },
    spendings () {
      return Math.abs(this.$store.getters.history.filter(el => el.type === 'spending').reduce((acc, el) => acc + el.total, 0))
    },
    income () {
      return this.$store.getters.history.filter(el => el.type === 'income').reduce((acc, el) => acc + el.total, 0)
    },
    balance () {
      return this.$store.getters.history.reduce((acc, el) => acc + (el.type !== 'transfer' ? (el.type === 'spending' ? -el.total : el.total) : 0), 0)
    }
  },
  methods: {
    showSpendings () {
      this.$router.push('/spendings')
    },
    showIncome () {
      this.$router.push('/income')
    },
    showBalance () {
      this.$router.push('/balance')
    }
  }
}
</script>

<style lang="less" scoped>
    .total-balance {
        position: relative;
    }
    .sparkline {
        position: absolute;
        top: 0;
        left: 5%;
        width: 94%;
        height: 100%;
        z-index: 1;
    }
    .front-panel {
        z-index: 2;
        position: relative;
    }
</style>
