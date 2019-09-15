<template>
  <div style="{background:#fff}">
    <Swiper :lunbotuList ="lunbotuList" :isFull="true" />
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/images/news.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../assets/images/picShare.png" alt="">          
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../assets/images/goodShow.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/feedback.png" alt="">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/search.png" alt="">

          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/callme.png" alt="">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
     
    </ul>
  </div>
</template>

<script>
import Swiper from "../../components/Subcomponents/Swiper";
export default {
  components:{
    Swiper
  },
  data() {
    return {
      lunbotuList: []
    };
  },
  methods: {
    async getLunbo(){
      const {data:res} = await this.$axios.get('/getlunbo')
      if(res.code===0){
      this.lunbotuList = res.data
      }

    }
  },
   mounted() {
     this.getLunbo()
  }
};
</script>

<style lang="stylus" scoped>
.mint-swipe
  height 200px
  img
    width 100%
    height 100%
.mui-grid-view.mui-grid-9
  border none 
  background-color #fff
  .mui-table-view-cell
    border none 
    img 
      width 60px
      height 60px
    .mui-media-body
      font-size 13px
</style>