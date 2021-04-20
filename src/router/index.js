import Vue from "vue";
import Router from "vue-router";
import pageHome from "components/pages/pageHome";
import indexHome from "components/index/indexHome";
import enterPage from "components/index/enterPage";
import product from "components/pages/singlePage/product";
import partner from "components/pages/singlePage/partner";
import about from "components/pages/singlePage/about";
import news from "components/pages/singlePage/news";
import connect from "components/pages/singlePage/connect";

Vue.use(Router)

export default new Router({
  routes: [
        {
          path: "/",
          name: "enterPage",
          component:enterPage,
        }, 
        {
          path:"/indexHome",
          name:"indexHome",
          component:indexHome,
        },
        {
          path: "/pageHome",
          name: "pageHome",
          component:pageHome,
          children:[
            {
              path: "product",
              name: "product",
              component: product,
            },
            {
              path: "partner",
              name: "partner",
              component: partner,
            },
            {
              path: "news",
              name: "news",
              component: news,
            }, 
            {
              path: "about",
              name: "about",
              component:about,
            },
            {
              path: "connect",
              name: "connect",
              component:connect,
            },
          ]
        },
       
        
  ],
  mode:"hash"
})
