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
            <v-card-title>
                Manage accounts
                <v-spacer></v-spacer>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-card-title>
            <v-col class="pa-2">
                <v-btn depressed class="w100">
                    <v-icon class="mr-4">mdi-playlist-plus</v-icon>
                    <span class="mr-4">Add account</span>
                </v-btn>
            </v-col>
            <v-row>
              <v-col class="pa-2 pt-1 pb-1" v-for="item in Object.keys($store.state.accounts)" :key="item" cols="12">
                <AccountMod
                  :name="item"
                  :color="$store.state.accounts[item].color"
                  :icon="$store.state.accounts[item].icon"
                  :callbackDelete="showAccountDeleteModal"
                  :callbackEdit="showAccountDeleteModal"
                />
              </v-col>
            </v-row>
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
    </v-container>
</template>

<script>
import AccountMod from '@/components/AccountMod.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'TopCategory',
  components: {
    AccountMod,
    ConfirmModal,
    BackButton
  },
  data () {
    return {
      showPDM: false
    }
  },
  methods: {
    showAccountDeleteModal () {
      this.showPDM = true
    },
    removeCategory () {
      console.log(123)
      this.showPDM = false
    }
  }
}
</script>
