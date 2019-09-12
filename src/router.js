import Vue from "vue";
import Router from "vue-router";
import HomeContainer from "./pages/HomeContainer/HomeContainer.vue";
import MemberContainer from "./pages/MemberContainer/MemberContainer.vue";
import SearchContainer from "./pages/SearchContainer/SearchContainer.vue";
import ShopcarContainer from "./pages/ShopcarContainer/ShopcarContainer.vue";
import NewsList from "./components/News/NewsList.vue";
import NewsInfo from "./components/News/NewsInfo.vue";
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
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/search',
      component: SearchContainer
    },
    {
      path: '/shopcar',
      component: ShopcarContainer
    },
    {//不能用children又不是路由
      path:'/home/newslist',
      component:NewsList
    },
    {
      path:'/home/newsinfo/:id',
      component:NewsInfo
    }
  ],
  linkActiveClass: 'mui-active'//
});
