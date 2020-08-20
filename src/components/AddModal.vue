<template>
    <v-dialog
        v-model="show"
        class="elevation-0"
        persistent
      >
        <v-card>
          <v-row class="pt-2 ma-0">
            <v-col v-for="i in new Array(9).fill(1)" :key="i" cols="3">
              <v-btn text :class="`${color}--text pa-1 w100`">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
                      </v-list-item-title>
                    <v-list-item-subtitle :class="`${color}--text text-caption`">Swedbank</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
              </v-btn>
            </v-col>
          </v-row>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click="callbackFailure()"
            >
              Close
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="callbackSuccess()"
            >
              Confirm
            </v-btn>
          </v-card-actions>
        </v-card>
        <Keyboard v-show="showKeyboard"></Keyboard>
      </v-dialog>
</template>

<script>
import Keyboard from '@/components/Keyboard.vue'

export default {
  props: {
    title: String,
    color: String,
    icon: String,
    callbackSuccess: Function,
    callbackFailure: Function,
    show: Boolean
  },
  components: {
    Keyboard
  },
  data () {
    return {
      showKeyboard: true
    }
  }
}
</script>

<style scoped>
 .v-dialog__content {
   align-items: flex-start;
 }
</style>
