<template>
    <div>
        <v-app-bar>
            <v-app-bar-nav-icon @click="$store.commit('setIsNavBarOpen', true)"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="$store.state.isNavBarOpen"
            absolute
            :dark="$vuetify.theme.dark"
            :class="`main-${$vuetify.theme.dark ? 'dark' : 'light'}`"
        >
            <v-list>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="@/assets/avatar.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>{{ balance.toFixed(2) + curr }}</v-list-item-title>
                        <v-list-item-subtitle>Total balance</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <AccountsNavItem
                    v-for="item in $store.state.accounts"
                    :key="item.name"
                    :name="item.name"
                    :color="item.color"
                    :icon="item.icon"
                    :total="item.total"
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
    curr () {
      return ' ' + this.$store.state.settings.currency
    },
    showLocal () {
      return this.show
    },
    balance () {
      return this.$store.getters.history.reduce((acc, el) => acc + (el.type === 'spending' ? -el.total : el.total), 0)
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
