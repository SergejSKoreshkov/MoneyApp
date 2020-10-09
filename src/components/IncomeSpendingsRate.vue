<template>
    <v-container class="pt-0 pb-0">
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
        <v-progress-linear
          rounded
          v-bind="attrs"
          v-on="on"
          :value="incomeSpendingsRate"
          :color="progressColor"
        ></v-progress-linear>
        </template>
        <span>{{ progressMessage }}</span>
      </v-tooltip>
    </v-container>
</template>

<script>
const limits = [
  [40, 'red', 'Казна пуста'],
  [60, 'yellow', 'Казна пустеет, милорд'],
  [80, 'purple', 'Запасы золота неуклонно растут']
]

export default {
  computed: {
    incomeSpendingsRate () {
      const { total, max } = this.$store.state.balance
      return (total / max) * 100
    },
    progressMessage () {
      for (const [limit,, message] of limits) {
        if (this.incomeSpendingsRate < limit) return message
      }
      const [,, message] = limits[limits.length - 1]
      return message
    },
    progressColor () {
      for (const [limit, color] of limits) {
        if (this.incomeSpendingsRate < limit) return color
      }
      const [, color] = limits[limits.length - 1]
      return color
    }
  }
}
</script>
