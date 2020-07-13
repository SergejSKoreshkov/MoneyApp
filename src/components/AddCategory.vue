<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>
                Add category
                <v-spacer></v-spacer>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-card-title>
            <v-row>
              <v-col class="pa-2 pt-1 pb-1" cols="12">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-btn icon>
                        <v-icon :style="`color: ${color};`">mdi-car</v-icon>
                      </v-btn>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-text-field :style="`color: ${color} !important;`"></v-text-field>
                    </v-list-item-content>
                  </v-list-item>
              </v-col>
              <v-col class="pa-2 pt-1 pb-1" cols="12">
                  <v-color-picker
                    class="w100"
                    hide-canvas
                    hide-inputs
                    hide-mode-switch
                    show-swatches
                    v-model="color"
                  >
                  </v-color-picker>
              </v-col>
            </v-row>
        </v-card>
        <BackButton
          :buttons="[
            { label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) },
            { label: 'done', icon: 'mdi-check', action: () => this.$store.dispatch('addCategory') }
          ]"
        />
    </v-container>
</template>

<script>
import BackButton from '@/components/BackButton.vue'

export default {
  components: {
    BackButton
  },
  data () {
    return {
      color: '#ff4589'
    }
  }
}
</script>

<style lang="less" scoped>
  .w100 {
    width: 100%;
    max-width: unset !important;
  }
</style>
