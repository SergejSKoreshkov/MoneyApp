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
                  <v-icon>mdi-car</v-icon>
                  <v-spacer></v-spacer>
                  <v-input></v-input>
              </v-col>
              <v-col class="pa-2 pt-1 pb-1" cols="12">
                  <v-color-picker
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
        <BackButton/>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      color: '#ff4589'
    }
  }
}
</script>
