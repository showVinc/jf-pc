import axios from 'axios'

// const getRepoData = (url,params) => {
//   return new Promise((resolve, reject) => {
//     axios.get(url,{params:params}).then(res=>{
//       if(res.data.errcode=='0'){
//         resolve(res.data)
//       }else{
//         reject(err)
//       }
//     }).catch(err=>{
//       reject(err)
//     })
//   });
// };


export default {
  async getData(url,params,cb) {
    try {
      const value = await axios.get(url,{params:params})
      if(value.data.errcode=='0'){
        cb(value.data)
      }
      return value;
    } catch (err) {
      console.log(err);
    }
  },
  GetQueryString(name, data) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    data = data || ''
    let r = window.location.hash.replace(`#/${data}?`, '').match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}
