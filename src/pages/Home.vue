<template>
	<div class="home">
		<!-- 搜索 -->
		<Search></Search>

		<!-- banner -->
		<div class="banner">
			<img v-lazy="'static/images/banner.jpg'" alt="">
		</div>

		<!-- 产品列表项：每个分类，看成是一个组件 -->
		<!-- 通过自定义属性，父组件向子组件中传递数据 

			cid 表示产品分类id
		-->
		<!-- <ProductList v-bind:class_title="'今日疯抢'" :class_img="'hot.png'" 
		v-bind:cid="1"></ProductList>-->

		<!-- 获取分类列表，信息,直接在调用组件的时候，把产品的数据传递过去，而不是让组
件自己获取（哪样会很多ajax请求，影响速度），通过get_product(v.id) 方法，获取对应的产品列表
		-->
		<ProductList 
			v-for="v in cate_list" 
			:key="v.id" 
			:class_title="v.class_name" 
			:class_img="v.class_img" 
			:cid="v.id" :product="get_product(v.id)"></ProductList>

		<!-- 底部菜单 -->
		<div class="clearFix mgt102"></div>
		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
	//导入底部组件
	import FooterMenu from "@/components/FooterMenu.vue"
	// 产品列表组件
	import ProductList from "@/components/ProductList"
	// import axios from 'axios' //ajax插件
	import Search from "@/components/Search"

    // import Swiper from 'swiper';//导入js模块
	// import 'swiper/dist/css/swiper.min.css';
	export default{
		name:"home",
		//定义一个组件，来自导入的组件
		components:{
			FooterMenu:FooterMenu,
			ProductList:ProductList,
			Search:Search
		},
		created:function () {
			var _this = this;//当前组件
            
            //获取分类信息
			this.$http.get("./static/data/class_info.json")
			.then(function(result){
				if(result.data.length>0){
					_this.cate_list=result.data;
				}
			})
			.catch(function(error){
				console.log(error)
			});

			//获取产品信息
			this.$http.get('static/data/product.json')
				.then(function(ret){
					// console.log("product list:",ret.data);
					if(ret.data.length>0){
						_this.product_list = ret.data;
					}
				})
				.catch(function(error){
					console.log('error',error)
				});
		},
		data:function(){
			return {
				cate_list:[],  //分类信息
				product_list:[] //所有产品
			}
		},
		methods:{
			//从所有的产品中，找到当前分类（cid）对应的产品列表
			get_product:function(cid){
				//产品分类id
				var curr_pro = []; //找到的产品

				var pro = this.product_list;
				for(var i=0;i<pro.length;i++){
					if(pro[i].class_id==cid){
						curr_pro = pro[i].data;
					}
				}
				return curr_pro;
			}
		}
	}
</script>

<style lang="scss">
	div.mgt102{
		margin-top:1.15rem;
	}
</style>