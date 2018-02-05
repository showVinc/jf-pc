<template>
  <div class="home">
    <head-public :nav="0" :style="headTop"></head-public>
    <div class="banner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 1" :key="item">
          <img src="../assets/images/home/home_banner.png">
        </el-carousel-item>
      </el-carousel>
      <div class="bannerText">
        <div class="bannerTextHead">
          知己知彼，让理财不慌不乱
          <p>个人风险评估测试：<span>1分钟</span>开启优质理财生活</p>
        </div>
        <div class="assessmentBtn">
          开始评估
        </div>
      </div>
    </div>
    <div class="data">
      <div class="dataWrap">
        行情数据：
        <ul class="data">
          <li v-for="item in dataList">
            {{item.name}}
            <p>
              {{item.price}}
              <span>{{item.isRise==1?'+':'-'}}{{item.num}}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="publicMain">
      <div class="selected">
        <div class="selectedTitle">
          金丰精选TOP10
          <p>Jin feng selected TOP10</p>
        </div>
        <div class="selectedMain">
          <ul class="topHeadList">
            <li v-for="item,index in topList.list" v-if="index<3">
              <div class="topHeadImg">
                <div>
                  <img :src="item.img">
                </div>
                <p>
                  TOP {{index+1}}
                </p>
              </div>
              <div class="topMain">
                <div class="mainFirst">
                  <span>{{item.label}}</span>
                  <div>
                    <p>{{item.title}}</p>
                    <span>{{item.content}}</span>
                  </div>
                </div>
                <div class="mainFoo">
                  {{item.date}}
                </div>
              </div>
            </li>
          </ul>
          <div class="topFooWrap">
            <ul class="topFooList">
              <li v-for="item,index in topList.list" v-if="index>2">
                <div class="num">
                  <span>
                   {{index+1}}
                  </span>
                </div>
                <div class="content">
                  <div>
                    <div>{{item.title}}</div>
                    <p>{{item.content}}</p>
                  </div>
                  <span>{{item.date}}</span>
                </div>
                <div class="imgRight">
                  <img :src="item.img" alt="">
                </div>
              </li>
            </ul>
            <div class="moreBtn" @click="$router.push('/news')">
              更多
            </div>
          </div>
        </div>
      </div>
      <div class="introduce">
        <img src="../assets/images/home/home_foot.png">
      </div>
      <div class="partner">
        <div class="partnerTitle">
          合作伙伴
          <p>partner</p>
        </div>
        <ul class="partnerImg">
          <li v-for="item in footList">
            <div>
              <img :src="item.img">
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
    data() {
      return {
        loading:false,
        userInfo:{},
        headTop:{
          position: 'fixed',
          top: 0,
          left: 0,
          'z-index':999
        },
        dataList:[
          {
            name:'上证指数',
            price:3558.13,
            num:'0.28%',
            isRise:1
          }, {
            name:'深证指数',
            price:3558.13,
            num:'0.28%',
            isRise:2
          },{
            name:'恒生指数',
            price:3558.13,
            num:'0.28%'
          },{
            name:'道琼斯指数',
            price:3558.13,
            num:'0.28%',
            isRise:1
          },{
            name:'纳斯达克',
            price:3558.13,
            num:'0.28%',
            isRise:1
          }
        ],
        topList:{
          list:[
            {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }, {
              img:require('../assets/images/home/news_banner.png'),
              label:'精选',
              title:'2018展望未来你测试一下标题长度爱神的箭爱神的箭阿是的话就开始猜猜咯，陷入账单支付宝做错了什么',
              content:'卡说的就是克拉的骄傲上课了多喝水兼爱非攻hi128423季后赛的尽快发货大数据库复合大师复',
              date:'2018-08-17'
            }
          ],
          page:{
            p:1,
            total_pages:1
          }
        },
        footList:[
          {
            img:require('../assets/images/foot/foot1.png')
          }, {
            img:require('../assets/images/foot/foot2.png')
          }, {
            img:require('../assets/images/foot/foot3.png')
          }, {
            img:require('../assets/images/foot/foot4.png')
          }, {
            img:require('../assets/images/foot/foot5.png')
          }, {
            img:require('../assets/images/foot/foot6.png')
          }, {
            img:require('../assets/images/foot/foot7.png')
          }, {
            img:require('../assets/images/foot/foot8.png')
          }, {
            img:require('../assets/images/foot/foot9.png')
          },
        ]
      }
    },
    methods: {
      brandClick(item){
        this.$router.push({name:'Brand',query:{id:item.id}})
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
      setTimeout(()=>{
        self.userInfo = self.$store.state.userInfo
      },300)
    },
    mounted(){
      let self = this
      if(this.$route.params&&this.$route.params.isOne==1){
        location.reload()
      }
//      self.$http.get(`${process.env.API.API}/ad/index`).then(res=>{
//        if(res.data.errcode=='0'){
//          self.bannerInfo.list = res.data.data
//          self.bannerInfo.page = res.data.page
//        }
//      }).catch(err=>{
//        console.log(err)
//      })
//
//      self.$http.get(`${process.env.API.API}/dict/brand`,{params:{rows:20,p:1}}).then(res=>{
//        if(res.data.errcode=='0'){
//          self.lists.list = res.data.data
//          self.lists.page = res.data.page
//        }
//      }).catch(err=>{
//        console.log(err)
//      })
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  .data{
    color: #333;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom: 1px solid #ccc;
    .dataWrap{
      display: flex;
      align-items: center;
      width: 1140px;
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
          span{
            margin-left: 10px;
          }
        }
      }
    }
  }
  .publicMain{
    padding: 50px 0;
    .selected{
      width: 1140px;
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
              padding: 20px;
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
                  span{
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
            li{
              display: flex;
              padding: 30px 120px 23px;
              transition: all 0.5s;
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
      width: 1140px;
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
          margin-bottom: 30px;
          div{
           margin-right: 30px;
            height: 100%;
            box-sizing: border-box;
            &:hover{
             img{
               filter: grayscale(0%);
               opacity: 1;
             }
            }
            img{
              width: 100%;
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
  }
  .banner{
    position: relative;
    .bannerText{
      top:  calc(~'50% - 200px');
      left: calc(~'50% - 400px');
      width: 800px;
      height: 400px;
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
          margin: 30px 0 110px;
          span{
            font-weight: bold;
          }
        }
      }
      .assessmentBtn{
        width: 158px;
        height: 50px;
        background: #9d8148;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        font-size: 20px;
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
