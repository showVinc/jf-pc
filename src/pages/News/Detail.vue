<template>
  <div class="life">
    <head-public :nav="1"></head-public>
    <div class="lifeWrap">
      <div class="newsDetailWrap">
        <div class="title">
          {{newsInfo.title}}
        </div>
        <div class="date">
          <span>{{newsInfo.publish_time}}</span>
          <!--<div class="star">-->
            <!--<div>-->
              <!--收藏-->
            <!--</div>-->
          <!--</div>-->
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
          <li v-for="item in newsList" @click="openDetail(item)">
            <div class="newsImg">
              <img :src="item.cover_pic" alt="">
            </div>
            <div class="newsMain">
              <div>
                {{item.title}}
              </div>
              <span>
              {{item.publish_time}}
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
        newsInfo:{},
        newsList:[]
      }
    },
    methods:{
      openDetail(item){
        this.$router.push({path:'/news/detail',query:{aid:item.aid}})
      },
      refresh(){
        let self = this
        self.$fun.get(`${process.env.API.API}/news/info`,{aid:self.$route.query.aid},res=>{
          res.data.publish_time = self.$moment(res.data.publish_time*1000).format('YYYY-MM-DD')
          self.newsInfo = res.data
        })
      }
    },
    mounted(){
      let self = this
      self.$fun.get(`${process.env.API.API}/news/info`,{aid:self.$route.query.aid},res=>{
        res.data.publish_time = self.$moment(res.data.publish_time*1000).format('YYYY-MM-DD')
        self.newsInfo = res.data
      })
      self.$fun.get(`${process.env.API.API}/news/list`,{is_recommend:1,rows:8},res=>{
        for(let v of res.data){
          v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
        }
        self.newsList = res.data
      })
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$route": "refresh"
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
          justify-content: center;
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
          width: 100%;
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
<style lang="less" type="text/less">
  .newsDetailWrap{
    img{
      max-width: 100%!important;
    }
    line-height: 30px;
    text-align: justify;
    min-font-size: 16px;
  }
</style>

