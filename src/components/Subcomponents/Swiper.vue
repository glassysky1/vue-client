<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
        <a :href="item.url">
          <img :src="item.img" :class="{'full':isFull}" />
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  props:['lunbotuList','isFull'],
  mounted(){
  }
}
</script>

<style lang="stylus" scoped>
.mint-swipe
  height 200px
  .mint-swipe-item
    text-align center
    img
      height 100%
    .full{
      width 100%
    }
</style>