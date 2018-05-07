import {homeResource,newsResource} from "./resources";

export default {
  getNews:async params=>{
    return await homeResource.get('list',{params})
  }
}
