<template>
  <div style="{background:#fff}">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt />
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../assets/images/news.png" alt="">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/picShare.png" alt="">          
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../assets/images/goodShow.png" alt="">
          <div class="mui-media-body">商品购买</div>
        </a>
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
export default {
  data() {
    return {
      lunbotuList: []
    };
  },
  methods: {},
  async mounted() {
    await this.$axios.get("/getlunbo").then(result => {
      if (result.data.code === 0) {
        this.lunbotuList = result.data.data;
      }
    });
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