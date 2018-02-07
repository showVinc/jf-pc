<template>
  <div class="life">
    <head-public :nav="2"></head-public>
    <div class="lifeWrap">
      <div class="newsDetailWrap">
        <div class="title">
          {{newsInfo.title}}
        </div>
        <div class="date">
          <span>{{newsInfo.date}}</span>
          <div class="star">
            <div>
              收藏
            </div>
          </div>
        </div>
        <div class="main" v-html="newsInfo.content">

        </div>
      </div>
      <div class="news">
        <div class="newsTit">
          <span></span>
          您可能感兴趣的文章
        </div>
        <ul class="newsList">
          <li v-for="item in newsList">
            <div class="newsImg">
              <img :src="item.img" alt="">
            </div>
            <div class="newsMain">
              <div>
                {{item.title}}
              </div>
              <span>
              {{item.date}}
            </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <foot-public></foot-public>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        newsInfo:{
          content:'测阿斯加德哈手机宽带哈手机宽带哈数据的哈吉斯的高仿黄金时代个环境第三方更多数据锋哥是带红酒是的话凡哥说的黄金分割山东黄金凡哥说的黄金分割山东黄金闪电发货公司电话金丰定个时间凡哥说的返回结果闪电发货申达股份黄金时代高仿黄金时代国防建设试',
          title:'测试标题',
          date:'2018-02-07'
        },
        newsList:[
          {
            title:'展望2019放撒开绿灯就撒啊设计的婚纱的哈斯卡混沌斯卡迪哈斯卡的开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          }, {
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          },{
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          },{
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          },{
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          },{
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          },{
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          },{
            title:'展望2019放撒开绿灯就撒开了都结束了卡德加撒赖扩大',
            img:require('../../assets/images/home/news_banner.png'),
            date:'2018-07-18'
          }
        ]
      }
    },
    methods:{

    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .life{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    .lifeWrap{
      width: 100%;
      max-width: 1140px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 30px;
      .newsDetailWrap{
        width: 100%;
        max-width: 800px;
        color: #000;
        .title{
          font-size: 24px;
          text-align: center;
        }
        .date{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 40px 0;
          span{
            font-size: 12px;
            color: #666;
          }
          .star{
            div{
              font-size: 14px;
              width: 60px;
              height: 30px;
              color: #ccc;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 25px;
              border:1px solid #ccc;
            }
          }
        }
        .main{
          font-size: 14px;
          color: #333;
        }
      }
      .news{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 60px;
        .newsTit{
          width: 100%;
          padding: 30px;
          box-sizing: border-box;
          position: relative;
          font-size: 18px;
          color: #000;
          span{
            width: 2px;
            height: 20px;
            background: #9d8148;
            content: '';
            position: absolute;
            left: 6px;
            top: calc(~'50% - 10px');
          }
          &:before{
            width: 4px;
            height: 20px;
            background: #9d8148;
            content: '';
            position: absolute;
            left: 0;
            top: calc(~'50% - 10px');
          }
          &:after{
            content: '';
            position: absolute;
            width: calc(~'100% - 220px');
            height: 1px;
            right: 20px;
            top:calc(~'50% - 0.5px');
            background: #e9e9e9;
          }
        }
        .newsList{
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 40px;
          li{
            width: calc(~'25% - 15px');
            margin:0 20px 20px 0;
            border:1px solid #ededed;
            box-sizing: border-box;
            transition: all 0.5s;
            &:nth-child(4n){
              margin-right:0 ;
            }
            &:hover{
              box-shadow: 0 2px 5px #ccc;
            }
            .newsImg{
              width: 100%;
              height: 196px;
              overflow: hidden;
              img{
                transition: all 0.5s;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
              &:hover{
                img{
                  transform: scale(1.1);
                }
              }
            }
            .newsMain{
              height: 115px;
              width: 100%;
              padding: 20px 15px;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              div{
                font-size: 16px;
                color: #000;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }
              span{
                font-size: 12px;
                color: #999;
              }
            }
          }
        }
      }
    }
  }
</style>

