<template>
  <div class="header">
    header
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Header extends Vue {

}
</script>

<style lang="less">
.header {
  width: 100%;
  height: 70px;
  background: pink;
}
</style>