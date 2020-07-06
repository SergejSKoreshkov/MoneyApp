<template>
    <v-dialog
        v-model="show"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline">{{ title }}</v-card-title>
          <v-card-text>{{ text }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="callbackFailure()"
            >
              Disagree
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="callbackSuccess()"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
  props: {
    title: String,
    text: String,
    callbackSuccess: Function,
    callbackFailure: Function,
    show: Boolean
  }
}
</script>
