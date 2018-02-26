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
        {{page}}/{{list&&list.length?list.length:0}}
      </div>
      <span :style="wid"></span>
    </div>
    <div class="main">
      <div class="mainLeft">
        <img src="../../assets/images/login/left_arrow.png" @click="$router.push('/')" v-if="page==0">
        <img src="../../assets/images/login/left_arrow.png" @click="upClick" v-if="page!=0">
        <div class="leftWrap">
          <div class="pageOne" v-if="page==list.length">
            基本信息
            <p>我们将使用这些信息来创建您的账户，并告知您的风险承受能理结果;</p>
          </div>
          <div class="title" v-if="page!=list.length">
            {{title}}
          </div>
        </div>
      </div>
      <div class="mainRight">
        <ul class="isRadio" v-for="item,index in list" v-if="page==index">
          <li v-for="el in item.selection">
            <el-radio v-model="post.answer[index]" :label="el.id">{{el.selection}}</el-radio>
          </li>
        </ul>
        <ul v-show="page==list.length" class="user">
          <li>
            <input type="text" placeholder="邮箱/手机号" v-model="post.tel">
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
  import SHA1 from '@/plugin/sha1'
  export default {
    data(){
      return {
        page:0,
        total_pages:'',
        title:'',
        wid:{
          width:''
        },
        list:[],
        post:{
          tel:'',
          password:'',
          answer:[]
        }
      }
    },
    methods:{
      upClick(){
        let self =this
        self.page--
        self.wid.width = `${self.page*(100/self.list.length)}%`
        self.title = self.list[self.page].title
      },
      topShow(){
        let self = this
        if(self.page==self.list.length){
          if(!self.post.tel||!self.post.password){
            this.$notify({
              title: '警告',
              message: '请填写信息',
              type: 'warning'
            });
            return false
          }
          self.$fun.post(`${process.env.API.API}/qunn/ques`,{tel:self.post.tel,password:SHA1(self.post.password),answer:self.post.answer},res=>{
            if(res.errcode=='0'){
              this.$notify({
                title: '提示',
                message: '提交成功',
                type: 'success'
              });
              self.$router.push('/')
              return false
            }
          })
          return false
        }else{
          if(!self.post.answer[self.page]){
            this.$notify({
              title: '警告',
              message: '请至少选择一个选项',
              type: 'warning'
            });
            return false
          }
        }
        self.page++
        self.wid.width = `${self.page*(100/self.list.length)}%`
        self.title = self.page!=self.list.length?self.list[self.page].title:''
      }
    },
    mounted(){
      let self = this
      self.$fun.get(`${process.env.API.API}/qunn/ques`,{rows:100},res=>{
        self.list = res.data
        self.title = res.data[0].title
        self.wid.width = `${self.page*(100/self.list.length)}%`
      })
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
