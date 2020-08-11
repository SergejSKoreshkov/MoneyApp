<template>
    <div class="keyboard">
        <v-row>
            <v-col cols="3" v-for="btnItem in buttons" :key="btnItem.text">
                <v-btn text class="w100">{{ btnItem.text }}</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'Keyboard',
  data () {
    return {
      buttons: [
        { text: 7, icon: false },
        { text: 8, icon: false },
        { text: 9, icon: false },
        { text: '', icon: false },
        { text: 4, icon: false },
        { text: 5, icon: false },
        { text: 6, icon: false },
        { text: '', icon: false },
        { text: 1, icon: false },
        { text: 2, icon: false },
        { text: 3, icon: false },
        { text: '', icon: false },
        { text: '', icon: false },
        { text: 0, icon: false },
        { text: '', icon: false },
        { text: '', icon: false }
      ]
    }
  }
}
</script>

<style scoped>
    .col-3 {
        padding: 0;
    }
</style>
