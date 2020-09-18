<template>
    <v-switch
        v-model="themeSwitchState"
        :label="`Switch theme to ${themeSwitchState ? 'Light' : 'Dark'}`"
        @change="switchTheme"
    ></v-switch>
</template>

<script>
export default {
  name: 'ThemeSwitch',
  methods: {
    switchTheme () {
      this.$store.dispatch('setTheme', { theme: this.themeSwitchState })
      this.$vuetify.theme.dark = this.themeSwitchState
    }
  },
  data () {
    return {
      themeSwitchState: !!this.$store.state.settings.theme
    }
  }
}
</script>
