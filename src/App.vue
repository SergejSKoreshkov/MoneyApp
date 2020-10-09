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
    background: radial-gradient(#551614, #000)
  }
  .main-dark::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-25deg, #70263e, #0a0c20, #000000aa, #000000aa, #000);
  }
  .main-light {
    background: radial-gradient(#b45271, #fff)
  }
  .main-light::before {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-25deg, #e7c1cd, #c6caf1, #ffffffaa, #ffffffaa, #fff);
  }
  .theme--dark.v-card {
    background-color: #131313!important;
  }
</style>
