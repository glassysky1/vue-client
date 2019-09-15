<template>
  <div class="app-container" style="background:#fff">
    <mt-header fixed title="小月-vue项目">
      <mt-button v-if="!$route.meta.hideBack" icon="back" slot="left" @click="$router.back()"></mt-button>
    </mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item1" href="#tabbar" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item1" href="#tabbar-with-chat" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item1" href="#tabbar-with-contact" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge"></span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item1" href="#tabbar-with-map" to="/search">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="stylus" scoped>
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
.mui-bar-tab .mui-tab-item1.mui-active
  color #007aff
.mui-bar-tab .mui-tab-item1
  display table-cell
  overflow hidden
  width 1%
  height 50px
  text-align center
  vertical-align middle
  white-space nowrap
  text-overflow ellipsis
  color #929292
.mui-bar-tab .mui-tab-item1 .mui-icon
  top 3px
  width 24px
  height 24px
  padding-top 0
  padding-bottom 0
<style>, .mui-bar .mui-icon
  font-size 24px
  position relative
  z-index 20
  padding-top 10px
  padding-bottom 10px
<style>, .mui-icon
  font-family Muiicons
  font-size 24px
  font-weight 400
  font-style normal
  line-height 1
  display inline-block
  text-decoration none
  /* -webkit-font-smoothing: antialiased; */
.mui-bar-tab .mui-tab-item1 .mui-icon~.mui-tab-label
  font-size 11px
  display block
  overflow hidden
  text-overflow ellipsis
</style> 
