<template>
  <div class="layout">
    <Head v-if="isHomePage"></Head>
    <div class="container">
      <Slider v-if="!isHomePage"></Slider>
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Head from "./header.vue";
import Slider from "./slider.vue";
import Footer from "./footer.vue";

@Component({
  components: {
    Head,
    Slider,
    Footer
  }
})
export default class Layout extends Vue {
  get isHomePage() {

    const { pathname } = location;
    return pathname === "/";
  }
}
</script>

<style lang="less">
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-grow: 1;
  }
}
</style>>