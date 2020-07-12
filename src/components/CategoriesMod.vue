<template>
    <v-container>
        <ConfirmModal
        :show="showCDM"
        title="Test"
        text="Allow to delete this?"
        :callbackSuccess="removeCategory"
        :callbackFailure="removeCategory"
        />
        <v-card class="pa-1">
            <v-card-title>
                Manage categories
                <v-spacer></v-spacer>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-card-title>
              <v-col class="pa-2">
                <v-btn depressed class="w100">
                    <v-icon class="mr-4">mdi-playlist-plus</v-icon>
                    <span class="mr-4">Add category</span>
                </v-btn>
              </v-col>
            <v-row>
              <v-col class="pa-2 pt-1 pb-1" v-for="item in Object.keys($store.state.categories)" :key="item" cols="12">
                <CategoryItemMod
                  :name="item"
                  :icon="$store.state.categories[item].icon"
                  :color="$store.state.categories[item].color"
                  :callbackDelete="showCategoryDeleteModal"
                />
              </v-col>
            </v-row>
        </v-card>
        <BackButton/>
    </v-container>
</template>

<script>
import CategoryItemMod from '@/components/CategoryItemMod.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'TopCategory',
  components: {
    CategoryItemMod,
    ConfirmModal,
    BackButton
  },
  data () {
    return {
      showCDM: false
    }
  },
  methods: {
    showCategoryDeleteModal () {
      this.showCDM = true
    },
    removeCategory () {
      console.log(123)
      this.showCDM = false
    }
  }
}
</script>
