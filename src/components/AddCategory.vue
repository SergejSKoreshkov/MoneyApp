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
              <v-col class="pa-2 pt-1 pb-0" cols="12">
                  <v-list-item>
                    <v-list-item-avatar>
                      <v-btn icon>
                        <v-icon :class="`${color}--text`">{{ icon }}</v-icon>
                      </v-btn>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-text-field v-model="name" placeholder="Car" :color="color"></v-text-field>
                    </v-list-item-content>
                  </v-list-item>
              </v-col>
              <v-col class="pa-2 pt-0 pb-1" cols="12">
                  <v-list-item>
                  <v-select :color="color" v-model="color" :chips="true" :items="items">
                    <template v-slot:selection="{ item }">
                      <v-chip :class="`${item}`">
                        <span>{{ item }}</span>
                      </v-chip>
                    </template>
                    <template v-slot:item="{ item }">
                      <v-chip :class="`${item}`">
                        <span>{{ item }}</span>
                      </v-chip>
                    </template>
                  </v-select>
                  </v-list-item>
              </v-col>
            </v-row>
        </v-card>
        <BackButton
          :buttons="[
            { label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) },
            { label: 'done', icon: 'mdi-check', action: () => this.$store.dispatch('addCategory', { name, color, icon }) }
          ]"
        />
    </v-container>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import * as colors from '@/helpers/colorList'
export default {
  components: {
    BackButton
  },
  data () {
    return {
      color: 'amber',
      name: '',
      icon: 'mdi-car',
      items: colors.colors
    }
  }
}
</script>

<style lang="less">
  .w100 {
    width: 100%;
    max-width: unset !important;
  }
  .v-color-picker__swatches > div {
    justify-content: space-around !important;
  }
</style>
