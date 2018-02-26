<template>
  <div class="life">
    <head-public :nav="2"></head-public>
    <div class="lifeWrap">
      <div class="lifeBanner">
        <img src="../../assets/images/life/top_banner.png">
      </div>
      <ul class="lifeList">
        <li v-for="item in navList" @click="$router.push({path:'/life/theme',query:{id:item.code}})">
          <div class="lifeBg">
            <img :src="item.cover_pic">
          </div>
          <div class="lifeListMain">
            <img :src="item.icon_pic">
            {{item.name}}
          </div>
        </li>
      </ul>
      <div class="news"  v-loading="loading">
        <div class="newsTit">
          <span></span>
          相关资讯
        </div>
        <ul class="newsList">
          <li v-for="item in newsList" @click="openDetail(item)">
            <div class="newsImg">
              <img :src="item.cover_pic">
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
        <div class="moreBtn" @click="moreClick" v-if="page.p<page.total_pages">
          加载更多
        </div>
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
        navList:[],
        newsList:[],
        page:{
          p:1,
          total_pages:1
        }
      }
    },
    methods:{
      openDetail(item){
        this.$router.push({path:'/news/detail',query:{aid:item.aid}})
      },
      moreClick(){
        self = this
        self.loading = true
        self.page.p++
        setTimeout(()=>{
          self.loading = false
          self.$fun.get(`${process.env.API.API}/news/relate`,{rows:8,p:self.page.p,code:self.$route.query.id},res=>{
            for(let v of res.data){
              v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
            }
            self.newsList = self.newsList.concat(res.data)
            self.page = res.page
          })
        },600)
      }
    },
    mounted(){
      let self = this
      self.$fun.get(`${process.env.API.API}/news/arc`,{code:self.$route.query.id,rows:10},res=>{
        self.navList = res.data[0].sons
      })

      self.$fun.get(`${process.env.API.API}/news/relate`,{rows:8,p:1,code:self.$route.query.id},res=>{
        for(let v of res.data){
          v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
        }
        self.newsList = res.data
        self.page = res.page
      })
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
      max-width: 1140px;
      width: 100%;
      .lifeBanner{
        width: 100%;
        margin-bottom: 20px;
      }
      .lifeList{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        li{
          width: calc(~'50% - 10px');
          margin-bottom: 20px;
          height: 310px;
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
            img{
              width: 58px;
              margin-bottom: 15px;
            }
          }
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

