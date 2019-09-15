<template>
  <div class="goodsdesc-container">
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content" v-html="info.content"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      info:{}//图文数据
    }
  },
  methods:{
    async getGoodsDesc(){
      const {data:res} = await this.$axios.get(`/goods/getdesc/${this.$route.params.id}`)
      if(res.code===0){
        this.info = res.data
      }
    }
  },
  mounted(){
    this.getGoodsDesc()
  }
}
</script>

<style lang="stylus">
.goodsdesc-container
  padding 4px
  h3
    font-size 16px
    color #226aFF
    text-align center
    margin 15px 0
</style>