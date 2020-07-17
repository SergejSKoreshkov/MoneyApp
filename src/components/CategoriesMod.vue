<template>
    <v-container>
        <ConfirmModal
        :show="showCDM"
        :title="`Remove ${categoryToDelete}`"
        text="Remove category ?"
        :callbackSuccess="removeCategory"
        :callbackFailure="closeDialog"
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
                <v-btn depressed class="w100" @click="$router.push('/addcategory')">
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
                  :callbackDelete="showCategoryDeleteModal(item)"
                />
              </v-col>
            </v-row>
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
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
      showCDM: false,
      categoryToDelete: null
    }
  },
  methods: {
    showCategoryDeleteModal (name) {
      return () => {
        this.categoryToDelete = name
        this.showCDM = true
      }
    },
    removeCategory () {
      this.$store.dispatch('removeCategory', { name: this.categoryToDelete })
      this.showCDM = false
    },
    closeDialog () {
      this.showCDM = false
    }
  }
}
</script>
