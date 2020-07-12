<template>
    <div class="w100 d-flex pt-3">
        <v-spacer></v-spacer>
        <v-btn @click="$router.go(-1)">
            <v-icon>mdi-arrow-left</v-icon>
            Back
        </v-btn>
    </div>
</template>

<style lang="less" scoped>
    .w100 {
        width: 100%;
    }
</style>
