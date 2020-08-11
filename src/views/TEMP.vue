<template>
    <div class="temp">
      <Keyboard/>
    </div>
</template>

<script>
import Keyboard from '@/components/Keyboard.vue'

export default {
  name: 'TEMP',
  components: {
    Keyboard
  }
}
</script>

<style lang="less" scoped>
  .temp {
    width: 100%;
    min-height: 100vh;
  }
</style>
