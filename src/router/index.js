import Vue from 'vue'
import Router from 'vue-router'
import search from './../components/search'
import storePage from './../components/storePage/storePageParent.vue'
import home from './../components/landingPage/storeDisplayParent.vue'
import productDetails from './../components/productDetailsParent.vue'
import onlineProductroute from './../components/onlineProductsDetails'
import cartParent from './../components/cartParent'
import login from './../components/login'

Vue.use(Router)

export default new Router({
    routes:[
        {path:'/',component:home},
        {path:'/search',component:search},
        {path:'/:storeName',name:'storePage',component:storePage},
        {path:'/:storeName/:id',name:'productDetails',component:productDetails},
        {path:'/:storeName/:id/online_products',name:'onlineProductDetails',component:onlineProductroute},
        {path:'/user/profile/cart',name:'cartParent',component:cartParent}
       
    ],
    mode:'history'
})
