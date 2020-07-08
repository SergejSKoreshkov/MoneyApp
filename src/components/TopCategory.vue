<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>Top category</v-card-title>
            <CategoryItem
                name="Car"
                icon="mdi-car"
                :color="getRandomColor()"
                :total="123"
                :last="15"
            />
            <CategoryItem
                name="House"
                icon="mdi-home"
                :color="getRandomColor()"
                :total="310"
                :last="65.29"
            />
            <CategoryItem
                name="Pizza"
                icon="mdi-pizza"
                :color="getRandomColor()"
                :total="228.69"
                :last="2.09"
            />
            <v-col>
                <v-btn text class="w100" @click="$router.push('/categories')">
                    <v-icon class="mr-4">mdi-format-list-bulleted-square</v-icon>
                    <span class="mr-4">Manage categories</span>
                </v-btn>
            </v-col>
        </v-card>
    </v-container>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'
import * as colorList from '@/helpers/colorList'

export default {
  name: 'TopCategory',
  methods: {
    getRandomColor: () => colorList.colors[Math.floor(Math.random() * colorList.colors.length)]
  },
  components: {
    CategoryItem
  }
}
</script>
