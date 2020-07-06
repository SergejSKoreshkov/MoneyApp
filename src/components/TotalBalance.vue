<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col cols="6" class="text-center">
                    <v-card-title class="d-block">4000.00$</v-card-title>
                    <v-card-subtitle>Total balance</v-card-subtitle>
                </v-col>
                <v-col cols="6" class="sparkline-container">
                    <v-sparkline
                        class="sparkline pr-5"
                        :value="[1, 2, 3, 100, 0, 35, 23, 90, 30]"
                        :gradient="['#00C853', '#dd2c00']"
                        :smooth="10"
                        :padding="6"
                        :line-width="10"
                        stroke-linecap="round"
                        gradient-direction="top"
                        :fill="false"
                        type="trend"
                        auto-draw
                        :show-labels="false"
                    ></v-sparkline>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'TotalBalance'
}
</script>

<style lang="less" scoped>
    .sparkline-container {
        display: flex;
    }
    .sparkline {
        height: 100%;
    }
</style>
