<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>Top category</v-card-title>
            <v-row>
                <v-col class="pa-2 pt-1 pb-1" v-for="item in topCategories" :key="item.name" cols="12">
                    <CategoryItem
                        :name="item.name"
                        :icon="item.icon"
                        :color="item.color"
                        :total="item.total"
                        :last="item.last"
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
  computed: {
    topCategories () {
      const filteredCategories = []
      const history = this.$store.state.history
      return history
        .sort((a, b) => {
          return a.total - b.total
        })
        .filter((el, index) => {
          const isCategoryIncluded = filteredCategories.includes(el.category)
          filteredCategories.push(el.category)
          return index < 5 && !isCategoryIncluded
        })
        .map(el => {
          return {
            ...this.$store.state.categories[el.category],
            name: el.category,
            last: this.$store.state.history
              .sort((a, b) => a.time - b.time)
              .find(transaction => transaction.category === el.category)
              .total
          }
        })
    }
  },
  components: {
    CategoryItem
  }
}
</script>
