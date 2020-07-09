<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>Top category</v-card-title>
            <v-row>
                <v-col class="pa-2 pt-1 pb-1" v-for="item in Object.keys($store.state.categories)" :key="item" cols="12">
                    <CategoryItem
                        :name="item"
                        :icon="$store.state.categories[item].icon"
                        :color="$store.state.categories[item].color"
                        :total="$store.state.categories[item].total"
                        :last="15"
                    />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn text class="w100" @click="$router.push('/categories')">
                        <v-icon class="mr-4">mdi-format-list-bulleted-square</v-icon>
                        <span class="mr-4">Manage categories</span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'

export default {
  name: 'TopCategory',
  components: {
    CategoryItem
  }
}
</script>
