<template>
  <div class="photoinfo-container">
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{ photoInfo.add_time|date-format }}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </p>
    <!-- 缩略图 -->
    <div class="thumbs">
    <vue-preview :slides="list" @close="handleClose"></vue-preview>
    </div>
    <div class="content" v-html="photoInfo.content">
    </div>
    <Comments :id="id"></Comments>
  </div>
</template>

<script>
import Comments from "../Subcomponents/Comments";
export default {
  components:{
    Comments
  },
  data(){
    return{
      id:this.$route.params.id,
      photoInfo:{},//图片详情
      list:[]//缩率学徒
    }
  },
  methods:{
    async getPhotoInfo(){
      //获取图片的详情
      const {data:res} = await this.$axios.get(`/getimageinfo/${this.id}`)
      if(res.code===0){
        this.photoInfo = res.data
      }
    },
    //获取缩略图
    async getThumbs(){
      const{data:res} = await this.$axios.get(`/getthumimages/${this.id}`)
      if(res.code === 0){
        res.data.forEach(item =>{
          item.w=600
          item.h=400
          item.src = item.src
        })
        this.list=res.data
      }
    },
    handleClose () {
        console.log('close event')
      }
  },
  mounted(){
    this.getPhotoInfo()
    this.getThumbs()
  }
}
</script>

<style lang="stylus">
.photoinfo-container
  padding 3px
  h3{
    color #26a2ff
    font-size 15px
    text-align center
    margin 15px 0
  }
  .subtitle{
    display flex
    justify-content space-between
    font-size 13px
  }
  .content{
    font-size 13px
    line-height 30px
    text-indent 2em
  }
  .thumbs
    .my-gallery
      figure
        margin 10px
        display inline-block
        box-shadow 0 0 8px #999
        height 100px
        width 100px
        overflow hidden
</style>