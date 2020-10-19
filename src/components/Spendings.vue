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
                <v-col class="pa-2 pt-1 pb-1" v-for="category in history" :key="category.time" cols="12">
                    <v-divider v-show="'TODO'"></v-divider>
                    <CategoryItem
                        :name="category.name"
                        :account="category.account"
                        :icon="category.icon"
                        :color="category.color"
                        :total="category.total"
                        :type="category.type"
                        :time="category.time"
                        :enableMenu="true"
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
    history () {
      return this.$store.getters.history
        .filter(el => el.type === 'spending')
        .sort((a, b) => b.time - a.time)
        .map(el => ({
          ...this.$store.state.categories[el.category],
          time: el.time,
          total: el.total,
          account: el.account,
          type: el.type
        }))
    }
  }
}
</script>
