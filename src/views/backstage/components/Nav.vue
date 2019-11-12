<template>
  <div id="nav">
    <el-menu
      default-active="/home/resume"
      router
      class="el-menu-vertical-demo"
      background-color="#354457"
      text-color="#b8c7ce"
      active-text-color="#ffd04b"
      :default-active="$route.path"
    >
      <el-menu-item index="/home/resume">
        <i class="el-icon-setting"></i>
        <span slot="title">简历</span>
      </el-menu-item>
      <el-menu-item index="/home/blog">
        <i class="el-icon-menu"></i>
        <span slot="title">博客</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  @Component
  export default class Nav extends Vue {}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
#nav {
  width: $g_nav_back_w;
  position: fixed;
  left: 0;
  top: $g_header_h;
  bottom: 0;
  background-color: $g_color_back;
  z-index: 98;
  .el-menu-item.is-active {
    background-color: rgba(45, 54, 70, 1) !important;
  }
}
</style>