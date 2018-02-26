<template>
  <div class="home">
    <head-public :nav="3"></head-public>
    <div class="publicMain">
      <div class="newsBanner">
        <img src="../../assets/images/research/top_banner.png">
      </div>
      <div class="newsMainWrap">
        <div class="newsMainLeft"  v-loading="loading">
          <ul class="navTopStyle">
            <li v-for="item,index in navList" :class="{'active':navNum==index}" @click="navClick(item,index)">
              {{item.name}}
            </li>
          </ul>
          <div class="navMainList">
            <no-more v-if="researchList.length<=0"></no-more>
            <ul>
              <li v-for="item in researchList" @click="openDetail(item)">
                <div class="mainLeft">
                  <img src="../../assets/images/research/message.png">
                </div>
                <div class="mainRight">
                  <div class="mainRightTitle">
                    <div>
                      {{item.title}}
                    </div>
                    <p>
                      {{item.summary}}
                    </p>
                  </div>
                  <span>
                    {{item.publish_time}}
                  </span>
                </div>
              </li>
            </ul>
            <div class="moreBtn" @click="moreClick" v-if="page.p<page.total_pages">
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
              <li v-for="item,index in topList" v-if="index<3" @click="openDetail(item)">
                <div class="imgBg">
                  <img :src="item.cover_pic">
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
              <li v-for="item,index in topList" v-if="index>2" @click="openDetail(item)">
                <span>{{index+1}}</span>
                <div>{{item.title}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <foot-public  :nav="3"></foot-public>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        navNum: 0,
        loading:false,
        page:{
          p:1,
          total_pages:1
        },
        navList: [],
        researchList: [],
        topList: []
      }
    },
    methods: {
      openDetail(item){
        this.$router.push({path:'/news/detail',query:{aid:item.aid}})
      },
      moreClick(){
        self = this
        self.loading = true
        self.page.p++
        setTimeout(()=>{
          self.loading = false
          self.$fun.get(`${process.env.API.API}/news/list`,{rows:10,p:self.page.p,code:self.navList[self.navNum].code},res=>{
            for(let v of res.data){
              v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
            }
            self.researchList = self.researchList.concat(res.data)
            self.page = res.page
          })
        },600)
      },
      navClick(item, index) {
        let self = this
        if (self.navNum == index||self.loading) {
          return false
        }
        self.loading = true
        self.navNum = index
        self.page.p = 1
        self.researchList = []
        self.$fun.get(`${process.env.API.API}/news/list`,{rows:10,p:self.page.p,code:item.code},res=>{
          self.researchList = res.data
          self.page = res.page
        })
        setTimeout(()=>{
          self.loading = false
        },600)
      }
    },
    mounted() {
      let self = this
      self.loading = true
      self.$fun.get(`${process.env.API.API}/news/arc`,{code:self.$route.query.id,rows:10},res=>{
        self.navList = res.data[0].sons
      })

      self.$fun.get(`${process.env.API.API}/news/list`,{is_recommend:1,rows:10},res=>{
        self.topList = res.data
      })


      self.$fun.get(`${process.env.API.API}/news/list`,{rows:10,p:1,code:self.$route.query.id},res=>{
        for(let v of res.data){
          v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
        }
        self.researchList = res.data
        self.page = res.page
      })

      setTimeout(()=>{
        self.loading = false
      },600)
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
              }
              &:last-child{
                border: none;
              }
              .mainLeft{
                img{
                  width: 23px;
                  height: 21px;
                }
              }
              .mainRight{
                width: calc(~'100% - 30px');
                padding: 0 10px 0 10px;
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
                font-size: 14px;
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
