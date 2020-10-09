<template>
    <v-container class="pt-0 pb-0">
        <v-progress-linear rounded :value="incomeSpendingsRate" color="purple"></v-progress-linear>
    </v-container>
</template>

<script>
export default {
  computed: {
    incomeSpendingsRate () {
      return this.income() / this.balance()
    }
  },
  methods: {
    spendings () {
      return Math.abs(this.$store.state.history.filter(el => el.type === 'spending').reduce((acc, el) => acc + el.total, 0))
    },
    income () {
      return this.$store.state.history.filter(el => el.type === 'income').reduce((acc, el) => acc + el.total, 0)
    },
    balance () {
      return this.$store.state.history.reduce((acc, el) => acc - el.total, 0)
    }
  }
}
</script>
