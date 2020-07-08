<template>
    <div>
      <v-list-item>
      <v-list-item-avatar>
          <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
          <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
          <v-list-item-title>1000.00$</v-list-item-title>
      </v-list-item-content>
      <v-spacer></v-spacer>
      <v-list-item-action>
          <v-btn depressed :class="`${color}--text`">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
      </v-list-item-action>
      </v-list-item>
    </div>
</template>

<script>
export default {
  props: {
    color: String,
    name: String,
    icon: String
  }
}
</script>
