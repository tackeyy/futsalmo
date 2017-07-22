<template>
  <div id="app">
    <router-view></router-view>
    <div class="flexContainer">
      <div class="flexContainer__header">
        <v-header></v-header>
      </div>
      <div class="flexContainer__content">
        content
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

export default {
  name: 'app',
  components: {
    'v-header': Header,
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
</style>
