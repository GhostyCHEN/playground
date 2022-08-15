<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './view/home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 12px;
  color: #040c2c;
}
</style>
