<template>
    <v-hover
      v-slot:default="{ hover }"
    >
        <v-list-item two-line>
            <v-list-item-avatar>
                <v-icon :class="`${hover ? 'text--darken-2 blue' : color}--text`">{{ icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
                <v-list-item-title>{{ total.toFixed(2) }}$</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-hover>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
    name: String,
    total: Number
  }
}
</script>
