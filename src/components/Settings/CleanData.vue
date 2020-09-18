<template>
    <v-btn @click="cleanData" depressed class="red--text w100 mt-4">
        Clean all data
        <v-icon>mdi-delete</v-icon>
    </v-btn>
</template>

<script>
export default {
  name: 'CleanData',
  methods: {
    cleanData () {
      if (!confirm('Really?')) return
      localStorage.removeItem('accounts')
      localStorage.removeItem('categories')
      localStorage.removeItem('history')
      localStorage.removeItem('settings')
    }
  }
}
</script>
