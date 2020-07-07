<template>
    <v-container>
        <v-card>
            <v-row>
                <v-col cols="12" class="total-balance text-center">
                    <v-sparkline
                        class="sparkline pr-5"
                        :value="[1, 2, 3, 100, 0, 35, 23, 90, 30]"
                        :gradient="$vuetify.theme.dark ? ['#333'] : ['#eee']"
                        :smooth="6"
                        :padding="15"
                        :line-width="8"
                        stroke-linecap="round"
                        gradient-direction="top"
                        :fill="false"
                        type="trend"
                        auto-draw
                        :show-labels="false"
                    ></v-sparkline>
                    <div class="front-panel">
                        <v-card-title class="d-block display-1">4000.00$</v-card-title>
                        <v-card-subtitle>Total balance</v-card-subtitle>
                    </div>
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
    .total-balance {
        position: relative;
    }
    .sparkline {
        position: absolute;
        top: 0;
        left: 5%;
        width: 94%;
        height: 100%;
        z-index: 1;
    }
    .front-panel {
        z-index: 2;
        position: relative;
    }
</style>
