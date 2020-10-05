<template>
    <v-dialog
        v-model="show"
        class="elevation-0"
        @click:outside="showKeyboard = false"
        persistent
      >
        <v-card>
          <v-card-title>Select category</v-card-title>
          <v-row class="ma-0">
            <v-col cols="12" class="d-flex" style="justify-content: space-between;">
              <v-btn
                depressed
                :class="selectIncome ? 'green--text' : 'grey--text'"
                @click="selectIncome = true"
              >
                Income
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn
                depressed
                :class="!selectIncome ? 'red--text' : 'grey--text'"
                @click="selectIncome = false"
              >
                Spending
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="pt-2 ma-0 scroll-mw-300">
            <v-col cols="3" class="text-center" v-for="(category, key, index) in $store.state.categories" :key="category.name">
              <v-badge
                :value="category.name === selectedCategory"
                :color="category.color"
                :content="category.name"
                :left="(index % 4) > 1"
                transition="slide-y-transition"
              >
                  <v-btn
                    icon
                    @click="selectCategory(category.name)"
                    :class="`${category.color}--text`"
                  >
                    <v-icon :class="`${category.color}--text`">
                      {{ category.icon }}
                    </v-icon>
                  </v-btn>
              </v-badge>
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
              @click="confirm()"
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
      if (!this.result) return

      this.$store.dispatch('addPayment', {
        account: this.account,
        category: this.selectedCategory,
        type: this.selectIncome ? 'income' : 'spending',
        total: this.result
      })
      this.callbackSuccess()
    }
  },
  data () {
    return {
      showKeyboard: false,
      selectedCategory: undefined,
      selectIncome: false,
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

<style>
 .v-dialog__content {
   align-items: flex-start;
 }
 .scroll-mw-300 {
   overflow-y: auto;
   max-height: 34vh;
 }
 .v-badge__badge {
   z-index: 999;
 }
</style>
