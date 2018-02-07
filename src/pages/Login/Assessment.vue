<template>
  <div class="assessment">
    <div class="topNav">
      <div class="topLogo">
        <img src="../../assets/images/login/logo.png" @click="$router.push('/')">
        <div>
          开始评估
        </div>
      </div>
      <div class="num">
        {{page}}/9
      </div>
      <span :style="wid"></span>
    </div>
    <div class="main">
      <div class="mainLeft">
        <img src="../../assets/images/login/left_arrow.png" @click="$router.push('/')" v-if="page==0">
        <img src="../../assets/images/login/left_arrow.png" @click="upClick" v-if="page!=0">
        <div class="leftWrap">
          <div class="pageOne" v-if="page==9">
            基本信息
            <p>我们将使用这些信息来创建您的账户，并告知您的风险承受能理结果;</p>
          </div>
          <div class="title" v-if="page!=9">
            {{title}}
            <div v-if="page==4">
              投资A预期获得10%的收益，可能承担的损失非常小；投资B预期获 得30%的收益，但可能承担较大亏损。您会怎么支配您的投资：
            </div>
          </div>
        </div>
      </div>
      <div class="mainRight">
        <ul v-show="page==0" class="isRadio">
          <li v-for="item in page1">
            <el-radio v-model="post.page1" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==1" class="isRadio">
          <li v-for="item in page2">
            <el-radio v-model="post.page2" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==2" class="isRadio">
          <li v-for="item in page3">
            <el-radio v-model="post.page3" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==3" class="isRadio">
          <li v-for="item in page4">
            <el-radio v-model="post.page4" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==4" class="isRadio">
          <li v-for="item in page5">
            <el-radio v-model="post.page5" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==5" class="isRadio">
          <li v-for="item in page6">
            <el-radio v-model="post.page6" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==6" class="isRadio">
          <li v-for="item in page7">
            <el-radio v-model="post.page7" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==7" class="isRadio">
          <li v-for="item in page8">
            <el-radio v-model="post.page8" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==8" class="isRadio">
          <li v-for="item in page9">
            <el-radio v-model="post.page9" :label="item.label">{{item.name}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==9" class="user">
          <li>
            <input type="text" placeholder="邮箱/手机号" v-model="post.user">
          </li>
          <li>
            <input type="password" placeholder="密码" v-model="post.password">
          </li>
        </ul>
        <div @click="topShow" class="nextBtn">
          继续
        </div>
      </div>
    </div>
    <foot-public></foot-public>
  </div>
</template>
<script>
//  import { Notification} from 'element-ui'
  export default {
    data(){
      return {
        page:0,
        title:'',
        wid:{
          width:''
        },
        page1:[
          {
            label:'1',
            name:'5万元以下'
          },{
            label:'2',
            name:'5 万元至 20 万元'
          },{
            label:'3',
            name:'20 万元至 50 万元'
          },{
            label:'4',
            name:'50 万元至 100 万元'
          },{
            label:'5',
            name:'100 万元以上'
          }
        ],
        page2:[
          {
            label:'1',
            name:'1 年以下'
          },{
            label:'2',
            name:'1-3 年'
          },{
            label:'3',
            name:'3-5 年'
          },{
            label:'4',
            name:'5-10 年'
          },{
            label:'5',
            name:'10 年以上'
          }
        ],
        page3:[
          {
            label:'1',
            name:'退休期（已退休）'
          },{
            label:'2',
            name:'退休前期（未退休，子女已参加工作）'
          },{
            label:'3',
            name:'家庭成长期（子女出生到完成大学教育）'
          },{
            label:'4',
            name:'家庭形成期（结婚到子女出生前）'
          },{
            label:'5',
            name:'单身期: (独身，无子女)'
          }
        ],
        page4:[
          {
            label:'1',
            name:'平时生活保障，赚点补贴家用'
          },{
            label:'2',
            name:'养老'
          },{
            label:'3',
            name:'子女教育'
          },{
            label:'4',
            name:'资产增值'
          },{
            label:'5',
            name:'家庭富裕'
          }
        ],
        page5:[
          {
            label:'1',
            name:'全部投资于收益较小且风险较小的 A'
          },{
            label:'2',
            name:'同时投资于A和B，但大部分资金投资于收益较小且风险较小的 A'
          },{
            label:'3',
            name:'同时投资于A和B，各投资50%'
          },{
            label:'4',
            name:'同时投资于A和B，但大部分资金投资于收益较大且风险较大的 B'
          },{
            label:'5',
            name:'全部投资于收益较大且风险较大的 B'
          }
        ],
        page6:[
          {
            label:'1',
            name:'除银行储蓄外，没有其他投资'
          },{
            label:'2',
            name:'大部分投资于存款、国债等'
          },{
            label:'3',
            name:'大部分投资于银行理财产品、保险理财产品等'
          },{
            label:'4',
            name:'大部分投资于基金、股票等'
          },{
            label:'5',
            name:'大部分投资于创业板股票、外汇、期货等高风险产品'
          }
        ],
        page7:[
          {
            label:'1',
            name:'不能承受任何损失'
          },{
            label:'2',
            name:'一定的投资损失'
          },{
            label:'3',
            name:'较大的投资损失'
          },{
            label:'4',
            name:'损失可能超过本金'
          },{
            label:'5',
            name:'损失超过本金并接受大于或等于本金的补仓'
          }
        ],
        page8:[
          {
            label:'1',
            name:'收益只有 5%，但不亏损'
          },{
            label:'2',
            name:'收益 15%，但可能亏损 5%'
          },{
            label:'3',
            name:'收益是 30%，但可能亏损 15%'
          },{
            label:'4',
            name:'收益 50%，但可能亏损 30%'
          },{
            label:'5',
            name:'收益 100%，但可能亏损 60%'
          }
        ],
        page9:[
          {
            label:'1',
            name:'清仓, 然后投入到一个波动小的基金中'
          },{
            label:'2',
            name:'卖掉一半'
          },{
            label:'3',
            name:'等着价格反弹再卖掉'
          },{
            label:'4',
            name:'什么都不做(觉得这是正常的)'
          },{
            label:'5',
            name:'补仓'
          }
        ],
        post:{
          user:'',
          password:'',
          page1:'',
          page2:'',
          page3:'',
          page4:'',
          page5:'',
          page6:'',
          page7:'',
          page8:'',
          page9:'',
        }
      }
    },
    methods:{
      upClick(){
        this.page--
        this.wid.width = `${this.page*11.11}%`
        switch (this.page){
          case 0:
            this.title = '您每年用于投资的金额是多少？'
            break;
          case 1:
            this.title = '您计划中的投资期限是多长？'
            break;
          case 2:
            this.title = '您目前的人生阶段：'
            break;
          case 3:
            this.title = '您用于投资的资产主要用于什么目的：'
            break;
          case 4:
            this.title = '假设有两种投资：'
            break;
          case 5:
            this.title = '您的投资经验如何？'
            break;
          case 6:
            this.title = '您认为自己能承受的最大投资损失是多少'
            break;
          case 7:
            this.title = '以下几种投资模式，您更偏好哪种模式：'
            break;
          case 8:
            this.title = '(短期风险承受能力)假设你投资的股票在一个星期中亏了20%, 你会怎么办? '
            break;

        }
      },
      topShow(){
        switch (this.page){
          case 0:
            if(!this.post.page1){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '您计划中的投资期限是多长？'
            break;
          case 1:
            if(!this.post.page2){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '您目前的人生阶段：'
            break;
          case 2:
            if(!this.post.page3){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '您用于投资的资产主要用于什么目的：'
            break;
          case 3:
            if(!this.post.page4){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '假设有两种投资：'
            break;
          case 4:
            if(!this.post.page5){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '您的投资经验如何？'
            break;
          case 5:
            if(!this.post.page6){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '您认为自己能承受的最大投资损失是多少'
            break;
          case 6:
            if(!this.post.page7){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '以下几种投资模式，您更偏好哪种模式：'
            break;
          case 7:
            if(!this.post.page8){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            this.title = '(短期风险承受能力)假设你投资的股票在一个星期中亏了20%, 你会怎么办? '
            break;
          case 8:
            if(!this.post.page9){
              this.$notify({
                title: '警告',
                message: '请至少选择一个选项',
                type: 'warning'
              });
              return false
            }
            break;
          case 9:
            if(!this.post.user){
              this.$notify({
                title: '警告',
                message: '用户名不能为空',
                type: 'warning'
              });
              return false
            }else if(!this.post.password){
              this.$notify({
                title: '警告',
                message: '密码不能为空',
                type: 'warning'
              });
              return false
            }
            break;
        }
        if(this.page<9){
          this.page++
          this.wid.width = `${this.page*11.11}%`
        }else{
          this.$notify({
            title: '成功',
            message: '提交成功',
            type: 'success'
          });
        }
      }
    },
    mounted(){
      this.title = '您每年用于投资的金额是多少？'
      this.wid.width = `${this.page*11.11}%`
    }
  }
</script>
<style lang="less" type="text/less">
  .assessment{
    display: flex;
    flex-direction: column;
    align-items: center;
    .topNav{
      max-width: 1140px;
      width: 100%;
      height: 82px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 4px solid #ddd;
      box-sizing: border-box;
      position: relative;
      span{
        position: absolute;
        height: 4px;
        background: #9d8148;
        bottom: -4px;
        left: 0;
        transition: all 0.5s;
      }
      .topLogo{
        display: flex;
        align-items: center;
        div{
          font-size: 16px;
          color: #999;
          padding-left: 25px;
          margin-left: 25px;
          position: relative;
          &:before{
            content: '';
            width: 1px;
            height: 34px;
            position: absolute;
            left: 0;
            top: calc(~'50% - 17px');
            background: #e4e4e4;
          }
        }
      }
      .num{
        display: flex;
        align-items: center;
        font-size: 16px;
        color: #9d8148;
      }
    }
    .main{
      width: 100%;
      max-width: 1140px;
      margin-top: 120px;
      display: flex;
      justify-content: space-between;
      .mainLeft{
        width: calc(~'100% - 450px');
        display: flex;
        img{
          width: 11px;
          height: 20px;
          margin-top: 15px;
          filter: grayscale(100%);
          transition: all 0.5s;
          opacity: 0.6;
          &:hover{
            filter: grayscale(0%);
            opacity: 1;
          }
        }
        .leftWrap{
          width: calc(~'100% - 20px');
          padding-left: 40px;
          font-size: 30px;
          color: #000;
          .pageOne{
            display: flex;
            flex-direction: column;
            p{
              color: #666;
              font-size: 14px;
              margin-top: 15px;
            }
          }
          .title{
            display: flex;
            flex-direction: column;
          }
        }
      }
      .mainRight{
        min-width: 300px;
        max-width: 450px;
        .user{
          li{
            border:1px solid #ccc;
            width: 100%;
            height: 40px;
            margin-bottom: 25px;
            &:last-child{
              margin: 0;
            }
            input{
              width: 100%;
              height: 100%;
            }
          }
        }
        .isRadio{
          li{
            margin-bottom: 25px;
            &:last-child{
              margin: 0;
            }
          }
        }
        .nextBtn{
          margin-top: 50px;
          width: 100px;
          height: 40px;
          border-radius: 5px;
          background: #9d8148;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .el-radio__input.is-checked .el-radio__inner{
    border-color: #9d8148;
    background: #9d8148;
  }
</style>
