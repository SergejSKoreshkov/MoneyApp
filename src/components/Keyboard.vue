<template>
  <div>
      <div v-bind:style="{ height: `${height}px`}" id="keyboard-padding"></div>
      <v-card ref="keyboard-card" class="keyboard pa-1 pb-4">
          <v-row class="ma-0">
              <v-col cols="12">
                <v-text-field placeholder="Price" v-model="text" hide-details outlined disabled></v-text-field>
              </v-col>
              <v-col cols="3" v-for="btnItem in buttons" :key="btnItem.text">
                  <v-btn :ripple="false" @click="btnItem.action" v-if="btnItem.text" text class="w100 font-weight-bold mt-1 mb-1 text-h6 btn">{{ btnItem.text }}</v-btn>
                  <v-btn :ripple="false" @click="btnItem.action" v-if="btnItem.icon" text class="w100 mt-1 mb-1 text-h6 btn">
                    <v-icon>{{ btnItem.icon }}</v-icon>
                  </v-btn>
              </v-col>
          </v-row>
      </v-card>
  </div>
</template>

<script>
import * as stringMath from 'string-calculator'

export default {
  name: 'Keyboard',
  props: {
    callbackSave: Function
  },
  mounted () {
    this.height = this.$refs['keyboard-card']?.$el.getBoundingClientRect().height
    console.log(this.height)
  },
  methods: {
    add (char) {
      return () => (this.text += char)
    },
    remove () {
      this.text = this.text.slice(0, -1)
    },
    calc () {
      try {
        this.text = Math.abs(stringMath(this.text)).toFixed(2)
      } catch {}
    },
    save () {
      this.calc()
      this.callbackSave(parseFloat(this.text))
      this.text = ''
    }
  },
  data () {
    return {
      text: '',
      height: 0,
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
        { icon: 'mdi-backspace', action: this.remove },
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
    .keyboard {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    #keyboard-padding {
      width: 100%;
      display: block;
      position: relative;
    }
    .btn {
      height: 42px !important;
    }
</style>
