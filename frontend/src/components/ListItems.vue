<template>
  <el-table
    :data="tableData"
    stripe
  >
    <el-table-column
      prop="date"
      label="開催日"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="場所"
    >
    </el-table-column>
    <el-table-column
      prop="court"
      label="会場">
    </el-table-column>
    <el-table-column
      prop="link"
    >
      <template scope="scope">
        <el-button size="small" @click="linkTo(scope.$index, scope.row)">確認する</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'ListItems',
    data () {
      return {
        tableData: [{
          date: '2016-05-03',
          address: 'No. 189, Grove St, Los Angeles',
          court: 'Tom',
          link: 'https://www.yahoo.co.jp/'
        }, {
          date: '2016-05-02',
          address: 'No. 189, Grove St, Los Angeles',
          court: 'Tom',
          link: 'https://www.yahoo.co.jp/'
        }, {
          date: '2016-05-04',
          address: 'No. 189, Grove St, Los Angeles',
          court: 'Tom',
          link: 'https://www.yahoo.co.jp/'
        }]
      }
    },
    methods: {
      linkTo (index, row) {
        window.open(row.link)
      }
    }
  }
</script>

<style lang="stylus">
</style>
