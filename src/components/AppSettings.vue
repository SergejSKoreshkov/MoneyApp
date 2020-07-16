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
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
    </v-container>
</template>

<script>
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'AppSettings',
  components: {
    BackButton
  }
}
</script>
