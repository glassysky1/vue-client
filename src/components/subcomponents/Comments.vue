<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(comment,index) in comments" :key="index">
        <div class="cmt-title">
          第{{index+1}}楼&nbsp;&nbsp;用户：{{comment.user_name}}&nbsp;&nbsp;发表时间:{{comment.add_time|date-format}}
        </div>
        <div class="cmt-body">
          {{comment.content===''?'此用户很烂':comment.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain  @click="getMore" >加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pageIndex:1,//默认显示第一页数组
      comments:[]
    }
  },
  props:['id'],
  methods:{
    async getComments(){
      const {data:res} = await this.$axios(`/getcomments/${this.id}?pageindex=${this.pageIndex}`)
      if(res.code ===0){
        this.comments = this.comments.concat(res.data)
      }
    },
     async getMore(){
      this.pageIndex++
      await this.getComments()
    }
  },
  mounted(){
    this.getComments()
  }
}
</script>

<style lang="stylus" scoped>
.cmt-container
  h3
    font-size 18px
  textarea
    font-size 14px
    height 80px
    margin 0
  .cmt-list
    margin 4px 0
    .cmt-item
      font-size 13px
      .cmt-title
        line-height 30px
        background-color #ccc
      .cmt-body
        line-height 35px
        text-indent 2em
</style>