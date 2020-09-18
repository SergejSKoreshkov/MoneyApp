<template>
    <v-select
      v-model="selectedPeriod"
      :items="periods"
      prepend-icon="mdi-clock"
      label="Display period"
      @change="setPeriod"
    >
    </v-select>
</template>

<script>
export default {
  name: 'PeriodSelect',
  methods: {
    setPeriod () {
      this.$store.dispatch('setPeriod', { period: this.selectedPeriod })
    }
  },
  data () {
    return {
      periods: ['All', 'Year', 'Month', 'Day'],
      selectedPeriod: this.$store.state.settings.period
    }
  }
}
</script>
