import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import { Button,Header } from "mint-ui";
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
//注册全局组件在main.js
Vue.component(Button.name, Button)
Vue.component(Header.name, Header)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
