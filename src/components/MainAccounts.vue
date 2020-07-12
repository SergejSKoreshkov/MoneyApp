<template>
  <v-container>
    <v-card class="pa-1">
      <v-row class="text-center">
        <v-col class="pa-2" v-for="item in Object.keys($store.state.accounts)" :key="item" cols="12">
          <Account
            :color="$store.state.accounts[item].color"
            :name="item"
            :icon="$store.state.accounts[item].icon"
            :total="$store.state.accounts[item].total"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn text class="w100" @click="$router.push('/accounts')">
            <v-icon class="mr-4">mdi-bank</v-icon>
            <span class="mr-4">Manage accounts</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import Account from '@/components/Account.vue'
export default {
  name: 'MainAccounts',
  components: {
    Account
  }
}
</script>
