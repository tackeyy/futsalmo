<template>
  <div id="app">
    <div class="block">
      <div class="block">
        <el-date-picker
          v-model="value"
          type="datetime"
          placeholder="日付の選択">
        </el-date-picker>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
</style>
