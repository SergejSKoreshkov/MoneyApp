<template>
    <div>
        <AddModal
          :color="color"
          :account="name"
          :icon="icon"
          :show="showModal"
          :callbackFailure="() => showModal = false"
          :callbackSuccess="() => showModal = false"
        ></AddModal>
        <v-list-item>
        <v-list-item-avatar>
            <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
            <v-list-item-subtitle>{{ name }}</v-list-item-subtitle>
            <v-list-item-title>{{ total.toFixed(2) + curr }}</v-list-item-title>
        </v-list-item-content>
        <v-spacer></v-spacer>
        <v-list-item-action>
            <v-btn
              depressed
              outlined
              :class="`${color}--text`"
              @click="addTransaction"
            >
              <v-icon>mdi-coin</v-icon>
            </v-btn>
        </v-list-item-action>
        </v-list-item>
    </div>
</template>

<script>
import AddModal from '@/components/AddModal.vue'

export default {
  props: {
    color: String,
    name: String,
    icon: String,
    total: Number
  },
  components: {
    AddModal
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    curr () {
      return ' ' + this.$store.state.settings.currency
    }
  },
  methods: {
    addTransaction () {
      this.showModal = true
    }
  }
}
</script>
