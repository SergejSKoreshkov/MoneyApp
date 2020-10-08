<template>
  <v-app>
    <v-main
      v-touch="{
        left: () => swipe(false),
        right: () => swipe(true),
      }"
    >
      <AppBar/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'App',
  components: {
    AppBar
  },
  methods: {
    swipe (direction) {
      this.$store.commit('setIsNavBarOpen', direction)
    }
  },
  mounted () {
    this.$vuetify.theme.dark = this.$store.state.settings.theme
  }
}
</script>

<style lang="less">
  .h50 {
    height: 50px !important;
  }
  .w100 {
    width: 100% !important;
  }
  .w45 {
    width: 45% !important;
  }
  .justify-space-evenly {
    justify-content: space-evenly;
  }
</style>
