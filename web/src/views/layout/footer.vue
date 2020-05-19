<template>
  <div class="footer">
    Footer
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Footer extends Vue {
  
}
</script>

<style lang="less">
.footer {
  height: 30px;
  background: orange;
}
</style>