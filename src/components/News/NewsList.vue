<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(news,index) in newsList" :key="index">
        <router-link :to="'/home/newsinfo/'+news.id">
          <img class="mui-media-object mui-pull-left" :src="news.img_url" />
          <div class="mui-media-body">
            <h2>{{news.tilte}}</h2>
            <p class="mui-ellipsis"><span>发表时间:{{news.add_time|date-format}}</span><span>点击:{{news.click}}次</span></p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components:{
  },
  data(){
    return{
      newsList:[]
    }
  },
  async mounted(){
    await this.$axios.get('/getnewslist').then(result=>{
      this.newsList = result.data.data
    })
  }
};
</script>

<style lang="stylus" scoped>
.mui-media-body
  h2
    font-size 14px
  .mui-ellipsis
    font-size 12px
    color #26A2FF
    display flex
    justify-content space-between
</style>