<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {}
    },
    created(){
      let self = this
//      let langList=[
//        'zh-TW',
//        'en-US'
//      ]
//      let lang = navigator.browserLanguage?navigator.browserLanguage:navigator.language
//      if(langList.indexOf(lang)!=-1){
//        if(!localStorage.getItem('lang')){
//          if(langList.indexOf(lang)!=-1){
//            switch(lang){
//              case 'zh-TW':
//                lang='zh-hk'
//                break;
//              case 'en-US':
//                lang='en-us'
//                break;
//            }
//            localStorage.setItem('lang',lang)
//          }else{
//            localStorage.setItem('lang','zh-hk')
//          }
//          setTimeout(()=>{
//            location.reload()
//          },500)
//          return false
//        }
//      }
    },
    mounted(){
      let self = this
      let uid = sessionStorage.getItem('authorization')
    }
  }
</script>
<style lang="less" type="text/less">
  *{
    font-family: "Microsoft YaHei";
  }
  #app{
    min-height: calc(~'100vh - 170px');
    margin: 0 auto;
    width: 100%;
    background: #fff;
    position: relative;
    padding-bottom: 170px;
    /*margin-bottom: 30px;*/
    font-family:"PingFangSC-Regular", "sans-serif","Microsoft YaHei","微软雅黑";
    color: #333;
  }
</style>
