<template>
    <div>
            <v-list-item>
            <v-list-item-avatar>
                <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>{{ name }}</v-list-item-title>
                <v-list-item-subtitle>Last: {{ last.toFixed(2) }}$</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                <span>{{ total.toFixed(2) }}$</span>
            </v-list-item-action>
            </v-list-item>
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    icon: String,
    color: String,
    last: Number,
    total: Number
  }
}
</script>
