<template>
  <div id="app">
    <router-view></router-view>
    <div class="flexContainer">
      <div class="flexContainer__header">
        <v-header></v-header>
      </div>
      <div class="flexContainer__content">
        <div class="contentContainer">
          <div class="contentContainer__searchForm">
            <search-form></search-form>
          </div>
          <div class="contentContainer__listItems">
            <list-items></list-items>
          </div>
        </div>
      </div>
      <div class="flexContainer__footer">
        <v-footer></v-footer>
      </div>
    </div>
  </div>
</template>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchForm from '@/components/SearchForm'
import ListItems from '@/components/ListItems'

export default {
  name: 'app',
  components: {
    'v-header': Header,
    'search-form': SearchForm,
    'list-items': ListItems,
    'v-footer': Footer
  }
}
</script>

<style lang="stylus">
  @import "~normalize.css"

  .flexContainer
    display: flex
    min-height: 100vh
    flex-direction: column

  .flexContainer__content
    flex-grow: 1
    padding: 1rem

  .contentContainer
    margin: .5rem 5rem

    .contentContainer__listItems
      margin: 30px 0
</style>
