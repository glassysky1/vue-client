<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
    <div class="ball" v-show="ballFlag" ref="ball"></div>  
    </transition>
    <!-- 商品轮播图区 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :lunbotuList="lunbotu" :isFull="false" />
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{goodsInfo.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:
            <del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价:
            <span class="now_price">￥{{goodsInfo.sell_price}}</span>
          </p>
          <p>
            购买数量:
            <GoodsInfoNumber />
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{goodsInfo.goods_no}}</p>
          <p>库存情况:{{goodsInfo.stock_quantity}}</p>
          <p>上架时间:{{goodsInfo.add_time|date-format}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goToDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goToComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import GoodsInfoNumber from "../Subcomponents/GoodsInfo_Number";
import Swiper from "../Subcomponents/Swiper";
export default {
  components: {
    Swiper,
    GoodsInfoNumber
  },
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsInfo: {},
      ballFlag:false
    };
  },
  methods: {
    async getLunbotu() {
      const { data: res } = await this.$axios.get(`/getthumimages/${this.id}`);
      if (res.code === 0) {
        res.data.forEach(item => {
          item.img = item.msrc;
        });
        this.lunbotu = res.data;
      }
    },
    async getGoodsInfo() {
      const { data: res } = await this.$axios.get(`/getinfo/${this.id}`);
      if (res.code === 0) this.goodsInfo = res.data;
    },
    goToDesc(id) {
      this.$router.push({ name: "goodsDesc", params: { id } });
    },
    goToComment(id) {
      this.$router.push({ name: "goodsComment", params: { id } });
    },
    addToShopCar(){
      this.ballFlag = !this.ballFlag
    },
    beforeEnter(el){
      el.style.transform="translate(0,0)"
    },
    enter(el,done){
      el.offsetWidth
      //小球优化思路
      //位置是不固定的，所以位置不能写死了
      //经过分析，先得到徽标的横纵坐标，栽得到小球的横纵坐标，求差值
      //domObject.getBoundingClientRect()
      //获取小球的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      //获取 徽标位置
      const badgePostion = document.getElementById('badge').getBoundingClientRect()
      const xDist = badgePostion.left - ballPosition.left
      const YDist = badgePostion.top - ballPosition.top
      el.style.transform=`translate(${xDist}px,${YDist}px)`
      el.style.transition = 'all 1s cubic-bezier(.25,.68,.43,1.19)'
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    }
  },
  mounted() {
    this.getLunbotu();
    this.getGoodsInfo();
  }
};
</script>

<style lang="stylus" scoped>
.goodsinfo-container
  background-color #eee
  overflow hidden
  .now_price
    color red
    font-size 16px
    font-weight bold
  .mint-button
    margin-right 5px
.mui-card-footer
  display block
  button
    margin 10px 0
.ball
  width 15px
  height 15px
  border-radius 50%
  z-index 99
  position absolute
  background-color red
  left 142px
  top 390px
</style>