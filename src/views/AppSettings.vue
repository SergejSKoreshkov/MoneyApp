<template>
    <div class="appsettings">
      <Settings/>
    </div>
</template>

<script>
import Settings from '@/components/Settings.vue'

export default {
  name: 'AppSettings',
  components: {
    Settings
  }
}
</script>

<style lang="less" scoped>
  .appsettings {
    width: 100%;
    min-height: 100vh;
  }
</style>
