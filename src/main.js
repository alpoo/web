// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import style from "./public.css";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import wow from "wowjs";
import animated from "animate.css";
import "wowjs/css/libs/animate.css";
import VueAMap from "vue-amap";
import "font-awesome/css/font-awesome.min.css";
// import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

// import { Swiper, Navigation } from 'swiper/esm';

// initSwiper(){
//   //swiper提供了use方法，其他写法没有啥区别和swiper4、5一样
//   Swiper.use([Navigation])
//   this.monthSwiper = new Swiper('.monthSwiper', {
//      navigation: {
//        nextEl: '.swiper-button-next',
//        prevEl: '.swiper-button-prev'
//      }
//   })
// }
// Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(style);
// Vue.use(vueScrollTo)
Vue.use(animated);
Vue.prototype.$wow = wow;
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "139a89d55e5557f8cbeed171b8a47251",//此处的key,在高德开放平台申请
  plugin: ["AMap.MapType","AMap.PlaceSearch", "AMap.Geolocation", "AMap.Geocoder"],//此处的插件按需添加
  v: "1.4.15",
  uiVersion: "1.0"
  })
router.afterEach(() => {
  window.scrollTo(0, 0);
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
