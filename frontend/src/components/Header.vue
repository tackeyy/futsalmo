<template>
  <header>
    <div class="header">
      <div class="header__section">
        <div class="header__item headerLogo">
          <router-link to="/" class="logoLink">Futsulmo!</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="stylus">
  .header
    display: flex
    justify-content: space-between
    background-color: #20A0FF
    padding: .5rem

  .header__section
    display: flex
    align-items: center

  .header__item
    padding: .4rem .8rem

  .logoLink
    color: black
    text-decoration: none
</style>
