
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import BootstrapVue from "bootstrap-vue";
import ButtonPlugin from "bootstrap-vue";
import CardPlugin from "bootstrap-vue";
import CollapsePlugin from "bootstrap-vue";
import DropdownPlugin from "bootstrap-vue";
import ImagePlugin from "bootstrap-vue";
import JumbotronPlugin from "bootstrap-vue";
import LayoutPlugin from "bootstrap-vue";
import LinkPlugin from "bootstrap-vue";
import NavbarPlugin from "bootstrap-vue";

Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(CollapsePlugin);
Vue.use(DropdownPlugin);
Vue.use(ImagePlugin);
Vue.use(JumbotronPlugin);
Vue.use(LayoutPlugin);
Vue.use(LinkPlugin);
Vue.use(NavbarPlugin);

import ScrollTo from "vue-scrollto";
import Animation from "animate.css";

// Vue.use(BootstrapVue);
Vue.use(ScrollTo);
Vue.use(Animation);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
