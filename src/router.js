import Vue from "vue";
import Router from "vue-router";
import HomeContainer from "./pages/HomeContainer/HomeContainer.vue";
import MemberContainer from "./pages/MemberContainer/MemberContainer.vue";
import SearchContainer from "./pages/SearchContainer/SearchContainer.vue";
import ShopcarContainer from "./pages/ShopcarContainer/ShopcarContainer.vue";
import NewsList from "./components/News/NewsList.vue";
import NewsInfo from "./components/News/NewsInfo.vue";
import PhotoList from "./components/Photos/PhotoList.vue";
import PhotoInfo from "./components/Photos/PhotoInfo.vue";
import GoodsList from "./components/Goods/GoodsList.vue";
import GoodsInfo from "./components/Goods/GoodsInfo.vue";
import GoodsDesc from "./components/Goods/GoodsDesc.vue";
import GoodsComment from "./components/Goods/GoodsComment.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer,
      meta:{
        hideBack:true
      }
    },
    {
      path: '/member',
      component: MemberContainer,
      meta: {
        hideBack: true

      }
    },
    {
      path: '/search',
      component: SearchContainer,
      meta: {
        hideBack: true

      }
    },
    {
      path: '/shopcar',
      component: ShopcarContainer,
      meta: {
        hideBack: true
      }
    },
    {//不能用children又不是路由
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
    {
      path: '/home/goodsinfo/:id',
      component: GoodsInfo
    },
     {
       path:'/home/goodsdesc/:id',
       component:GoodsDesc,
       name:'goodsDesc'
    },
     {
       path:'/home/goodscomment/:id',
       component:GoodsComment,
       name:'goodsComment'
    },
  ],
  linkActiveClass: 'mui-active'//
});
