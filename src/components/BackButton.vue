<template>
    <div class="d-flex pt-3">
        <v-spacer></v-spacer>
        <v-btn class="ml-2" v-for="button in buttons" :key="button.label" @click="button.action">
            <v-icon>{{ button.icon }}</v-icon>
            {{ button.label }}
        </v-btn>
    </div>
</template>

<script>
export default {
  props: {
    buttons: Array
  }
}
</script>

<style lang="less" scoped>
    .w100 {
        width: 100%;
    }
</style>
