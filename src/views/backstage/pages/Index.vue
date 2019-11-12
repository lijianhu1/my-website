<template>
  <div id="index">
    <div id="header">
      <a href="javascript:;" class="logo">管理后台</a>
    </div>
    <div class="main-wrap">
      <Nav></Nav>
      <div id="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';

  import Nav from '@/views/backstage/components/Nav.vue';
  import ajax from '@/service/ajax';
  interface ResData {
    code: number;
    message: string;
    data?: any;
  }
  @Component({
    components: {
      Nav
    }
  })
  export default class Index extends Vue {
    private mounted(): void {
      this.$store.dispatch('getUserInfo');
    }
    private getUserinfo(): void {
      ajax.getUserinfo((res: any) => {
        console.log(res);
      });
    }
  }
</script>    

<style lang="scss">
@import '~@/assets/scss/common.scss';
#header {
  background-color: $g_color_back;
  height: $g_header_h;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  .logo {
    color: #a4d3ee;
    padding: 10px;
    margin-left: 20px;
    font-size: 18px;
  }
}
.main-wrap {
  display: flex;
  margin-top: $g_header_h;
  #main {
    padding: 10px;
    flex: 1;
    margin-left: $g_nav_back_w;
  }
}
</style>