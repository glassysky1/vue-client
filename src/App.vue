<template>
  <div class="app-container" style="background:#fff">
    <mt-header fixed title="小月-vue项目"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" href="#tabbar" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-chat" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-contact" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" href="#tabbar-with-map" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" ref="stylesheet/stylus">
.app-container
  padding-top 40px
  padding-bottom 50px
  overflow-x hidden
  .v-enter-active, .v-leave-active
    transition all 0.5s ease
  .v-enter
    opacity 0
    transform translateX(100%)
  .v-leave-to
    opacity 0
    transform translateX(-100%)
    position absolute
</style> 
