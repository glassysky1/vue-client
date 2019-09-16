export default{
  getAllCount(state){
   return  state.car.reduce((pretotal,goods)=>pretotal+goods.count,0)
  }
}