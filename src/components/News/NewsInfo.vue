<template>
  <div class="newinfo-container" style="background:#fff">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.add_time|date-format}}</span>
      <span>点击:{{newsinfo.click}}次</span>
    </p>
    <hr />
    <div class="content" v-html="newsinfo.content"></div>
    <Comments/>
  </div>
</template>

<script>
import Comments from "../subcomponents/Comments";
import { Toast } from "mint-ui";
export default {
  components:{
    Comments
  },
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  async mounted() {
    await this.$axios.get("/getnewsinfo").then(result => {
      if (result.data.code === 0) {
       result.data.data.forEach(newsinfo=>{
         if(this.id===newsinfo.id.toString()){
           this.newsinfo = newsinfo
         }
       })
      } else {
        Toast("获取失败");
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
.newinfo-container
  padding 0 4px
  .title
    font-size 16px
    text-align center
    margin 15px 0
    color red
  .subtitle
    font-size 13px
    color #226aff
    display flex
    justify-content space-between
  .content
    font-size 13px
    color #3A3A3A
</style>