<template>
  <div class="life">
    <head-public :nav="2"></head-public>
    <div class="lifeWrap">
      <ul class="lifeList">
        <li v-for="item in list">
          <div class="lifeBg">
            <img :src="item.img">
          </div>
          <div class="iconStyle">
            <img :src="item.icon">
            {{item.name}}
          </div>
          <div class="lifeListMain">
            {{item.title}}
          </div>
        </li>
      </ul>
      <div class="moreBtn">
        加载更多
      </div>
      <div class="news"  v-loading="loading">
        <div class="newsTit">
          <span></span>
          相关资讯
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
    <foot-public  :nav="2"></foot-public>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        loading:false,
        list:[
          {
            name:'便捷跨境',
            icon:require('../../assets/images/life/icon1.png'),
            img:require('../../assets/images/life/nav1.png'),
            title:'测试一下标题'
          },{
            name:'海外投资',
            icon:require('../../assets/images/life/icon2.png'),
            img:require('../../assets/images/life/nav2.png'),
            title:'测试二下标题'
          }
        ],
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
      moreClick(){
        let self = this
        self.loading = true
        setTimeout(()=>{
          self.newsList = self.newsList.concat(self.newsList)
          self.loading = false
        },500)
      }
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
      flex-direction: column;
      align-items: center;
      .lifeList{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        li{
          width: 100%;
          margin-bottom: 20px;
          height: 300px;
          position: relative;
          transition: all 0.5s;
          &:hover{
            box-shadow: 0 2px 5px #ccc;
            .lifeBg{
              img{
                transform: scale(1.1);
              }
            }
          }
          .lifeBg{
            width: 100%;
            height: 100%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: all 0.5s;
            }
          }
          .iconStyle{
            position: absolute;
            left: 15px;
            top:15px;
            display: flex;
            align-items: center;
            color: #fff;
            font-size: 14px;
            img{
              width: 16px;
              margin-right: 5px;
            }
          }
          .lifeListMain{
            position: absolute;
            font-size: 24px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            left: 0;
            top:0;
          }
        }
      }
      .moreBtn{
        width: 100px;
        height: 38px;
        border: 1px solid #9d8148;
        color: #9d8148;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
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
            width: calc(~'100% - 130px');
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
        .moreBtn{
          width: 100px;
          height: 38px;
          border: 1px solid #9d8148;
          color: #9d8148;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
        }
      }
    }
  }
</style>

