<template>
  <div class="layout">
    <Head></Head>
    <div class="container">
      <Slider></Slider>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

import Head from "./header.vue"
import Slider from "./slider.vue"
import Footer from "./footer.vue"

@Component({
  components: {
    Head,
    Slider,
    Footer
  }
})
export default class Layout extends Vue{
  
}
</script>

<style lang="less">
.layout {
  width: 100%;
  height: 100vh;
  background: #eee;
  .container {
    display: flex;
    height: calc(100% - 100px);
  }
}
</style>>