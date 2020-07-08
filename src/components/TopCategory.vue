<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>Top category</v-card-title>
            <v-row>
                <v-col class="pa-2 pt-0 pb-0" cols="12">
                    <CategoryItem
                        name="Car"
                        icon="mdi-car"
                        :color="getRandomColor()"
                        :total="123"
                        :last="15"
                    />
                </v-col>
                <v-col class="pa-2 pt-0 pb-0" cols="12">
                    <CategoryItem
                        name="Car"
                        icon="mdi-car"
                        :color="getRandomColor()"
                        :total="123"
                        :last="15"
                    />
                </v-col>
            </v-row>
            <v-btn text class="w100" @click="$router.push('/categories')">
                <v-icon class="mr-4">mdi-format-list-bulleted-square</v-icon>
                <span class="mr-4">Manage categories</span>
            </v-btn>
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
