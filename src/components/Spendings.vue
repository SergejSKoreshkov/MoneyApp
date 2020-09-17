<template>
    <v-container>
        <v-card class="pa-1">
            <v-card-title>Spendings</v-card-title>
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
    </v-container>
</template>

<script>
import CategoryItem from '@/components/CategoryItem.vue'

export default {
  name: 'Spendings',
  components: {
    CategoryItem
  },
  computed: {
    categories () {
      const history = this.$store.state.history
      return history
        .sort((a, b) => {
          return a.total - b.total
        })
        .map(el => {
          return {
            ...this.$store.state.categories[el.category],
            name: el.category,
            last: this.$store.state.history
              .sort((a, b) => a.time - b.time)
              .find(transaction => transaction.category === el.category)
              .value
          }
        })
    }
  }
}
</script>
