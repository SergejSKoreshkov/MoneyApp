<template>
    <v-dialog
        v-model="show"
        class="elevation-0"
        @click:outside="showKeyboard = false"
        persistent
      >
        <v-card>
          <v-card-title style="text-transform: capitalize;">{{ selectedTransactionType }}: {{ account }}<v-icon>mdi-menu-right</v-icon>{{ selectedName }}</v-card-title>
          <v-row class="ma-0">
            <v-col cols="12" class="d-flex" style="justify-content: space-between;">
              <v-badge
                v-for="(item, index) in transactionTypes"
                :key="item.type"
                :value="selectedTransactionType === item.type"
                :color="item.color"
                :content="item.type"
                :left="(index % 3) > 1"
                transition="slide-y-transition"
              >
                <v-btn
                  depressed
                  :class="selectedTransactionType === item.type ? `${item.color}--text` : 'grey--text'"
                  @click="selectedTransactionType = item.type"
                >
                  <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
              </v-badge>
            </v-col>
          </v-row>
          <v-row
            v-if="selectedTransactionType !== 'transfer'"
            class="pt-2 ma-0 scroll-mw-300"
          >
            <v-col
              cols="3" class="text-center"
              v-for="(category, key, index) in $store.state.categories"
              :key="category.name"
            >
              <v-badge
                :value="category.name === selectedName"
                :color="category.color"
                :content="category.name"
                :left="(index % 4) > 1"
                transition="slide-y-transition"
              >
                  <v-btn
                    icon
                    outlined
                    fab
                    @click="selectName(category.name)"
                    :class="`${category.color}--text`"
                  >
                    <v-icon :class="`${category.color}--text`">
                      {{ category.icon }}
                    </v-icon>
                  </v-btn>
              </v-badge>
            </v-col>
          </v-row>
          <v-row
            v-else
            class="pt-2 ma-0 scroll-mw-300"
          >
            <v-col
              cols="3" class="text-center"
              v-for="(accountItem, key, index) in $store.state.accounts"
              v-show="accountItem.name !== account"
              :key="accountItem.name"
            >
              <v-badge
                :value="accountItem.name === selectedName"
                :color="accountItem.color"
                :content="accountItem.name"
                :left="(index % 4) > 1"
                transition="slide-y-transition"
              >
                  <v-btn
                    icon
                    outlined
                    fab
                    @click="selectName(accountItem.name)"
                    :class="`${accountItem.color}--text`"
                  >
                    <v-icon :class="`${accountItem.color}--text`">
                      {{ accountItem.icon }}
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
          </v-card-actions>
        </v-card>
        <Keyboard
          v-if="showKeyboard"
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
    selectName (categoryOrAccount) {
      this.selectedName = categoryOrAccount
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
        category: this.selectedName,
        type: this.selectedTransactionType,
        total: this.result
      })
      this.callbackSuccess()
    }
  },
  data () {
    return {
      showKeyboard: false,
      selectedName: 'please select',
      selectedTransactionType: 'spending',
      transactionTypes: [
        { type: 'spending', color: 'red', icon: 'mdi-minus' },
        { type: 'income', color: 'green', icon: 'mdi-plus' },
        { type: 'transfer', color: 'blue', icon: 'mdi-bank-transfer' }
      ],
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
 .v-dialog {
   box-shadow: none !important;
 }
</style>
