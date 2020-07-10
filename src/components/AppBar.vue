<template>
    <div>
        <v-app-bar>
            <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer
            v-model="show"
            absolute
        >
            <v-list>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="@/assets/avatar.jpg">
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title>4000.00$</v-list-item-title>
                        <v-list-item-subtitle>Total balance</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <PaymentNavItem
                    v-for="item in Object.keys($store.state.payments)"
                    :key="item"
                    :name="item"
                    :color="$store.state.payments[item].color"
                    :icon="$store.state.payments[item].icon"
                    :total="$store.state.payments[item].total"
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
import PaymentNavItem from '@/components/PaymentNavItem'

export default {
  data () {
    return {
      show: false,
      pages: [
        { name: 'Home', icon: 'mdi-home', src: '/' },
        { name: 'Manage payment methods ', icon: 'mdi-bank', src: '/payments' },
        { name: 'Manage categories', icon: 'mdi-format-list-bulleted-square', src: '/categories' },
        { name: 'Settings', icon: 'mdi-cogs', src: '/settings' }
      ]
    }
  },
  components: {
    PaymentNavItem
  }
}
</script>

<style lang="less" scoped>
    .v-navigation-drawer {
        z-index: 999 !important;
    }
</style>
