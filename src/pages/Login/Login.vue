<template>
  <div class="login">
    <head-public></head-public>
    <div class="loginMain">
      <div class="loginTit">
        登录
      </div>
      <div class="mainWrap">
        <div class="mainLeft">
          <div class="inputShow">
            <span>用户名</span>
            <input type="text" v-model="post.tel" :class="{'active':isEmail}" ref="inputEmail" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isEmail">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>密码</span>
            <input type="password" v-model="post.password" :class="{'active':isPassword}" ref="inputPassword" @blur="errBlur" @keyup.13="sub">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isPassword">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="isLogin">
            <div @click="sub">
              登录
            </div>
            <!--<span @click="$router.push('/login/back')">-->
              <!--<img src="../../assets/images/public_img/arrow.png" alt="">-->
            <!--{{$t('forgetPassword')}}-->
            <!--</span>-->
          </div>
        </div>
        <!--<div class="mainRight">-->
          <!--<p>{{$t('noAccount')}}</p>-->
          <!--<div @click="$router.push('/login/register')">-->
            <!--{{$t('goRegister')}}-->
          <!--</div>-->
        <!--</div>-->
      </div>
    </div>
    <foot-public></foot-public>
  </div>
</template>
<script>
  import SHA1 from '@/plugin/sha1'
  export default {
    data() {
      return {
        msg:'',
        token:'',
        sid:'',
        isEmail:false,
        isPassword:false,
        post:{
          tel:'',
          password:''
        }
      }
    },
    methods:{
      errBlur(){
        let self = this
        self.isEmail = false
        self.isPassword = false
      },
      sub(){
        let self = this
        self.msg = ''
//        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        if(!self.post.tel){
          self.msg = '用户名不能为空！'
          self.isEmail = true
          this.$refs['inputEmail'].focus()
        }else if(!self.post.password){
          self.msg = this.$t('noPassword')
          self.isPassword = true
          this.$refs['inputPassword'].focus()
        }

        if(self.msg){
          return false
        }else{
          self.$http.post(`${process.env.API.API}/user/li`,{tel:self.post.tel,password:SHA1(self.post.password)}).then(res=>{
            if(res.data.errcode=='0'){
              self.$notify({
                message:self.$t('loginSuccess'),
                type: 'success'
              });
              sessionStorage.setItem('authorization',res.data.authorization)
              self.$router.push({name:'Index'})
            }else{
              self.$notify({
                message:res.data.errmsg,
                type: 'warning'
              });
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    },
    mounted(){
      localStorage.removeItem('authorization')
    }
  }
</script>
<style type="text/less" lang="less">
  .loginMain {
    padding: 60px 50px 0;
    color: #333;
    .loginTit {
      font-size: 24px;
      margin-bottom: 40px;
    }
    .mainWrap {
      display: flex;
      justify-content: space-between;
      .mainLeft {
        max-width: 500px;
        margin-right: 70px;
        flex:1;
        .isLogin{
          display: flex;
          margin-top: 10px;
          font-size: 14px;
          div{
            min-width: 110px;
            height: 40px;
            display: flex;
            align-items: center;
            background: #212125;
            justify-content: center;
            color: #fafafa;
            border-radius:3px;
            margin-right: 50px;
          }
          span{
            display: flex;
            align-items: center;
            color: #007099;
            font-size: 13px;
            img{
              width: 6px;
              height: 10px;
              margin-right: 5px;
            }
          }
        }
      }
      .mainRight{
        width: calc(~'100% - 630px');
        margin-top: 31px;
        font-size: 14px;
        padding: 30px 25px;
        background: #fafafa;
        p{
          font-weight: bold;
        }
        div{
          width: 110px;
          background: #212125;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fafafa;
          border-radius: 3px;
          margin-top: 30px;
        }
      }
    }
  }
</style>
