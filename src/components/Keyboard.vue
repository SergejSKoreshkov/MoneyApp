<template>
    <div class="keyboard">
        <v-row>
            <v-col cols="3" v-for="btnItem in buttons" :key="btnItem.text">
                <v-btn v-show="btnItem.text" text class="w100">{{ btnItem.text }}</v-btn>
                <v-btn v-show="btnItem.icon" text class="w100">
                  <v-icon>{{ btnItem.icon }}</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'Keyboard',
  methods: {
    add (char) {
      return () => (this.result += char)
    },
    remove () {
      return this.result.slice(0, -1)
    },
    calc () {

    }
  },
  data () {
    return {
      result: '',
      buttons: [
        { text: '7', action: this.add('7') },
        { text: '8', action: this.add('8') },
        { text: '9', action: this.add('9') },
        { text: '-', action: this.add('-') },
        { text: '4', action: this.add('4') },
        { text: '5', action: this.add('5') },
        { text: '6', action: this.add('6') },
        { text: '+', action: this.add('+') },
        { text: '1', action: this.add('1') },
        { text: '2', action: this.add('2') },
        { text: '3', action: this.add('3') },
        { text: '=', action: this.calc },
        { text: '.', action: this.add('.') },
        { text: '0', action: this.add('0') },
        { icon: 'mdi-backspace-outline', action: this.remove },
        { icon: 'mdi-check-circle-outline', action: this.save }
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
