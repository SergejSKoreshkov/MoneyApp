<template>
    <v-container>
        <v-card>
            <v-card-title>Top category</v-card-title>
            <CategoryItem
                name="Car"
                icon="mdi-car"
                :total="123"
                :last="15"
            />
            <CategoryItem
                name="House"
                icon="mdi-home"
                :total="310"
                :last="65.29"
            />
            <CategoryItem
                name="Pizza"
                icon="mdi-pizza"
                :total="228.69"
                :last="2.09"
            />
            <v-col>
                <v-btn class="w100" @click="$router.push('/categories')">
                    <v-icon class="mr-4">mdi-playlist-edit</v-icon>
                    <span class="mr-4">Manage categories</span>
                </v-btn>
            </v-col>
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
