import { ADD_TO_CAR } from "./mutations-type";
export default{
  [ADD_TO_CAR](state, {goodsInfo}){
    // 假设没有找到对应的商品
    let flag = false
    state.car.some(item =>{
      if(item.id === goodsInfo.id){
        item.count += parseInt(goodsInfo.count)
        flag = true
        return true 
      }
    })
    //若果最终循环完毕
    if(!flag){
      state.car.push(goodsInfo)
    }
    //当更新car之后，把car数组，存储到本地 localStorage中
    localStorage.setItem('car',JSON.stringify(state.car))
  }
}