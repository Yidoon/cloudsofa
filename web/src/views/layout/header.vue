<template>
  <div class="header">
   <div class="header_nav-div">
     <div class="header_logo-div">
       LOGO
     </div>
     <div class="header_info-div">
       <div class="header_info-item">最近上传</div>
       <div class="header_info-item">关于</div>
       <div class="header_info-item">登陆</div>
     </div>
   </div>
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
  height: 70px;
  // background: pink;
  flex: 0 0 auto;
  .header_nav-div {
    width: 60%;
    height: 100%;
    // background: #eee;
    margin: 0 auto;
    position: relative;
    .header_logo-div {
      width: 70px;
      height: 100%;
      line-height: 70px;
      position: absolute;
      top: 0;
      left: 0;
      // background: #ddffaa;
    }
    .header_info-div {
      width: 300px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      display: flex;
      align-items: center;
      .header_info-item {
        flex: 1;
        cursor: pointer;
      }
    }
  }
}
</style>