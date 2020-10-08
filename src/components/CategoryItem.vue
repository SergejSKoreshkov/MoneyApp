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
                <span>{{ total.toFixed(2) }}</span>
            </v-list-item-action>
            </v-list-item>
        </template>

        <v-card v-if="enableMenu">
          <v-card-actions class="justify-space-evenly">
            <v-btn :class="`${color}--text`" text @click="menu = false">
              Edit <v-icon>mdi-pen</v-icon>
            </v-btn>
            <v-btn class="red--text" text @click="menu = false">
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
    last: Number,
    time: Number,
    total: Number,
    enableMenu: Boolean
  },
  computed: {
    lastTransactionOrDate () {
      if (this.last) return 'Last: ' + this.last.toFixed(2) + '$'
      else if (this.time) return new Date(this.time).toUTCString()
      return ''
    }
  },
  data () {
    return {
      menu: null
    }
  }
}
</script>
