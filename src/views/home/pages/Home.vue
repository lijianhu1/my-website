<template>
  <div id="home">
    <header id="header">
      <div class="wrap">
        <a href="/" id="logo"></a>
        <ul id="nav">
          <li>
            <span class="ag"></span>
            <a href="javascript:;" @click="navHandle('resume')">HOME</a>
          </li>
          <li>
            <span class="ag"></span>
            <a href="javascript:;" @click="navHandle('skill')">SKILL</a>
          </li>
          <li>
            <span class="ag"></span>
            <a href="javascript:;" @click="navHandle('work')">WORK</a>
          </li>
          <li>
            <span class="ag"></span>
            <a href="javascript:;" @click="navHandle('project')">PROJECT</a>
          </li>
        </ul>
      </div>
    </header>
    <div class="base-info" id="resume">
      <div class="wrap">
        <img src="@/assets/images/home/avatar.png" alt class="avatar" />
        <div></div>
      </div>
    </div>
    <section id="skill">
      <div class="section-head">
        <div class="wrap">
          <p class="title h-t2">专业技能</p>
        </div>
      </div>
      <div id="first-content" class="section-content">
        <div class="wrap">
          <el-row>
            <el-col :span="6" class="h-align-c h-mb50">
              <el-progress type="circle" :percentage="75" color="#98d361" :stroke-width="15"></el-progress>
              <h5>html+css</h5>
            </el-col>
            <el-col :span="6" class="h-align-c h-mb50">
              <el-progress type="circle" :percentage="25" color="#98d361" :stroke-width="15"></el-progress>
              <h5>js</h5>
            </el-col>
            <el-col :span="6" class="h-align-c h-mb50">
              <el-progress type="circle" :percentage="25" color="#98d361" :stroke-width="15"></el-progress>
              <h5>vue</h5>
            </el-col>
            <el-col :span="6" class="h-align-c h-mb50">
              <el-progress type="circle" :percentage="25" color="#98d361" :stroke-width="15"></el-progress>
              <h5>node</h5>
            </el-col>
            <el-col :span="6" class="h-align-c h-mb50">
              <el-progress type="circle" :percentage="25" color="#98d361" :stroke-width="15"></el-progress>
              <h5>flutter</h5>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
    <section class="word" id="work">
      <div id="second-head" class="section-head">
        <div class="wrap">
          <p class="title">工作经验</p>
        </div>
      </div>
      <div id="second-content" class="section-content">
        <div class="wrap timeline-wrap work-wrap">
          <div class="timeline-block">
            <div class="timeline-icon">
              <span class="zuji">广州</span>
            </div>
            <el-row type="flex" justify="start">
              <el-col :span="11">
                <div class="timeline-content">
                  <h3 class="h-fontsize18">公司名</h3>
                  <p>2017.06--2019.06</p>
                  <p>前端开发</p>
                  <p>Timeline is free responsive template by templatemo. This layout is based on Bootstrap v3.1.1 and you may use this template for any website. Credit goes to Unsplash for all images.</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="timeline-block">
            <div class="timeline-icon">
              <span class="zuji">深圳</span>
            </div>
            <el-row type="flex" justify="end">
              <el-col :span="11">
                <div class="timeline-content">
                  <h3 class="h-fontsize18">公司名</h3>
                  <p>2017.06--2019.06</p>
                  <p>前端开发</p>
                  <p>Timeline is free responsive template by templatemo. This layout is based on Bootstrap v3.1.1 and you may use this template for any website. Credit goes to Unsplash for all images.</p>
                </div>
              </el-col>
            </el-row>
          </div>
          <div class="timeline-block">
            <div class="timeline-icon">
              <span class="zuji">广州</span>
            </div>
            <el-row justify="start">
              <el-col :span="11" type="flex">
                <div class="timeline-content">
                  <h3 class="h-fontsize18">公司名</h3>
                  <p>2017.06--2019.06</p>
                  <p>前端开发</p>
                  <p>Timeline is free responsive template by templatemo. This layout is based on Bootstrap v3.1.1 and you may use this template for any website. Credit goes to Unsplash for all images.</p>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </section>
    <section class="project" id="project">
      <div class="section-head">
        <div class="wrap">
          <p class="title">项目经验</p>
        </div>
      </div>
      <div class="section-content">
        <div class="wrap timeline-wrap project-wrap">
          <div class="timeline-block">
            <div class="timeline-icon">
              <span class="zuji">广州</span>
            </div>
            <el-row type="flex" justify="start">
              <el-col :span="11">
                <a href="javascript:;" class="timeline-content">
                  <img src="@/assets/images/home/project-item1.png" alt />
                  <div class="timeline-content-head">
                    <h5>项目名称</h5>
                    <div>项目描述...................</div>
                  </div>
                </a>
              </el-col>
            </el-row>
          </div>
          <div class="timeline-block">
            <div class="timeline-icon">
              <span class="zuji">广州</span>
            </div>
            <el-row type="flex" justify="end">
              <el-col :span="11">
                <a href="javascript:;" class="timeline-content">
                  <img src="@/assets/images/home/project-item2.png" alt />
                  <div class="timeline-content-head">
                    <h5>项目名称</h5>
                    <div>项目描述...................</div>
                  </div>
                </a>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch } from 'vue-property-decorator';
  import tool from '@/util/tool.js';
  @Component
  export default class Home extends Vue {
    private resumeInfo: object = {};
    private show: boolean = false;
    private animationClass: string[] = [
      'bounceIn',
      'bounce',
      'flash',
      'shake',
      'rubberBand',
      'swing',
      'tada',
      'bounceInDown',
      'bounceInUp',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight'
    ];
    private mounted() {
      console.log(123);
      // window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚轮滚动事件
      const home: any = document.getElementById('home');
      home.addEventListener('scroll', this.handleScroll, true);
    }
    private test(): void {
      this.show = !this.show;
    }
    private handleScroll(e: any): void {
      const top = e.target.scrollTop;
      const timelineBlocks: any = document.getElementsByClassName('timeline-block');
      for (const item of timelineBlocks) {
        const itemTop = tool.getElementTops(item);
        if (top >= itemTop - 800) {
          const parentClass = item.offsetParent.classList;
          item.classList.add('show');
          const timelineContent = item.childNodes[1].children[0].children[0];
          if (!timelineContent.style.visibility) {
            timelineContent.style.visibility = 'visible';
            const ran = Math.floor(Math.random() * this.animationClass.length);
            timelineContent.classList.add('animated', this.animationClass[ran]);
          }
          // if (Array.from(parentClass).includes('project-wrap')) {
          //   const timelineContent = item.childNodes[1].children[0].children[0];
          //   if (!timelineContent.style.visibility) {
          //     timelineContent.style.visibility = 'visible';
          //     const ran = Math.floor(Math.random() * this.animationClass.length);
          //     timelineContent.classList.add('animated', this.animationClass[ran]);
          //   }
          // }
        }
      }
    }
    private navHandle(nav: string): void {
      const ele = document.getElementById(nav);
      const eleTop = tool.getElementTops(ele);
      const home: any = document.getElementById('home');
      let homeTop = home.scrollTop;

      const timer = setInterval(() => {
        if (homeTop >= eleTop - 25 && homeTop <= eleTop + 25) {
          clearInterval(timer);
        } else {
          if (eleTop > homeTop) {
            homeTop += 50;
          } else if (eleTop < homeTop) {
            homeTop -= 50;
          }
          home.scrollTop = homeTop;
        }
      }, 10);

      // home.scrollTop = eleTop;
    }
  }
</script>>

<style lang="scss" scoped>
@import '~@/assets/scss/common.scss';
@import '~@/assets/scss/animate.min.css';
#home {
  height: 100vh;
  background: url('~@/assets/images/home/bg-slide.jpg') center;
  overflow: scroll;
  padding-top: g_header_h;
  #header {
    height: $g_header_h;
    background-color: $g_color_base;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
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
  section {
    .section-head {
      border-top: 5px solid $g_color_base;
      border-bottom: 5px solid $g_color_base;
      padding: 70px 0;
      text-align: center;
      position: relative;
      .title {
        font-size: 32px;
        color: #666;
        font-family: 'Dosis';
      }
      &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 45px 60px 0 60px;
        border-color: $g_color_base transparent transparent transparent;
        bottom: -50px;
        left: 50%;
        margin-left: -60px;
      }
    }
    .section-content {
      margin-top: 130px;
      .timeline-wrap {
        position: relative;
        padding: 30px;
        &:after {
          content: '';
          position: absolute;
          width: 6px;
          height: 100%;
          background-color: #ccc;
          left: 50%;
          top: 0;
          margin-left: -3px;
          border-radius: 3px;
        }
      }

      .timeline-block {
        position: relative;
        &.show {
          .timeline-icon {
            visibility: visible;
            animation: ani1 0.6s;
            // ani2-inverse
          }
        }
        .timeline-icon {
          position: absolute;
          left: 50%;
          top: 0;
          display: flex;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #eee;
          justify-content: center;
          align-items: center;
          z-index: 3;
          border: 5px solid #fff;
          margin-left: -30px;
          color: #666;
          font-weight: bold;
          visibility: hidden;
          // animation1
        }
        .timeline-content {
          visibility: hidden;
        }
      }
    }

    &.word {
      // .timeline-block {
      //   &:nth-child(odd).show {
      //     .timeline-content {
      //       visibility: visible;
      //       animation: ani2 0.6s;
      //     }
      //   }
      //   &:nth-child(even).show {
      //     .timeline-content {
      //       visibility: visible;
      //       animation: ani2-inverse 0.6s;
      //     }
      //   }
      // }
      .timeline-content {
        background-color: #eee;
        padding: 25px;
        border-radius: 5px;
        color: #555;
        p {
          margin: 5px 0;
        }
      }
    }
    &.project {
      .timeline-content {
        height: 350px;
        border: 4px solid #eee;
        position: relative;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
        .timeline-content-head {
          position: absolute;
          top: 0;
          width: 100%;
          left: 0;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 10px;
          h5 {
            margin-bottom: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
@media only screen and (min-width: 1200px) {
  .timeline-block {
    margin-top: -3rem;
    &:first-child {
      margin: 0;
    }
  }
}
@keyframes ani1 {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  60% {
    opacity: 1;
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
@keyframes ani2 {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  60% {
    opacity: 1;
    transform: translateX(10px);
  }

  100% {
    transform: translateX(0);
  }
}
@keyframes ani2-inverse {
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  60% {
    opacity: 1;
    transform: translateX(-10px);
  }

  100% {
    transform: translateX(0);
  }
}
</style>