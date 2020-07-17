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
                      <v-icon :color="color" @click="showIconSelect = true">{{ icon }}</v-icon>
                      <v-dialog v-model="showIconSelect">
                          <v-card>
                              <v-card-title>
                                  <v-text-field
                                    placeholder="Search icons"
                                    append-icon="mdi-magnify"
                                    v-model="iconsFilter"
                                  ></v-text-field>
                              </v-card-title>
                              <v-card-text>
                                <v-row>
                                  <v-col v-for="icon in iconsJSONFiltered" :key="icon" cols="2">
                                    <v-btn icon @click="setIcon(`mdi-${icon}`)">
                                      <v-icon>mdi-{{ icon }}</v-icon>
                                    </v-btn>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                          </v-card>
                      </v-dialog>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-text-field v-model="name" placeholder="Car" :color="color"></v-text-field>
                    </v-list-item-content>
                  </v-list-item>
              </v-col>
              <v-col class="pa-2 pt-0 pb-1" cols="12">
                  <v-list-item>
                  <v-select class="no-underline" :color="color" v-model="color" :chips="true" :items="colors">
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
            { label: 'done', icon: 'mdi-check', action: addCategory }
          ]"
        />
    </v-container>
</template>

<script>
import BackButton from '@/components/BackButton.vue'
import * as colors from '@/helpers/colorList'
import iconsJSON from '@/assets/output.json'

export default {
  components: {
    BackButton
  },
  data () {
    return {
      color: 'amber',
      name: '',
      icon: 'mdi-car',
      colors: colors.colors,
      iconsFilter: '',
      showIconSelect: false
    }
  },
  computed: {
    iconsJSONFiltered () {
      return iconsJSON.filter(el => this.iconsFilter.length > 1 && el.includes(this.iconsFilter))
    }
  },
  methods: {
    addCategory () {
      this.$store.dispatch('addCategory', {
        name: this.name,
        color: this.color,
        icon: this.icon
      })
      this.$router.go(-1)
    },
    setIcon (icon) {
      this.icon = icon
      this.showIconSelect = false
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
  .no-underline .v-input__slot::after {
    display: none;
  }
  .no-underline .v-input__slot::before {
    display: none;
  }
</style>
