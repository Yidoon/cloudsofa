<template>
  <div class="header">
    <h2>header</h2>
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
  border: 1px solid red;
}
</style>