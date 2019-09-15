<template>
  <div class="goods-list">
    <div @click="goToDetail(item.id)" class="goods-item" v-for="(item,index) in goodsList" :key="index">
      <img
        :src="item.img_url"
        alt
      />
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
    </div>
   <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pageIndex:1,
      goodsList:[]
    }
  },
  methods:{
    async getGoodsList(){
      //获取商品列表
      const {data:res} = await this.$axios.get(`/getgoods?pageindex=${this.pageIndex}`)
      if(res.code ===0){
        this.goodsList = this.goodsList.concat(res.data)
      }
    },
    async getMore(){
      this.pageIndex++
      this.getGoodsList()
    },
    //路由跳转
    async goToDetail(id){
      this.$router.push('/home/goodsinfo/'+id)
    }
  },
  mounted(){
    this.getGoodsList()
  }
};
</script>

<style lang="stylus" scoped>
.goods-list
  display flex
  flex-wrap wrap
  padding 7px
  justify-content space-between
  .goods-item
    margin 3px 0
    width 49%
    border 1px solid #cccccc
    box-shadow 0 0 8px #cccccc
    padding 2px
    display flex
    justify-content space-between
    flex-direction column
    min-height 293px
    img
      width 100%
    .title
      font-size 14px
    .info
      background-color #eee
      p
        margin 0
        padding 5px
      .price
        .now
          color red
          font-weight bold
          font-size 16px
        .old
          text-decoration line-through
          font-size 12px
          margin-left 10px
      .sell
        display flex
        font-size 12px
        justify-content space-between
</style>