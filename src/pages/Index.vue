<template>
  <div class="home">
    <head-public :nav="0" :style="headTop"></head-public>
    <div class="banner" v-if="!uid">
      <img src="../assets/images/home/home_banner.png">
      <div class="bannerText">
        <div class="assessmentBtn" @click="$router.push({name:'LoginAssessment'})">
          开始评估
        </div>
      </div>
    </div>
    <div class="data" :class="{isPd:uid}">
      <div class="dataWrap">
        行情数据：
        <vue-seamless-scroll :data="dataList" class="seamless-warp" :class-option="classOption" v-if="dataShow">
          <ul class="data">
            <li v-for="item in dataList">
              {{item.name}}
              <p :class="{isGreen:/-/.test(item.percent)}">{{item.stock}}<span>{{item.percent}}</span></p>
            </li>
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>
    <div class="publicMain">
      <div class="category" v-if="uid">
        <div class="categoryHead">
            <span>
              我的风险类型
            </span>
          <p @click="$router.push({name:'LoginAssessment'})">更改风险测试>></p>
        </div>
        <div class="categoryMain">
          <div class="mainLeft">
            <el-progress type="circle" :percentage="scoreInfo.score" :show-text="false" :width="192" :stroke-width="15">
            </el-progress>
            <span>
              {{scoreInfo.score}}
            </span>
          </div>
          <div class="mainRight">
            <div class="tit">
              {{scoreInfo.title}}
            </div>
            <div class="main">
              <ul>
                <li v-for="item in scoreInfo.star">
                  <span>{{item.name}}</span><el-rate v-model="item.value" disabled></el-rate>
                </li>
              </ul>
              <p>
                {{scoreInfo.description}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="selected">
        <div class="selectedTitle" v-if="!uid">
          金丰精选TOP10
          <p>Jin feng selected TOP10</p>
        </div>
        <div class="selectedHead" v-if="uid">
          <span>
            我的精选TOP10
          </span>
        </div>
        <div class="selectedMain">
          <no-more v-if="topList.length<=0"></no-more>
          <ul class="topHeadList">
            <li v-for="item,index in topList" v-if="index<3" @click="openDetail(item)">
              <div class="topHeadImg">
                <div>
                  <img :src="item.cover_pic">
                </div>
                <p>
                  TOP {{index+1}}
                </p>
              </div>
              <div class="topMain">
                <div class="mainFirst">
                  <span>{{item.category_name}}</span>
                  <div>
                    <p>{{item.title}}</p>
                    <div>{{item.summary}}</div>
                  </div>
                </div>
                <div class="mainFoo">
                  {{item.publish_time}}
                </div>
              </div>
            </li>
          </ul>
          <div class="topFooWrap">
            <no-more v-if="topList.length<2"></no-more>
            <ul class="topFooList">
              <li v-for="item,index in topList" v-if="index>2" @click="openDetail(item)">
                <div class="num">
                  <span>
                   {{index+1}}
                  </span>
                </div>
                <div class="content">
                  <div>
                    <div>{{item.title}}</div>
                    <p>{{item.summary}}</p>
                  </div>
                  <span>{{item.publish_time}}</span>
                </div>
                <div class="imgRight">
                  <img :src="item.cover_pic">
                </div>
              </li>
            </ul>
            <div class="moreBtn" @click="$router.push('/news')">
              更多
            </div>
          </div>
        </div>
      </div>
      <div class="introduce" v-if="!uid">
        <img src="../assets/images/home/home_foot.png">
      </div>
      <div class="partner" v-if="!uid">
        <div class="partnerTitle">
          合作伙伴
          <p>partner</p>
        </div>
        <ul class="partnerImg">
          <li v-for="item in footList" @click="openFoot(item)">
            <div>
              <img :src="item.img">
            </div>
          </li>
        </ul>
      </div>
      <div class="news" v-if="uid" v-loading="likeShow">
        <div class="newsTit">
          <span></span>
          <div>
            猜你喜欢
            <p @click="changeClick">换一批</p>
          </div>
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
    <foot-public :nav="0"></foot-public>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading:false,
        dataShow:false,
        likeShow:false,
        userInfo:{},
        uid:'',
        scoreInfo:{},
        headTop:{
          position: 'fixed',
          top: 0,
          left: 0,
          'z-index':999
        },
        dataList:[],
        topList:[],
        newsList:[],
        footList:[
          {
            img:require('../assets/images/foot/foot1.png'),
            url:'https://www.ubs.com/cn/en.html'
          }, {
            img:require('../assets/images/foot/foot2.png'),
            url:'http://www.aia.com.cn/zh-cn/index.html'
          }, {
            img:require('../assets/images/foot/foot3.png'),
            url:'http://www.yicai.com/'
          }, {
            img:require('../assets/images/foot/foot4.png'),
            url:'http://www.hkbea.com.cn/'
          }, {
            img:require('../assets/images/foot/foot5.png'),
            url:'http://www.hftfund.com/'
          }, {
            img:require('../assets/images/foot/foot6.png'),
            url:'http://www.bnpparibas.com.cn/zh/'
          }, {
            img:require('../assets/images/foot/foot7.png'),
            url:'http://www.freeman279.com/'
          }, {
            img:require('../assets/images/foot/foot8.png'),
            url:'http://www.swisstime.ch/zh/news/'
          }, {
            img:require('../assets/images/foot/foot9.png'),
            url:'http://www.swisstime.ch/zh/news/'
          },
        ]
      }
    },
    computed: {
      classOption: function () {
        return {
          step: 1, //步长 越大滚动速度越快
          limitMoveNum: 5, //启动无缝滚动最小数据量 this.dataList.length
          hoverStop: true, //是否启用鼠标hover控制
          direction: 2, //1 往上 0 往下
          openWatch: true, //开启data实时监听
          singleHeight: 0, //单条数据高度有值hoverStop关闭
          waitTime: 1000 //单步停止等待时间
        }
      },
      options () {
        // 合并参数
        return Object.assign({}, this.defaultOption, this.classOption)
      },
      moveSwitch () {
        //判断传入的初始滚动值和data的length来控制是否滚动
        return this.dataList.length < this.options.limitMoveNum
      }
    },
    methods: {
      openFoot(item){
        window.open(item.url)
      },
      changeClick(){
        let self = this
        self.likeShow = true
        self.newsList = [];

        self.$fun.get(`${process.env.API.API}/news/list`,{is_recommend:1,rows:4},res=>{
          for(let v of res.data){
            v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
          }
          self.newsList = res.data
        })
        setTimeout(()=>{
          self.likeShow = false
        },500)
      },
      scroll(){
        let self = this
        this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
        setTimeout(()=>{      //  这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
          this.animate=false;  // margin-top 为0 的时候取消过渡动画，实现无缝滚动
        },500)
      },
      openDetail(item){
        this.$router.push({path:'/news/detail',query:{aid:item.aid}})
      },
      moreBtn(){
        let self = this
      },
      urlShow(item){
        if(item.url){
          window.open(item.url)
        }
      }
    },
    created() {
      let self = this
      window.scrollTo(0,0)
      self.$fun.get(`${process.env.API.API}/sto`,{rows:100},res=>{
        for(let i=0;i<99;i++){
          self.dataList = self.dataList.concat(res.data)
        }
        self.dataShow = true
      })
      setTimeout(()=>{
        self.userInfo = self.$store.state.userInfo
      },300)
    },
    mounted(){
      let self = this
      setInterval(this.scroll,1000)
      self.uid = sessionStorage.getItem('authorization')
      if(self.uid){
        self.$fun.get(`${process.env.API.API}/qunn/res`,{},res=>{
          self.scoreInfo = res.data
        })
      }

      self.$fun.get(`${process.env.API.API}/news/list`,{is_recommend:1,rows:4},res=>{
        for(let v of res.data){
          v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
        }
        self.newsList = res.data
      })

      self.$fun.get(`${process.env.API.API}/news/list`,{is_recommend:1,rows:10},res=>{
        for(let v of res.data){
          v.publish_time = self.$moment(v.publish_time*1000).format('YYYY-MM-DD')
        }
        self.topList = res.data
      })
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  .seamless-warp {
    max-width: 1000px;
    height: 40px;
    overflow: hidden;
  }

  .data{
    color: #333;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #ccc;
    &.isPd{
      margin-top: 80px;
    }
    .dataWrap{
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1140px;
    }
    ul{
      margin-left: 15px;
      display: flex;
      li{
        display: flex;
        padding-right: 25px;
        p{
          color: #aa0000;
          margin-left: 10px;
          &.isGreen{
            color: #49962e!important;
          }
          span{
            margin-left: 10px;
          }
        }
      }
    }
  }
  .publicMain{
    padding:35px 0;
    .category{
      width: 100%;
      max-width: 1140px;
      margin-bottom: 40px;
      .categoryHead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-bottom: 10px;
        &:before{
          width: 5px;
          height: 20px;
          position: absolute;
          content: '';
          background: #9d8148;
          left: 0;
          top: calc(~'50% - 10px');
        }
        span{
          color: #000;
          font-size: 17px;
          padding-left: 15px;
          box-sizing: border-box;
          position: relative;
          &:before{
            width: 2px;
            height: 20px;
            position: absolute;
            content: '';
            background: #9d8148;
            left: 6px;
            top: calc(~'50% - 10px');
          }
        }
        p{
          font-size: 13px;
          color: #9d8148;
        }
      }
      .categoryMain{
        display: flex;
        align-items: center;
        width: 100%;
        .mainLeft{
          padding: 15px;
          border-radius: 50%;
          font-size: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          span{
            position: absolute;
          }
        }
        .mainRight{
          width: calc(~'100% - 222px');
          padding-left: 15px;
          box-sizing: border-box;
          .tit{
            font-size: 29px;
            color: #9d8148;
          }
          .main{
            ul{
              margin: 20px 0;
              display: flex;
              li{
                display: flex;
                align-items: center;
                width: 25%;
                span{
                  margin-right: 10px;
                }
              }
            }
            p{
              font-size: 15px;
              color: #333;
            }
          }
        }
      }
    }
    .selected{
      width: 100%;
      max-width: 1140px;
      margin-bottom: 30px;
      .selectedTitle{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        color: #000;
        p{
          font-size: 24px;
          color: #999;
          margin: 10px 0 60px;
        }
      }
      .selectedHead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        margin-bottom: 25px;
        &:before{
          width: 5px;
          height: 20px;
          position: absolute;
          content: '';
          background: #9d8148;
          left: 0;
          top: calc(~'50% - 10px');
        }
        span{
          color: #000;
          font-size: 17px;
          padding-left: 15px;
          box-sizing: border-box;
          position: relative;
          &:before{
            width: 2px;
            height: 20px;
            position: absolute;
            content: '';
            background: #9d8148;
            left: 6px;
            top: calc(~'50% - 10px');
          }
        }
      }
      .selectedMain{
        .topHeadList{
          display: flex;
          li{
            width: 31%;
            margin-right: 3.5%;
            border:1px solid #e9e9e9;
            box-sizing: border-box;
            transition: all 0.5s;
             &:hover{
               box-shadow: 0 2px 5px #ccc;
               .topHeadImg{
                 div{
                   img{
                     transform: scale(1.1);
                   }
                 }
               }
             }
            .topMain{
              width: 100%;
              height: 220px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 15px 20px 20px;
              box-sizing: border-box;
              .mainFirst{
                font-size: 18px;
                div{
                  margin-top: 15px;
                  color: #333;
                  p{
                    font-size: 18px;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                  }
                  div{
                    margin-top: 15px;
                    font-size: 14px;
                    color: #666;
                    overflow:hidden;
                    text-overflow:ellipsis;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:3;
                  }
                }
                span{
                  font-size: 12px;
                  color: #666;
                }
              }
              .mainFoo{
                font-size: 12px;
                color: #999;
              }
            }
            &:hover{
              border-color: #9d8148;
            }
            &:last-child{
              margin: 0;
            }
            .topHeadImg{
              position: relative;
              div{
                overflow: hidden;
                height: 270px;
                img{
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: all 0.5s;
                }
              }
              p{
                width: 100px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: url('../assets/images/home/hot.png');
                background-size: cover;
                color: #fff;
                font-size: 22px;
                position: absolute;
                top: 25px;
                left: -1px;
              }
            }
          }
        }
        .topFooWrap{
          margin-top: 30px;
          border:1px solid #e9e9e9;
          display: flex;
          flex-direction: column;
          align-items: center;
          .topFooList{
            display: flex;
            flex-direction: column;
            width: 100%;
            li{
              display: flex;
              padding: 30px 120px 23px;
              transition: all 0.5s;
              width: 100%;
              box-sizing: border-box;
              &:hover{
                background: #f5f2ec;
                .imgRight{
                  img{
                    transform: scale(1.1);
                  }
                }
              }
              .num{
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-image: url("../assets/images/home/message.png  ");
                background-size: cover;
                font-size: 14px;
                color: #9d8148;
                span{
                  padding-bottom: 5px;
                }
              }
              .content{
                width: calc(~'100% - 175px');
                padding: 0 30px;
                box-sizing: border-box;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                div{
                  div{
                    font-size: 18px;
                    color: #333;
                    margin-bottom: 15px;
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
              .imgRight{
                overflow: hidden;
                img{
                  width: 147px;
                  height: 110px;
                  object-fit: cover;
                  transition: all 0.5s;
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
            margin: 20px 0 60px;
            border-radius: 5px;
          }
        }
      }
    }
    .introduce{
      margin-bottom: 50px;
      img{
        width: 100%;
      }
    }
    .partner{
      width: 100%;
      max-width: 1140px;
      .partnerTitle{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        font-size: 33px;
        color: #000;
        margin-bottom: 60px;
        p{
          font-size: 26px;
          color: #999;
        }
      }
      .partnerImg{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        li{
          height: 45px;
          margin:0 70px 30px 0;
          div{
            height: 100%;
            box-sizing: border-box;
            &:hover{
             img{
               filter: grayscale(0%);
               opacity: 1;
             }
            }
            img{
              /*width: 100%;*/
              height: 100%;
              object-fit: cover;
              filter: grayscale(100%);
              transition: all 0.5s;
              opacity: 0.4;
            }
          }
        }
      }
    }
    .news{
      width: 100%;
      max-width: 1140px;
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
        div{
          display: flex;
          justify-content: space-between;
          align-items: center;
          p{
            font-size: 13px;
            color: #9d8148;
          }
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
  .banner{
    position: relative;
    .bannerText{
      top:  calc(~'50% + 100px');
      left: calc(~'50% - 80px');
      z-index: 10;
      position: absolute;
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      color: #fff;
      .bannerTextHead{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 41px;
        p{
          font-size: 34px;
          margin: 20px 0 110px;
          span{
            font-weight: bold;
          }
        }
      }
      .assessmentBtn{
        width: 160px;
        height: 50px;
        background: #9d8148;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 20px;
        margin-top: 5px;
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .banner{
    .el-carousel__container{
      height: 660px;
      img{
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
    .el-carousel__indicators{
      width: 100%;
      left: 0;
      position: absolute;
      .el-carousel__indicator{
        &.is-active{
          .el-carousel__button{
            background: #9d8148;
          }
        }
        .el-carousel__button{
          width: 14px;
          height: 14px;
          border-radius: 50%;
        }
      }
    }
  }
</style>
