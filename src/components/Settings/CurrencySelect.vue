<template>
    <v-select
      v-model="selectedCurrency"
      :items="currencies"
      prepend-icon="mdi-currency-eur"
      label="Display currency"
      @change="setCurrency"
    >
    </v-select>
</template>

<script>
export default {
  name: 'CurrencySelect',
  methods: {
    setCurrency () {
      this.$store.dispatch('setCurrency', { currency: this.selectedCurrency })
    }
  },
  data () {
    return {
      currencies: ['€', '$', '₽', '¥', '₿'],
      selectedCurrency: this.$store.state.settings.currency
    }
  }
}
</script>
