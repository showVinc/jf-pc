<template>
  <div class="home">
    <head-public :nav="1"></head-public>
    <div class="publicMain">
      <div class="newsBanner">
        <img src="../../assets/images/home/news_banner.png">
      </div>
      <div class="newsMainWrap">
        <div class="newsMainLeft">
          <ul class="navTopStyle">
            <li v-for="item,index in navList" :class="{'active':navNum==index}" @click="navClick(item,index)">
              {{item.name}}
            </li>
          </ul>
          <div class="navMainList" v-loading="loading">
            <ul>
              <li v-for="item in newsList">
                <div class="mainLeft">
                  <img :src="item.img">
                </div>
                <div class="mainRight">
                  <div class="mainRightTitle">
                    <div>
                      {{item.title}}
                    </div>
                    <p>
                      {{item.content}}
                    </p>
                  </div>
                  <span>
                    {{item.date}}
                  </span>
                </div>
              </li>
            </ul>
            <div class="moreBtn" @click="moreClick">
              加载更多
            </div>
          </div>
        </div>
        <div class="newsMainRight">
          <div class="newsRightHead">
            <div class="newsRightHeadTit">
              金丰精选TOP 10
            </div>
            <ul class="newsRightFirst">
              <li v-for="item,index in topList" v-if="index<3">
                <div class="imgBg">
                  <img :src="item.img">
                </div>
                <div>
                  {{item.title}}
                </div>
                <span>
                  TOP {{index+1}}
                </span>
              </li>
            </ul>
            <ul class="newsRightLast">
              <li v-for="item,index in topList" v-if="index>2">
                <span>{{index+1}}</span>
                <div>{{item.title}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <foot-public></foot-public>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navNum: 0,
        loading:false,
        navList: [
          {
            name: '资讯'
          }, {
            name: '股票'
          }, {
            name: '债券'
          }, {
            name: '外汇'
          }, {
            name: '基金'
          }, {
            name: '银行'
          }, {
            name: '私募'
          }, {
            name: '金融科技'
          }, {
            name: '数据'
          }
        ],
        newsList: [
          {
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          }
        ],
        topList: [
          {
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          },{
            img: require('../../assets/images/home/news_banner.png'),
            title: '2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
            content: '卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
            date: '2018-08-17'
          }
        ]
      }
    },
    methods: {
      moreClick(){
        self = this
        self.loading = true
        setTimeout(()=>{
          self.newsList = self.newsList.concat(self.newsList)
          self.loading = false
        },500)
      },
      navClick(item, index) {
        let self = this
        if (self.navNum == index) {
          return false
        }
        self.navNum = index
      }
    },
    mounted() {
//      this.$fun.asyncFun('http://localhost:8080/hh', {}, (res) => {
//        console.log(res)
//      })
    }
  }
</script>
<style lang="less" scoped type="text/less">
  .publicMain {
    .newsBanner {
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .newsMainWrap {
      width: 100%;
      max-width: 1140px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      .newsMainLeft {
        width: calc(~'100% - 340px');
        .navTopStyle {
          display: flex;
          border-bottom: 1px solid #ccc;
          color: #666;
          padding: 20px 0;
          li {
            margin-right: 30px;
            &.active {
              color: #9d8148;
            }
          }
        }
        .navMainList{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          ul{
            width: 100%;
            li{
              display: flex;
              border-bottom: 1px solid #eee;
              padding: 30px 0;
              transition: all 0.5s;
              &:hover{
                background: #f5f2ec;
                .mainLeft{
                  img{
                    transform: scale(1.1);
                  }
                }
              }
              &:last-child{
                border: none;
              }
              .mainLeft{
                width: 220px;
                height: 152px;
                overflow: hidden;
                img{
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: all 0.5s;
                }
              }
              .mainRight{
                width: calc(~'100% - 220px');
                padding: 0 20px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-sizing: border-box;
                .mainRightTitle{
                  font-size: 18px;
                  color: #000;
                  div{
                    margin-bottom: 20px;
                  }
                  p{
                    font-size: 14px;
                    color: #666;
                  }
                }
                span{
                  font-size: 12px;
                  color: #999;
                }
              }
            }
          }
          .moreBtn{
            width: 100px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #9d8148;
            border:1px solid #9d8148;
            box-sizing: border-box;
            margin: 40px 0 60px;
            border-radius: 5px;
          }
        }
      }
      .newsMainRight {
        width: 310px;
        color: #000;
        .newsRightHead{
          display: flex;
          flex-direction: column;
          background: #fafafa;
          padding: 0 20px;
          .newsRightHeadTit{
            display: flex;
            border-bottom: 1px solid #ccc;
            padding: 20px 0;
            color: #333;
          }
          .newsRightFirst{
            li{
              position: relative;
              border-bottom: 1px solid #eee;
              padding: 25px 0;
              box-sizing: border-box;
              &:hover{
                .imgBg{
                  img{
                    transform: scale(1.1);
                  }
                }
              }
              .imgBg{
                width: 100%;
                height: 168px;
                overflow: hidden;
                margin: 0;
                img{
                  transition: all 0.5s;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              div{
                font-size: 16px;
                color: #000;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                margin-top: 15px;
                overflow: hidden;
                font-weight: bold;
              }
              span{
                background-image: url("../../assets/images/home/hot.png");
                background-size: cover;
                position: absolute;
                top: 40px;
                left: 0;
                width: 55px;
                height: 16px;
                font-size: 12px;
                color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
          .newsRightLast{
            li{
              display: flex;
              font-size: 16px;
              padding: 20px 0;
              border-bottom: 1px solid #eee;
              &:last-child{
                border: none;
                padding-bottom: 60px;
              }
              span{
                width: 18px;
                height: 18px;
                background: #9d8148;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                margin-right: 15px;
              }
              div{
                width: calc(~'100% - 33px');
                color: #000;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
            }
          }
        }
      }
    }
  }
</style>
