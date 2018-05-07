const Sequelize = require('sequelize');//引入文件


//使用url进行链接
const Todolist = new Sequelize('mysql://root:root@localhost/fiction',{
  define:{
    timestamps:false//取消sequelize自动给数据表加入时间戳
  }
})


module.exports = {
  Todolist//暴露出来方便调用
}
