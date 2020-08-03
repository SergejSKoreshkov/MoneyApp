<template>
    <div>
      <v-list-item>
      <v-list-item-avatar>
          <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
          <v-list-item-title>{{ name }}</v-list-item-title>
      </v-list-item-content>
      <v-list-item-action class="d-flex flex-row">
          <v-btn @click="editCategory" icon :class="`${color}--text`">
              <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteCategory">
              <v-icon>mdi-delete</v-icon>
          </v-btn>
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
    callbackDelete: Function,
    callbackEdit: Function
  },
  methods: {
    deleteCategory () {
      this.callbackDelete()
    },
    editCategory () {
      this.callbackEdit()
    }
  }
}
</script>
