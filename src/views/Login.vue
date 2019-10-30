<template>
  <div id="login">
    <section class="login-section">
      <div class="owl" :class="isActive?'active':''">
        <span class="owl-eye left"></span>
        <span class="owl-eye right"></span>
        <span class="owl-hand left"></span>
        <span class="owl-hand right"></span>
        <div class="arms">
          <span class="owl-arm left"></span>
          <span class="owl-arm right"></span>
        </div>
      </div>
      <el-form ref="form" class="login-form">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" @focus="isActive = true" @blur="isActive = false" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-button type="primary" class="h-w-full">登录</el-button>
      </el-form>
    </section>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  @Component
  export default class Login extends Vue {
    private isActive: boolean = false;
    private mounted(): void {
      const owl = document.getElementsByClassName('owl')[0];
      const owlRect: any = owl.getBoundingClientRect();
      const eyesLeft: any = document.getElementsByClassName('owl-eye left')[0];
      const eyesRight: any = document.getElementsByClassName('owl-eye right')[0];
      window.onmousemove = (event: any) => {
        const ex = event.clientX;
        const ey = event.clientY;
        if (!(ex >= owlRect.x + 50 && ex <= owlRect.x + 150 && ey >= owlRect.y && ey <= owlRect.y + 100)) {
          const itemRect: any = eyesLeft.getBoundingClientRect();
          const x: number = itemRect.x; // 眼睛的x坐标
          const y: number = itemRect.y; // 眼睛的y坐标
          const rad = Math.atan2(event.pageX - x, event.pageY - y); // 鼠标和眼睛的坐标距离，然后用atan2函数计算出该点与(0, 0)点之间的弧度
          const rot = rad * (180 / Math.PI) * -1; // 转换成角度
          eyesLeft.style.cssText = `transform: rotate(${rot}deg)`;
          eyesRight.style.cssText = `transform: rotate(${rot}deg)`;
        }
      };
    }
  }
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
#login {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: url('~@/assets/images/login/snow.jpg') no-repeat center;
  background-size: 100% 100%;
  .login-section {
    width: 400px;
    .owl {
      width: 200px;
      height: 100px;
      margin: 0 auto;
      position: relative;
      background: url('~@/assets/images/login/owl-head.png') no-repeat center;
      background-size: 100% 100%;
      bottom: -7px;
      z-index: 3;
      .owl-head {
        width: 100%;
      }
      .owl-eye {
        position: absolute;
        display: inline-block;
        background: url('~@/assets/images/login/owl-eye.png') no-repeat center;
        background-size: 100% 100%;
        width: 36px;
        height: 36px;
        top: 48px;
        &.left {
          left: 58px;
        }
        &.right {
          left: 109px;
        }
      }
      .owl-hand {
        display: inline-block;
        width: 34px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        background: #472d20;
        &.left {
          left: 10px;
          transition: 0.3s;
        }
        &.right {
          right: 8px;
          transition: 0.3s;
        }
      }
      .arms {
        width: 100%;
        height: 40px;
        position: absolute;
        bottom: 7px;
        overflow: hidden;
        .owl-arm {
          position: absolute;
          height: 65px;
          width: 40px;
          bottom: 0;
          background: url('~@/assets/images/login/owl-hand.png') no-repeat center;
          background-size: 100% 100%;
          &.left {
            transform: translateY(70px) rotate(-20deg);
            transition: 0.3s;
          }
          &.right {
            transform: scaleX(-1) translateY(70px) rotate(-20deg);
            right: 0;
            transition: 0.3s;
          }
        }
      }
      &.active {
        .owl-hand {
          bottom: 15px;
          &.left {
            width: 20px;
            left: 62px;
            transition: 0.3s;
          }
          &.right {
            width: 20px;
            right: 62px;
            transition: 0.3s;
          }
        }
        .arms {
          .left {
            transform: translateX(56px) translateY(28px);
            transition: 0.3s;
          }
          .right {
            transform: scaleX(-1) translateX(51px) translateY(28px);
            transition: 0.3s;
          }
        }
      }
    }
    .login-form {
      padding: 30px;
      background-color: aliceblue;
    }
  }
}
</style>