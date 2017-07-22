<template>
  <el-row>
    <el-col :xs="24" :sm="24" :md="24" :lg="24">
      <form @submit.prevent="search">
        <el-date-picker
          v-model="searchDateTime"
          type="daterange"
          format="MM-dd"
          placeholder="Select time range">
        </el-date-picker>
        <el-button native-type="submit" type="primary" icon="search">検索</el-button>
      </form>
    </el-col>
  </el-row>
</template>

<script>
  import Utils from './../utils/index.js'

  export default {
    name: 'SearchForm',
    data () {
      return {
        searchDateTime: [Utils.today(), Utils.tomorrow()]
      }
    }
  }
</script>

<style lang="stylus">
</style>
