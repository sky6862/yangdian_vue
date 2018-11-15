import Vue from 'vue';
import Router from 'vue-router';

//导入页面(每个文件，看成一个组件)
import Home from '@/pages/Home';  //首页
import Category from '@/pages/Category'; //分类
import ProDetails from '@/pages/ProDetails'; //产品详细
import ShopCart from '@/pages/ShopCart'; //购物车

import Me from '@/pages/Me';//我的
import Login from '@/pages/Login'; //登录
import Register from '@/pages/Register'; //注册

import DetailSubPage from '@/pages/subPages/details';
import EvaluateSubPage from '@/pages/subPages/evaluate';

Vue.use(Router);//使用路由插件

// 
/*
页面   ->  url

首页，/
分类，/category
详情，/pro_details/1   //1产品id
购物车，/shop_cart
我的， /me
登录，/login
注册 ， /register

*/

export default new Router({
  linkExactActiveClass:'active',//路由选中时样式
  routes: [
    {
      path: '/', //首页，加载的是Home组件
      name: 'home',
      component: Home
    },
    {
    	path:"/category",
    	name:"category",
    	component:Category
    },
    {
    	path:"/pro_details/:id/:cid",
    	name:"pro_details",
    	component:ProDetails,
        //子路由，实现页面的选项卡
        children: [
            {
                // path: '/pro_details/:id/:cid/subDetail',一定要把参数传过来，否则不行
                path: '/pro_details/subDetail/:id/:cid',
                name: 'subdetai',
                component: DetailSubPage,
            }, 
            {
                // path: '/pro_details/:id/:cid/subEvaluate',
                path: '/pro_details/subEvaluate/:id/:cid',
                name: 'subevaluate',
                component: EvaluateSubPage,
            }
        ],
        redirect:'/pro_details/subDetail/:id/:cid'  //默认进入产品页面的 详细页面
    },
    {
    	path:"/shop_cart",
    	name:"shop_cart",
    	component:ShopCart
    },
    {
    	path:"/me",
    	name:"me",
    	component:Me
    },
    {
    	path:"/login",
    	name:"login",
    	component:Login
    },
    {
    	path:"/register",
    	name:"register",
    	component:Register
    }
  ]
})
