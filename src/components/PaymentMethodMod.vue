<template>
    <v-container>
        <ConfirmModal
        :show="showPDM"
        title="Test"
        text="Allow to delete this?"
        :callbackSuccess="removeCategory"
        :callbackFailure="removeCategory"
        />
        <v-card>
            <v-card-title>Manage payment methods</v-card-title>
            <v-col>
                <v-btn depressed class="w100">
                    <v-icon class="mr-4">mdi-playlist-plus</v-icon>
                    <span class="mr-4">Add payment method</span>
                </v-btn>
            </v-col>
            <PaymentMod
                name="Swedbank"
                icon="mdi-credit-card"
                color="orange"
                :callbackDelete="showPaymentDeleteModal"
                :callbackEdit="showPaymentDeleteModal"
            />
            <PaymentMod
                name="Cash"
                icon="mdi-currency-usd"
                color="green"
                :callbackDelete="showPaymentDeleteModal"
                :callbackEdit="showPaymentDeleteModal"
            />
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
