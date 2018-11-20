// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //vue.js 模块
import App from './App' //App.vue 组件，是入口组件
import router from './router' //路由配置目录下的所有文件

// 1.也可以在入口的js中引入局样式（在webpack中，一切都是模块）
import './style/base.css';

// 2.引入 rem.js，好使用rem作单位，实现字体的适配
import './untils/rem.js';

//add 1: 把axios 全局引入，并挂到Vue对象上,以后好直接使用（this.axios.get(),...）
import axios from 'axios';
// Vue.prototype.axios = axios;
Vue.prototype.$http= axios;

// add 2: axios post请球url处理
import Qs from 'qs'; //qs,处理表单数据，axios中自带了，直接引入
Vue.prototype.$qs = Qs;

//add 3:定义一个全局变量，用来保存 api接口地址
// Vue.prototype.$api = "/api/"; //默认开发时的
Vue.prototype.$api = "./server/";  //打包时（生产环境）

Vue.config.productionTip = false

//图片,组件懒加载
import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)

//使用组件,并配置一下
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/images/error.jpg',
  loading: 'static/images/loading.jpg',
  attempt: 1
})

// vue中使用vue-router切换页面时滚动条自动滚动到顶部的方法
router.afterEach((to,from,next) => {
	// 产品评价页面，向下滚动一下，其它页面，回到顶部
	if(to.name=='subevaluate'){
		window.scrollTo(0,360);
	}else{
		window.scrollTo(0,0);
	}
});

/* eslint-disable no-new */
new Vue({
  el: '#app', //../index.html 中的 <div id="app">...</div>
  router,
  components: { App },
  // template: '<App/>'
  template: `<App/>`
})
