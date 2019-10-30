<template>
  <div id="blog">
    <header id="header">
      <div class="wrap">
        <a href="/" id="logo"></a>
        <ul id="nav">
          <li>
            <span class="ag"></span>
            <a href="javascript:;">HOME</a>
          </li>
          <li>
            <span class="ag"></span>
            <a href="javascript:;">ABOUT</a>
          </li>
          <li>
            <span class="ag"></span>
            <a href="javascript:;">USER</a>
          </li>
        </ul>
      </div>
    </header>
    <div class="base-info">
      <div class="wrap">
        <img src="@/assets/images/home/avatar.png" alt class="avatar" />
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  @Component
  export default class Home extends Vue {}
</script>>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
#home {
  #header {
    height: $g_header_h;
    background-color: $g_color_base;
    .wrap {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    #logo {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: url('~@/assets/images/logo.png') no-repeat;
      background-size: 100%;
    }
    #nav {
      display: flex;
      height: 100%;
      li {
        height: 100%;
        position: relative;
        // overflow: hidden;
        &:hover {
          .ag {
            &:before {
              left: 0;
              transition: 0.2s;
              right: 49%;
            }
            &:after {
              right: 0;
              transition: 0.2s;
            }
          }
          a {
            color: $g_color_base;
          }
        }
        .ag {
          display: inline-block;
          width: 100%;
          height: 100%;
          position: absolute;
          transform: skewX(-45deg);
          &:before {
            content: '';
            height: 100%;
            position: absolute;
            left: 50%;
            right: 50%;
            background-color: #fff;
          }
          &:after {
            content: '';
            height: 100%;
            position: absolute;
            left: 50%;
            right: 50%;
            background-color: #fff;
          }
        }
        a {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          height: 100%;
          color: #fff;
          position: relative;
          z-index: 10;
        }
      }
    }
  }

  .base-info {
    height: 550px;
    background: url('~@/assets/images/home/big.jpg') no-repeat center;
    background-size: cover;
    .wrap {
      display: flex;
      align-items: center;
      height: 100%;
      .avatar {
        width: 260px;
        border: 5px solid #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>