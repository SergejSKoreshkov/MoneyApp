<template>
    <v-dialog
        v-model="show"
        class="elevation-0"
        @click:outside="showKeyboard = false"
        persistent
      >
        <v-card>
          <v-card-title>Select category</v-card-title>
          <v-row class="pt-2 ma-0 scroll-mw-300">
            <v-col v-for="category in Object.keys($store.state.categories)" :key="category">
              <v-btn
                depressed
                @click="selectCategory(category)"
                :class="`${$store.state.categories[category].color}--text pa-1 w100`"
              >
                {{ category }}
                <v-icon :class="`${$store.state.categories[category].color}--text`">
                  {{ $store.state.categories[category].icon }}
                </v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              text
              @click="close"
            >
              Close
            </v-btn>
            <v-btn
              text
              @click="confirm"
            >
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
        <Keyboard
          v-show="showKeyboard"
          :callbackSave="confirm"
        ></Keyboard>
      </v-dialog>
</template>

<script>
import Keyboard from '@/components/Keyboard.vue'

export default {
  props: {
    callbackSuccess: Function,
    callbackFailure: Function,
    show: Boolean,
    account: String
  },
  components: {
    Keyboard
  },
  methods: {
    selectCategory (category) {
      this.selectedCategory = category
      this.showKeyboard = true
    },
    close () {
      this.callbackFailure()
    },
    confirm (result) {
      if (result) this.result = result
      this.$store.dispatch('addPayment', {
        account: this.account,
        category: this.selectedCategory,
        value: parseInt(this.result * 100) / 100
      })
      this.callbackSuccess()
    }
  },
  data () {
    return {
      showKeyboard: false,
      selectedCategory: undefined,
      result: 0
    }
  },
  watch: {
    show (newVal, oldVal) {
      if (!newVal) this.showKeyboard = false
    }
  }
}
</script>

<style scoped>
 .v-dialog__content {
   align-items: flex-start;
 }
 .scroll-mw-300 {
   overflow-y: auto;
   max-height: 34vh;
 }
</style>
