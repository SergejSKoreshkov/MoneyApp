<template>
  <div class="addoredit">
    <AddOrEditComponent/>
  </div>
</template>

<script>
import AddOrEditComponent from '@/components/AddOrEdit.vue'

export default {
  name: 'AddOrEdit',
  components: {
    AddOrEditComponent
  }
}
</script>

<style lang="less" scoped>
  .addoredit {
    width: 100%;
    min-height: 100vh;
  }
</style>
