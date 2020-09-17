<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>
                Spendings
                <v-spacer></v-spacer>
                <v-btn icon @click="$router.go(-1)">
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-card-title>
            <v-row>
                <v-col class="pa-2 pt-1 pb-1" v-for="category in categories" :key="category.name" cols="12">
                    <CategoryItem
                        :name="category.name"
                        :icon="category.icon"
                        :color="category.color"
                        :total="category.total"
                        :last="category.last"
                    />
                </v-col>
            </v-row>
        </v-card>
        <BackButton :buttons="[{ label: 'back', icon: 'mdi-arrow-left', action: () => this.$router.go(-1) }]"/>
    </v-container>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'
import BackButton from '@/components/BackButton.vue'

export default {
  name: 'Spendings',
  components: {
    CategoryItem,
    BackButton
  },
  computed: {
    categories () {
      const filteredCategories = []
      const history = this.$store.state.history
      return history
        .sort((a, b) => {
          return a.value - b.value
        })
        .filter((el, index) => {
          const isCategoryIncluded = filteredCategories.includes(el.category)
          filteredCategories.push(el.category)
          return !isCategoryIncluded
        })
        .map(el => {
          return {
            ...this.$store.state.categories[el.category],
            name: el.category,
            last: this.$store.state.history
              .sort((a, b) => b.time - a.time)
              .find(transaction => transaction.category === el.category)
              .value
          }
        })
    }
  }
}
</script>
