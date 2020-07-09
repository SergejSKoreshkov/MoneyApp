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
      <v-list-item-action class="d-flex flex-row">
          <v-btn @click="editCategory" icon :class="`${color}--text`">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn @click="deleteCategory" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
      </v-list-item-action>
      </v-list-item>
    </div>
</template>

<script>
export default {
  props: {
    color: String,
    icon: String,
    name: String,
    callbackDelete: Function,
    callbackEdit: Function
  },
  methods: {
    deleteCategory () {
      this.callbackDelete(this.name)
    },
    editCategory () {
      this.callbackEdit(this.name)
    }
  }
}
</script>
