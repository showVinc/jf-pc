<template>
  <div class="publicFoot">
    <div class="footWrap">
      <div class="footHeadWrap">
        <div class="footLeft">
          <ul class="footFirst">
            <li v-for="item,index in footList" :class="{active:index==footNum}" @click="footClick(item)">
              {{item.name}}
            </li>
          </ul>
          <ul class="footRight">
            <li>
              商务合作邮箱：info@jf-fin.com
            </li>
            <li>
              电话：4000-816-118
            </li>
            <li>
              地址：深圳市福田区益田路5033号平安金融中心73楼
            </li>
          </ul>
        </div>
        <div class="footLast">
          <div class="kf">
            <img src="../assets/images/home/wx_code.png" v-show="wxShow" class="isHide">
            <img src="../assets/images/home/wechat.png" @mouseenter="wxShow = !wxShow" @mouseleave="wxShow =false">
          </div>
          <div class="kf">
            <img src="../assets/images/home/kf_code.png" v-show="kfShow" class="isHide">
            <img src="../assets/images/home/kf.png" @mouseenter="kfShow = !kfShow" @mouseleave="kfShow =false">
          </div>
        </div>
      </div>
      <div class="footLastWrap">
        Copyright©金丰平安 深圳金丰平安互联网金融服务有限公司 All Rights Reserved 版权所有 复制必究
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['nav'],
    data(){
      return {
        kfShow:false,
        wxShow:false,
        footNum:null,
        footList:[
          {
            name:'首页',
            path:'/'
          }, {
            name:'资讯全览',
            path:'/news'
          },{
            name:'美好生活',
            path:'/life'
          },{
            name:'金丰研究所',
            path:'/research'
          }
        ]
      }
    },
    methods:{
      footClick(item){
        this.$router.push(item.path)
      }
    },
    mounted(){
      this.footNum = this.nav
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicFoot{
    width: 100%;
    height: 170px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(3,3,3,.8);
    .footWrap{
      display: flex;
      flex-direction: column;
      width: 1140px;
      height: 100%;
      .footHeadWrap{
        font-size: 14px;
        color: #999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 130px;
        border-bottom: 1px solid #717171;
        .footLeft{
          display: flex;
          flex-direction: column;
          .footFirst{
            display: flex;
            margin-bottom: 15px;
            li{
              position: relative;
              padding:0 15px;
              &.active{
                color: #fff;
              }
              &:first-child{
                padding-left: 0;
              }
              &:last-child{
                &:before{
                  content: '';
                  width: 0;
                  height: 0;
                }
              }
              &:before{
                content: '';
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background: #fff;
                position: absolute;
                right: 0;
                top: calc(~'50% - 2.5px');
              }
            }
          }
          .footRight{
            display: flex;
            li{
              margin-right: 40px;
              &:last-child{
                margin: 0;
              }
            }
          }
        }
        .footLast{
          display: flex;
          img{
            width: 40px;
            height: 40px;
            transition: all 0.5s;
            &:last-child{
              margin-left: 15px;
            }
          }

          .kf{
            position: relative;
            .isHide{
              position: absolute;
              width: 80px;
              height: 85px;
              left: -5px;
              top: -90px;
            }
          }
        }
      }
      .footLastWrap{
        display: flex;
        align-items: center;
        justify-content: center;
        height: calc(~'100% - 130px');
        font-size: 12px;
        color: #999;
      }
    }
  }
</style>
