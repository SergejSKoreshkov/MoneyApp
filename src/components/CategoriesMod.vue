<template>
    <v-container>
        <ConfirmModal
        :show="showCDM"
        title="Test"
        text="Allow to delete this?"
        :callbackSuccess="removeCategory"
        :callbackFailure="removeCategory"
        />
        <v-card>
            <v-card-title>Manage categories</v-card-title>
            <v-col>
                <v-btn text class="w100">
                    <v-icon class="mr-4">mdi-playlist-plus</v-icon>
                    <span class="mr-4">Add category</span>
                </v-btn>
            </v-col>
            <CategoryItemMod
                name="Car"
                icon="mdi-car"
                :callbackDelete="showCategoryDeleteModal"
            />
        </v-card>
    </v-container>
</template>

<script>
import CategoryItemMod from '@/components/CategoryItemMod.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'

export default {
  name: 'TopCategory',
  components: {
    CategoryItemMod,
    ConfirmModal
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
