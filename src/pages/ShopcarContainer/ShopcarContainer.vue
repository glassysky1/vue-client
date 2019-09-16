<template>
  <div class="chopcart-container">
    <div class="goods-list">
      <div class="mui-card" v-for="item in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch></mt-switch>
            <img :src="item.thumb_path" alt />
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_rice}}</span>&nbsp;
                <NumberBox></NumberBox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner"></div>
      </div>
    </div>
  </div>
</template>
<script>
import NumberBox from "../../components/Subcomponents/Shopcar_Number";
import { mapGetters,mapState } from 'vuex';
export default {
  data(){
    return{
      goodsList:[]
    }
  },
  components: {
    NumberBox
  },
  computed:{
    ...mapState(['car'])
  },
  methods:{
    //获取商品列表
    async getGoodsList(){
      //获取到store中所有的id，然后拼接处一个 用逗号分隔字符串
      const isArr = []
      
       this.car.forEach(item=>isArr.push(item.id))
       //如果购物车没有数据则返回
       if(isArr.length===0){
         return
       }
      const {data:res} = await this.$axios.get('/goods/getshopcarlist' +isArr.join(','))
      if(res.code===0){
        this.goodsList = res.data     
      }
    }
  },
  mounted(){
    this.getGoodsList()
  }
};
</script>
<style lang="stylus" scoped>
.chopcart-container
  background-color #eee
  overflow hidden
  .goods-list
    .mui-card-content-inner
      display flex
      align-items center
    img{
      width 60px
      height 60px
    }
    h1
      font-size 13px
    .info
      display flex
      flex-direction  column
      justify-content space-between
      .price
        color red
        font-weight bold
</style>