import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./mock/mockServer";
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/fonts/mui-icons-extra.ttf'
import Axios from "axios"
import './filters'//加载过滤器
Vue.prototype.$axios = Axios
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

import MintUI from "mint-ui";
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
