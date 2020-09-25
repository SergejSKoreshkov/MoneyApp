<template>
        <v-list-item two-line>
            <v-list-item-avatar>
                <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
                <v-list-item-title>{{ (total || 0).toFixed(2) }}$</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
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
