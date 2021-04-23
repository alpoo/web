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
import news_content from 'components/common/news_content'

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
          name:"首页",
          component:indexHome,
        },
        {
          path: "/pageHome",
          name: "pageHome",
          component:pageHome,
          children:[
            {
              path: "product",
              name: "产品展示",
              component: product,
            }, {
              path: "newscontent",
              name: "新闻资讯",
              component: news_content,
            },
            {
              path: "partner",
              name: "合作伙伴",
              component: partner,
            },
            {
              path: "news",
              name: "最新资讯",
              component: news,
            }, 
            {
              path: "about",
              name: "关于我们",
              component:about,
            },
            {
              path: "connect",
              name: "联系我们",
              component:connect,
            },
          ]
        },
       
        
  ],
  mode:"hash"
})
