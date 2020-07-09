<template>
    <div>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-list-item>
        <v-list-item-avatar>
            <v-icon :class="`${hover ? 'text--darken-2 blue' : color}--text`">{{ icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
            <v-list-item-title>{{total.toFixed(2)}}$</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-list-item-action>
            <v-btn
              depressed
              :class="`${hover ? 'text--darken-2 blue' : color}--text`"
              @click="addPayment"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-list-item-action>
        </v-list-item>
      </v-hover>
    </div>
</template>

<script>
export default {
  props: {
    color: String,
    name: String,
    icon: String,
    total: Number
  },
  methods: {
    addPayment () {
      this.$store.dispatch('addPayment', {
        payment: this.name,
        category: 'Car',
        value: 100
      })
    }
  }
}
</script>
