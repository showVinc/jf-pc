<template>
  <div class="publicTop">
    <div class="topContent">
      <div class="headLeft">
        <div class="topLogo">
          <img src="../assets/images/public_img/logo.png" @click="$router.push('/')">
        </div>
        <ul class="topNav">
          <li :class="{active:navNum==0}" @click="$router.push('/')">
            首页
          </li>
          <li v-for="item,index in navList" :class="{active:(index+1)==navNum}" @click="topClick(item)">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="headRight">
        <div class="topSearch">
          <img src="../assets/images/public_img/search.png">
        </div>
        <div v-if="uid" class="user">
          <el-dropdown :hide-on-click="false"  @command="logout">
            <img src="../assets/images/public_img/user.jpg">
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="loginBtn" @click="$router.push('/login')" v-if="!uid">
          登录
        </div>
        <div class="showTime" @click="$router.push({name:'LoginAssessment'})" v-if="!uid">
          开始评估
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['nav'],
    data(){
      return {
        langShow:false,
        userShow:false,
        userInfo:{},
        isLogin:false,
        uid:'',
        navNum:null,
        navList:[],
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
      logout(command) {
        this.$fun.get(`${process.env.API.API}/user/lo`,{},res=>{
         console.log(res)
          if(res.errcode=='0'){
            sessionStorage.removeItem('authorization')
            this.$router.push('/login')
          }
        })
      },
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
      topClick(item){
        this.$router.push({path:item.url,query:{id:item.code}})
        document.title = item.name
      },
      isUser(){
        this.userShow = !this.userShow
      }
    },
    created(){
      let self = this
      let nav = sessionStorage.getItem('navList')
      if(nav){
        self.navList = JSON.parse(nav)
      }else{
        self.$fun.get(`${process.env.API.API}/news/arc`,{},res=>{
          self.navList = res.data
          sessionStorage.setItem('navList',JSON.stringify(res.data))
        })
      }
    },
    mounted(){
      this.uid = sessionStorage.getItem('authorization')
      let self = this
      self.navNum = this.nav
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicTop{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 80px;
    background: rgba(3,3,3,0.8);
    margin-bottom: 20px;
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
            box-sizing: content-box;
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
        .user{
          margin: 0 25px;
          display: flex;
          align-items: center;
          position: relative;
          img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
          }
          .user{
            display: flex;
            align-items: center;
          }
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
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown-menu{
    min-width: 60px!important;
    font-size: 14px;
  }
</style>
