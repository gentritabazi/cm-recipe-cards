import Vue from "vue";
import HomeModule from "./modules/Home";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(HomeModule),
}).$mount("#app");
