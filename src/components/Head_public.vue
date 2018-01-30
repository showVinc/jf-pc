<template>
  <div class="publicTop">
    <div class="topContent">
      <div class="headLeft">
        <div class="topLogo">
          <img src="../assets/images/public_img/logo.png" @click="$router.push('/')">
        </div>
        <ul class="topNav">
          <li v-for="item,index in navList" :class="{active:index==navNum}" @click="navNum=index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="headRight">
        <div class="topSearch">
          <img src="../assets/images/public_img/search.png">
        </div>
        <div class="loginBtn">
          登录
        </div>
        <div class="showTime">
          开始评估
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        langShow:false,
        userShow:false,
        userInfo:{},
        isLogin:false,
        uid:'',
        navNum:0,
        navList:[
          {
            name:'首页'
          }, {
            name:'纵观天下'
          },{
            name:'美好生活'
          },{
            name:'金丰研究所'
          }
        ],
        userList: [{
          value: 'user',
          label: this.$t('personalCenter')
        },{
          value: 'identify',
          label: this.$t('identifyList')
        },{
          value: 'logout',
          label: this.$t('logout')
        }],
      }
    },
    methods:{
      langChange(){
        for(let value of this.options){
          if(value.value == this.value){
            this.langName = value.label
            localStorage.setItem('lang',value.value)
            location.reload()
          }
        }
      },
      userChange(){
        if(this.userEmail=='user'){
          this.$router.push('/user')
        }else if(this.userEmail == 'identify'){
          this.$router.push('/user/identify')
        }else{
          if(!this.isLogin){
            this.isLogin = true
            this.$http.post(`${process.env.API.API}/user/lo`).then(res=>{
              if(res.data.errcode=='0'){
                localStorage.removeItem('authorization')
                location.reload()
              }
            }).catch(err=>{
              console.log(err)
            })
          }
        }
      },
      isLang(){
        this.langShow = !this.langShow
      },
      isUser(){
        this.userShow = !this.userShow
      }
    },
    created(){

    },
    mounted(){
      this.uid = localStorage.getItem('authorization')
      let self = this
      setTimeout(()=>{
        self.userInfo = self.$store.state.userInfo
      },300)

      let lang = localStorage.getItem('lang')
      if(lang){
        for(let value of self.options){
          if(lang==value.value){
            self.langName = value.label
          }
        }
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicTop{
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    top: 0;
    left: 0;
    height: 80px;
    background: rgba(3,3,3,0.7);
    z-index:999;
    .topContent{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1140px;
      .headLeft{
        display: flex;
        align-items: center;
        color: #fff;
        .topLogo{
          margin-right: 100px;
        }
        .topNav{
          display: flex;
          font-size: 16px;
          li{
            height: 44px;
            padding: 0 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 30px;
            &.active{
              border-bottom: 2px solid #fff;
            }
            &:last-child{
              margin:0;
            }
          }
        }
      }
      .headRight{
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #212125;
        min-height: 33px;
        font-size: 16px;
        color: #fff;
        .topSearch{
          display: flex;
          align-items: center;
          position: relative;
          padding-right: 25px;
          height: 33px;
          img{
            width: 20px;
            height: 20px;
          }
          &:before{
            content: '';
            position: absolute;
            right: 0;
            top:0;
            width: 1px;
            height: 33px;
            background: #999;
          }
        }
        .loginBtn{
          display: flex;
          align-items: center;
          margin: 0 25px;
        }
        .showTime{
          min-width: 120px;
          background: #9d8148;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
</style>
