<template>
    <div>
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <v-list-item v-on="on" v-bind="attrs">
            <v-list-item-avatar>
                <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{ name }}</v-list-item-title>
                <v-list-item-subtitle>{{ lastTransactionOrDate }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <span>{{ total.toFixed(2) + curr }}</span>
            </v-list-item-action>
            </v-list-item>
        </template>

        <v-card v-if="enableMenu" class="rounded-0">
          <v-card-actions class="justify-space-evenly rounded-0">
            <v-btn :class="`${color}--text`" text @click="menu = false">
              Edit <v-icon>mdi-pen</v-icon>
            </v-btn>
            <v-btn class="red--text" text @click="removePayment">
              Remove <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    color: String,
    account: String,
    type: String,
    last: Number,
    time: Number,
    total: Number,
    enableMenu: Boolean
  },
  methods: {
    removePayment () {
      console.log(this.enableMenu, this.account, this.total)
      if (!this.enableMenu || !this.account || !this.total || !this.time) return
      this.$store.dispatch('removePayment', {
        account: this.account,
        category: this.name,
        type: this.type,
        total: this.total,
        time: this.time
      })
    }
  },
  computed: {
    lastTransactionOrDate () {
      if (this.last) return 'Last: ' + this.last.toFixed(2) + this.curr
      else if (this.time) return new Date(this.time).toUTCString()
      return ''
    },
    curr () {
      return ' ' + this.$store.state.settings.currency
    }
  },
  data () {
    return {
      menu: null
    }
  }
}
</script>

<style>
 .rounded-0, .v-menu__content {
   border-radius: 0 0 5px 5px !important;
 }
 .v-menu__content {
   background-color: #131313 !important;
 }
</style>
