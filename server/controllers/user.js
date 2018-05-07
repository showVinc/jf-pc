const user = require('../models/user.js');
const jwt = require('koa-jwt');
const jwtToken = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const getUserInfo = async (ctx)=>{
  const id = ctx.query.id;
  const result = await user.getUserByid(id);
  ctx.body = result;
}

const postUserAuth = async (ctx)=>{
  const data = ctx.request.body
  const userInfo = await user.getUserByName(data.name);
  if(userInfo != null){
    let pas = hash.substr(0, 29);// 10 is by default
    let psw = bcrypt.hashSync(data.password, pas);

    // console.log(bcrypt.compareSync(psw, userInfo.password));
    console.log(psw, userInfo.password);
    if(!bcrypt.compareSync(data.password, userInfo.password)){
      ctx.body = {
        status:false,
        msg:'密码错误'
      }
    }else{
      const userToken = {
        name:userInfo.username,
        id:userInfo.id
      }
      const secret = 'vue-koa-demo';//制定密钥
      const token = jwtToken.sign(userToken,secret);
      ctx.body = {
        status:true,
        token:token//返回token
      }
    }
  }else{
    ctx.body = {
      status:false,
      msg:'用户不存在'
    }
  }
}

module.exports = {
  getUserInfo,
  postUserAuth
}
