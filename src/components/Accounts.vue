<template>
  <v-container>
    <v-card class="pa-1">
      <v-row class="text-center">
        <v-col class="pa-2" v-for="item in $store.state.accounts" :key="item.name" cols="12">
          <AccountItem
            :color="item.color"
            :name="item.name"
            :icon="item.icon"
            :total="item.total"
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
import AccountItem from '@/components/AccountItem.vue'
export default {
  name: 'MainAccounts',
  components: {
    AccountItem
  }
}
</script>
