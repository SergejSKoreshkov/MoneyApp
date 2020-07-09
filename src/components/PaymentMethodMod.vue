<template>
    <v-container>
        <ConfirmModal
        :show="showPDM"
        title="Test"
        text="Allow to delete this?"
        :callbackSuccess="removeCategory"
        :callbackFailure="removeCategory"
        />
        <v-card class="pa-1">
            <v-card-title>Manage payment methods</v-card-title>
            <v-col class="pa-2">
                <v-btn depressed class="w100">
                    <v-icon class="mr-4">mdi-playlist-plus</v-icon>
                    <span class="mr-4">Add payment method</span>
                </v-btn>
            </v-col>
            <v-row>
              <v-col class="pa-2 pt-1 pb-1" v-for="item in Object.keys($store.state.payments)" :key="item" cols="12">
                <PaymentMod
                  :name="item"
                  :color="$store.state.payments[item].color"
                  :icon="$store.state.payments[item].icon"
                  :callbackDelete="showPaymentDeleteModal"
                  :callbackEdit="showPaymentDeleteModal"
                />
              </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import PaymentMod from '@/components/PaymentMod.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'

export default {
  name: 'TopCategory',
  components: {
    PaymentMod,
    ConfirmModal
  },
  data () {
    return {
      showPDM: false
    }
  },
  methods: {
    showPaymentDeleteModal () {
      this.showPDM = true
    },
    removeCategory () {
      console.log(123)
      this.showPDM = false
    }
  }
}
</script>
