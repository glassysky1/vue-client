<template>
  <div>
    <div class="tab-wrapper" ref="tabWrapper">
      <ul class="tab-list" ref="tabUl">
        <li
          class="tab-item"
          v-for="(cate,index) in cates"
          :key="index"
          @click="getPhotoListBycateId(cate.id,index)"
        >{{cate.title}}</li>
      </ul>
    </div>
    <ul class="photo_list">
      <router-link tag="li" :to="'/home/photoinfo/'+item.id" v-for="item in list" :key="item.id">
        <img v-lazy="item.img_url" />
        <div class="info">
          <div class="info-title">{{item.title}}</div>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      cates: [], //分类列表
      list: [] //图片列表
    };
  },
  methods: {
    async _initUlwidth() {
      const list = this.$refs.tabUl.children;

      const arr = Array.from(list);
      this.$refs.tabUl.style.width = arr.length * 75 + "px";
      await this.$nextTick(() => {
        new BScroll(this.$refs.tabWrapper, {
          scrollX: true,
          click: true
        });
      });
    },
    async getAllCategory() {
      const { data: res } = await this.$axios.get("/getimgcategory");
      if (res.code === 0) {
        this.cates = res.data;
        this.$nextTick(() => {
          this._initUlwidth();
          this.getPhotoListBycateId(0, 0);
        });
      } else {
        Toast("获取失败");
      }
    },
    async getPhotoListBycateId(cateId, index) {
      const tabList = this.$refs.tabUl.children;
      for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove("on");
      }
      tabList[index].classList.add("on");
      const { data: res } = await this.$axios.get(`/getimages/${cateId}`);
      if (res.code === 0) {
        this.list = res.data;
      }
    }
  },
  created() {},
  mounted() {
    this.getAllCategory();
  }
};
</script>

<style lang="stylus">
body, html, ul, li
  padding 0
  margin 0
  background-color #fff
ul, li
  list-style none
.tab-wrapper
  width 100%
  .tab-list
    height 40px
    .tab-item
      line-height 40px
      text-align center
      display inline-block
      width 75px
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      font-size 14px
      &.on
        color #007aff
.photo_list
  padding 10px
  padding-bottom 0
  li
    margin-bottom 10px
    background #ccc
    text-align center
    box-shadow 0 0 9px #999
    position relative
    img{
      width 100%
      vertical-align middle
    }
    img[lazy="loading"]{
      width 40px
      height 300px
      margin auto
    }
    .info
      position absolute
      bottom 0
      background-color rgba(0,0,0,0.4)
      color white
      text-align left
      max-height 84px
      .info-title
        font-size 14px
      .info-body
        font-size 13px
</style>