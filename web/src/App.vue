<template>
  <div id="app">
    <Layout />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"

import Layout from "@/views/layout/layout.vue"

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {

}
</script>>
<style lang="less">
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
