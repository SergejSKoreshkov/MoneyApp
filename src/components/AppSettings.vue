<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>
                App settings
                <v-spacer></v-spacer>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-actions>
                <v-switch
                    v-model="themeSwitchState"
                    :label="`Switch theme to ${themeSwitchState ? 'Light' : 'Dark'}`"
                    @change="switchTheme"
                ></v-switch>
            </v-card-actions>
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
    </v-container>
</template>

<script>
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'AppSettings',
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
  },
  components: {
    BackButton
  }
}
</script>
