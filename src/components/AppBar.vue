<template>
    <div>
        <v-app-bar>
            <v-app-bar-nav-icon @click="show = !show"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="show" absolute>
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
            </v-list>

            <v-divider></v-divider>

            <v-list nav dense>
            <v-list-item-group>
                <v-list-item link @click="$router.push('/')">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item link @click="$router.push('/')">
                    <v-list-item-icon>
                        <v-icon>mdi-bank</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Manage payment methods</v-list-item-title>
                </v-list-item>
                <v-list-item link @click="$router.push('/')">
                    <v-list-item-icon>
                        <v-icon>mdi-playlist-edit</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Manage categories</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  }
}
</script>
