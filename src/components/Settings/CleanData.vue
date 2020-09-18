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
      localStorage.setItem('accounts', undefined)
      localStorage.setItem('categories', undefined)
      localStorage.setItem('history', undefined)
      localStorage.setItem('settings', undefined)
    }
  }
}
</script>
