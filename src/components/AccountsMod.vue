<template>
    <v-container>
        <ConfirmModal
        :show="showPDM"
        title="Test"
        text="Allow to delete this?"
        :callbackSuccess="removeAccount"
        :callbackFailure="closeDialog"
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
                <v-btn depressed class="w100" @click="$router.push({ path: '/addOrEdit',query: { type: 'account' }})">
                    <v-icon class="mr-4">mdi-playlist-plus</v-icon>
                    <span class="mr-4">Add account</span>
                </v-btn>
            </v-col>
            <v-row>
              <v-col class="pa-2 pt-1 pb-1" v-for="item in Object.keys($store.state.accounts)" :key="item" cols="12">
                <AccountItemMod
                  :name="item"
                  :color="$store.state.accounts[item].color"
                  :icon="$store.state.accounts[item].icon"
                  :total="$store.state.accounts[item].total"
                  :callbackDelete="showAccountDeleteModal(item)"
                  :callbackEdit="editAccount(item)"
                />
              </v-col>
            </v-row>
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
    </v-container>
</template>

<script>
import AccountItemMod from '@/components/AccountItemMod.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'AccountsMod',
  components: {
    AccountItemMod,
    ConfirmModal,
    BackButton
  },
  data () {
    return {
      showPDM: false
    }
  },
  methods: {
    showAccountDeleteModal (name) {
      return () => {
        this.accountToDelete = name
        this.showPDM = true
      }
    },
    removeAccount () {
      this.$store.dispatch('removeAccount', { name: this.accountToDelete })
      this.showPDM = false
    },
    editAccount (name) {
      return () => {
        this.$router.push({
          path: '/addOrEdit',
          query: { name, type: 'account' }
        })
      }
    },
    closeDialog () {
      this.showCDM = false
    }
  }
}
</script>
