<template>
    <div>
        <v-app-bar>
            <v-app-bar-nav-icon @click="$store.commit('setIsNavBarOpen', true)"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="$store.state.isNavBarOpen"
            absolute
        >
            <v-list>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="@/assets/avatar.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ totalBalance.toFixed(2) }}$</v-list-item-title>
                        <v-list-item-subtitle>Total balance</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <AccountsNavItem
                    v-for="item in Object.keys($store.state.accounts)"
                    :key="item"
                    :name="item"
                    :color="$store.state.accounts[item].color"
                    :icon="$store.state.accounts[item].icon"
                    :total="$store.state.accounts[item].total"
                />
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
            <v-list-item-group>
                <v-list-item
                    v-for="page in pages"
                    :key="page.src"
                    link
                    @click="$router.push(page.src)"
                >
                    <v-list-item-icon>
                        <v-icon>{{ page.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ page.name }}</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import AccountsNavItem from '@/components/AccountsNavItem'

export default {
  computed: {
    showLocal () {
      return this.show
    },
    totalBalance () {
      return this.$store.state.history.reduce((acc, el) => acc - el.value, 0)
    }
  },
  data () {
    return {
      pages: [
        { name: 'Home', icon: 'mdi-home', src: '/' },
        { name: 'Manage accounts', icon: 'mdi-bank', src: '/accounts' },
        { name: 'Manage categories', icon: 'mdi-format-list-bulleted-square', src: '/categories' },
        { name: 'Settings', icon: 'mdi-cogs', src: '/settings' }
      ]
    }
  },
  components: {
    AccountsNavItem
  }
}
</script>

<style lang="less" scoped>
    .v-navigation-drawer {
        z-index: 999 !important;
    }
</style>
