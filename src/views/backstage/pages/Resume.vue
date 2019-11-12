<template>
  <div id="resume">
    <el-container>
      <el-header height="45px">基本信息</el-header>
      <el-main>
        <div class="base-info">
          <div class="avatar">
            <img src="@/assets/images/home/avatar.png" alt />
          </div>
          <div class="info-section" v-if="editType!==1">
            <h3 class="h-fontsize22 h-ml5">{{userInfo.resume_base.name}}</h3>
            <div>
              <span>{{userInfo.resume_base.company}}</span> /
              <span>{{userInfo.resume_base.position}}</span>
            </div>
            <div>
              <div>
                <span>{{userInfo.resume_base.jobYear}}年工作经验</span> /
                <span>{{userInfo.resume_base.education}}</span> /
                <span>{{userInfo.resume_base.age}}岁</span>
              </div>
            </div>
            <div>
              <span>
                <i class="el-icon-mobile-phone"></i>
                {{userInfo.resume_base.telephone}}
              </span>
              <span class="h-ml15">
                <i class="el-icon-message"></i>
                {{userInfo.resume_base.email}}
              </span>
            </div>
          </div>
          <el-form class="info-edit" v-if="editType===1">
            <el-form-item>
              <el-input size="small" placeholder="姓名" v-model="editForm.resume_base.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="small" placeholder="公司" v-model="editForm.resume_base.company"></el-input>
              <el-input size="small" placeholder="职位" v-model="editForm.resume_base.position"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input size="small" placeholder="工作经验" v-model="editForm.resume_base.jobYear"></el-input>
              <el-input size="small" placeholder="学历" v-model="editForm.resume_base.education"></el-input>
              <el-input size="small" placeholder="年龄" v-model="editForm.resume_base.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="邮箱" size="small" prefix-icon="el-icon-message" v-model="editForm.resume_base.email"></el-input>
              <el-input placeholder="手机" size="small" prefix-icon="el-icon-mobile-phone" v-model.number="editForm.resume_base.telephone"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <el-button type="info" v-if="editType!==1" size="small" @click="editType = 1">编辑</el-button>
        <el-button type="primary" v-if="editType===1" size="small" @click="editUserInfo('resume_base')">保存</el-button>
      </el-footer>
    </el-container>
    <el-container>
      <el-header height="45px">专业技能</el-header>
      <el-main>
        <div class="skill" v-if="editType!==2">
          <el-row>
            <el-col :span="6" v-for="(item,index) in userInfo.resume_skill" :key="index" class="h-mb30">
              <div class="skill-item">
                <el-progress type="circle" :percentage="item.skillDegree" :stroke-width="15" color="#98d361"></el-progress>
                <h4>{{item.skillName}}</h4>
              </div>
            </el-col>
          </el-row>
        </div>
        <el-form ref="form" class="skill-edit" v-if="editType===2">
          <el-row>
            <el-col :span="6" v-for="(item,index) in editForm.resume_skill" :key="index" class="h-mb30 h-pl30 h-pr30">
              <div class="skill-item-input">
                <div class="h-flex h-align-r">
                  <el-input type="text" size="small" v-model.sync="item.skillName" class="h-mb20" />
                  <a href="javascript:;" class="icon el-icon-remove" @click="listRemove('resume_skill', item.id, index)"></a>
                </div>
                <el-slider show-input input-size="mini" v-model.sync="item.skillDegree"></el-slider>
              </div>
            </el-col>
          </el-row>
          <el-button type="primary" icon="el-icon-plus" circle @click="skillPlus()"></el-button>
        </el-form>
      </el-main>
      <el-footer>
        <el-button type="info" v-if="editType!==2" size="small" @click="editType = 2">编辑</el-button>
        <el-button type="primary" v-if="editType===2" size="small" @click="editUserInfo('resume_skill')">保存</el-button>
      </el-footer>
    </el-container>
    <el-container>
      <el-header height="45px">工作经验</el-header>
      <el-main>
        <div class="work" v-if="editType!==3">
          <div class="work-item" v-for="(item, index) in userInfo.resume_work" :key="index">
            <div class="work-item-head">
              <h5>{{item.company}}</h5>
              <span class="work-date">{{item.startDate}} - {{item.endDate}}</span>
            </div>
            <pre>{{item.desc}}</pre>
          </div>
        </div>
        <el-form ref="form" class="work-edit" v-if="editType===3">
          <div class="work-edit-item" v-for="(item,index) in editForm.resume_work" :key="index">
            <el-input type="text" size="small" placeholder="公司" v-model="item.company" class="h-mb20" />
            <div>
              <el-date-picker
                size="small"
                v-model="item.date"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
                @change="dateChange($event, item)"
              ></el-date-picker>
            </div>
            <el-input type="textarea" class="h-mt30" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入内容" v-model="item.desc"></el-input>
          </div>
          <el-button type="primary" icon="el-icon-plus" circle @click="workPlus()"></el-button>
        </el-form>
      </el-main>
      <el-footer>
        <el-button type="info" v-if="editType!==3" size="small" @click="editType = 3">编辑</el-button>
        <el-button type="primary" v-if="editType===3" size="small" @click="editType = 0">保存</el-button>
      </el-footer>
    </el-container>
  </div>
</template>
<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import _ from 'lodash';
  import ajax from '../../../service/ajax';
  interface UserInfo {
    id: number;
    age: number | string;
    sex: number;
    username: string;
    name: string;
    resume_base: BaseInfo;
    avatar?: string;
    skill?: any[];
    work?: any[];
  }
  interface BaseInfo {
    id: number;
    resumeId: number;
    age: number | string;
    company: string;
    education: string;
    email: string;
    name: object;
    telephone: number;
    jobYear?: string;
    position?: object;
    createdAt?: string;
    updatedAt?: object;
  }
  @Component
  export default class Resume extends Vue {
    private editType: number = 0;
    private editForm: any = {
      name: '姓名',
      company: '深圳市爱挖网络科技有限公司',
      position: 'WEB前端',
      workYear: '4年工作经验',
      education: '大专',
      age: '28岁',
      telephone: '15889950967',
      email: '403056352@qq.com',
      skill: [
        {
          name: 'html+css+js',
          progress: 80
        },
        {
          name: 'vue+ webpack',
          progress: 90
        },
        {
          name: '小程序',
          progress: 70
        }
      ],
      work: [
        {
          company: '广州宝乐',
          startDate: '2019-09',
          endDate: '2019-11',
          desc: '11'
        },
        {
          company: '红领巾有限',
          startDate: '2019-09',
          endDate: '2019-11',
          desc: '22'
        }
      ]
    };

    private resume: any = {
      name: '姓名',
      company: '深圳市爱挖网络科技有限公司',
      position: 'WEB前端',
      workYear: '4年工作经验',
      education: '大专',
      age: '28岁',
      telephone: '15889950967',
      email: '403056352@qq.com',
      skill: [
        {
          name: 'html+css+js',
          progress: 80
        },
        {
          name: 'vue+ webpack',
          progress: 90
        },
        {
          name: '小程序',
          progress: 70
        }
      ],
      work: [
        {
          company: '广州宝乐',
          startDate: '2019-09',
          endDate: '2019-11'
        },
        {
          company: '红领巾有限',
          startDate: '2019-09',
          endDate: '2019-11'
        }
      ]
    };
    // private mounted() {}
    private skillPlus() {
      const item = {
        skillName: '',
        skillDegree: 0
      };
      if (!Array.isArray(this.editForm.skill)) {
        this.editForm.skill = [];
      }
      this.editForm.resume_skill.push(item);
    }
    private dateChange(event: any, item: any) {
      const that: any = this;
      that.$set(item, 'startDate', event[0]);
      that.$set(item, 'endDate', event[1]);
    }
    private workPlus() {
      const item = {
        company: '',
        startDate: '',
        endDate: ''
      };
      if (!Array.isArray(this.editForm.resume_work)) {
        this.editForm.resume_work = [];
      }
      (this.editForm as any).resume_work.push(item);
    }
    private editUserInfo(type: string) {
      const reqdata = {
        type,
        data: this.editForm[type]
      };
      ajax.editUserInfo(reqdata, (res: any) => {
        this.$store.dispatch('getUserInfo');
        this.editType = 0;
      });
    }
    private listRemove(type: string, id: number, index: number) {
      (this as any)
        .$confirm(' 是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
          if (id) {
            const reqdata = {
              type,
              id
            };
            ajax.deleteUserInfo(reqdata, (res: any) => {
              this.$store.dispatch('getUserInfo');
            });
          } else {
            this.editForm[type].splice(index, 1);
          }
        });
    }
    private get userInfo() {
      const userinfo = this.$store.state.userInfo;
      userinfo.resume_base = userinfo.resume_base || {};
      this.editForm = _.cloneDeep(userinfo, true);
      return userinfo;
    }
  }
</script>
<style lang="scss" scoped>
#resume {
  .el-container {
    margin-bottom: 30px;
    background: none repeat scroll 0 0 #f9f9f9;
    border-left: 1px solid #f0f8ff;
    border-top: 1px solid #f0f8ff;
    border-right: 2px solid #cdcdcd;
    border-bottom: 2px solid #cdcdcd;
    .el-header {
      background-color: #efefef;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #f0f8ff;
      font-weight: bold;
    }
    .el-footer {
      background-color: #f5f5f5;
      border-top: 1px solid #f0f8ff;
      align-items: center;
      display: flex;
    }
    .el-main {
      .base-info {
        display: flex;
        .avatar {
          border-radius: 50%;
          border: 3px solid rgb(212, 211, 211);
          overflow: hidden;
          width: 130px;
          height: 130px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .info-section {
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          width: 500px;
          justify-content: center;
          > div {
            margin: 5px 0;
            span {
              margin: 0 5px;
            }
          }
        }
      }
      .base-info-edit {
        display: flex;
        .info-edit {
          display: flex;
          align-items: center;
        }
      }
      .skill {
        .skill-item {
          text-align: center;
          margin: 20px 0;
          h4 {
            margin: 15px;
            font-size: 16px;
          }
          // display: flex;
          // flex-direction: column;
          // align-content: center;
          // justify-content: center;
        }
        .skill-item-input {
          padding: 0 30px;
        }
      }
      .skill-edit {
        .skill-item-input {
          .icon {
            width: 30px;
            height: 30px;
            color: #ec5a36;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .work {
        .work-item {
          border-bottom: 1px solid #ccc;
          padding: 20px 0 10px;
        }
        .work-item-head {
          display: flex;
          align-items: flex-end;
          margin-bottom: 15px;
          h5 {
            font-size: 20px;
            margin-right: 20px;
          }
          .work-date {
            color: #666;
          }
        }
      }
      .work-edit {
        .work-edit-item {
          margin-bottom: 30px;
          border-bottom: 1px solid #ccc;
          padding-bottom: 30px;
          .el-input {
            max-width: 500px;
          }
          &:last-child {
            border-bottom: 0;
            padding-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
#resume {
  .info-edit {
    margin-left: 30px;
    .el-form-item {
      margin-bottom: 0;
      .el-form-item__content {
        display: flex;
        .el-input {
          margin: 0 5px;
        }
      }
    }
  }
}
</style>
