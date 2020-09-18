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
            <v-card-text>
                <ThemeSwitch/>
                <v-divider></v-divider>
                <PeriodSelect/>
                <v-divider></v-divider>
                <CleanData/>
            </v-card-text>
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
    </v-container>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import ThemeSwitch from '@/components/Settings/ThemeSwitch.vue'
import PeriodSelect from '@/components/Settings/PeriodSelect.vue'
import CleanData from '@/components/Settings/CleanData.vue'

export default {
  name: 'AppSettings',
  components: {
    BackButton,
    ThemeSwitch,
    PeriodSelect,
    CleanData
  }
}
</script>
