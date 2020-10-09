<template>
  <v-app>
    <v-main
      :class="`main-${$vuetify.theme.dark ? 'dark' : 'light'}`"
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
  .main-dark {
    background: radial-gradient(#3d1455, #000)
  }
  .main-dark::before {
    content: '';
    position: fixed;
    top: 0;
    height: 100vh;
    left: 0;
    right: 0;
    background: linear-gradient(-25deg, #0a0c20, #000000aa, #000000aa, #0a0c20);
  }
  .main-light {
    background: radial-gradient(#7852b4, #fff)
  }
  .main-light::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-25deg, #99a1ff, #ffffffaa, #ffffffaa, #c1c6ff);
  }
  .theme--dark.v-card, .theme--dark.v-app-bar, .theme--dark.v-btn {
    background-color: #131313!important;
  }
</style>
