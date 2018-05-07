const db = require('../config/db.js'),
  userModel = '../schema/user.js';//引用user结构
const TodolistDb = db.Todolist;//引用数据库

const User = TodolistDb.import(userModel);//实例化User

const getUserByid = async id=>{
  //异步查找数据
  const userInfo = await User.findOne({
    where:{
      id:id
    }
  })
  return userInfo; //数据返回
};

const getUserByName = async name=>{
  const userInfo = await User.findOne({
    where:{
      username:name
    }
  })
  return userInfo; //数据返回
}

module.exports = {
  getUserByid,
  getUserByName
}
