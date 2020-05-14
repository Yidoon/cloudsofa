<template>
  <div class="layout">
    <Head></Head>
    <Slider></Slider>
    <div class="container">
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

</style>>