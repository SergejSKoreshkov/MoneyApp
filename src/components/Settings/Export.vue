<template>
    <v-btn @click="exportData" depressed class="w100 mt-4">
        Export data as json
        <v-icon>mdi-download</v-icon>
    </v-btn>
</template>

<script>
export default {
  name: 'Export',
  methods: {
    exportData () {
      try {
        const textData = JSON.stringify(this.$store.state)
        const blob = new Blob([textData], { type: 'text/plain' })
        const link = document.createElement('a')
        link.download = `money_app_${new Date().toISOString()}.json`
        link.href = window.URL.createObjectURL(blob)
        link.dataset.downloadurl = ['text/json', link.download, link.href].join(':')
        link.click()
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>
