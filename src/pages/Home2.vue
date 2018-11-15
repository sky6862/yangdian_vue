<template>
	<div class="home">
		<!-- 搜索 -->
		<Search></Search>

		<!-- banner -->
		<div class="banner">
			<img src="static/images/banner.jpg" alt="">
		</div>

		<!-- 产品列表项：每个分类，看成是一个组件 -->
		<!-- 通过自定义属性，父组件向子组件中传递数据 

			cid 表示产品分类id
		-->
		<!-- <ProductList v-bind:class_title="'今日疯抢'" :class_img="'hot.png'" 
		v-bind:cid="1"></ProductList>-->

		<!-- 获取分类列表，信息 -->
		<ProductList 
			v-for="v in cate_list" 
			:key="v.id" 
			:class_title="v.class_name" 
			:class_img="v.class_img" 
			:cid="v.id"></ProductList>

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
	import axios from 'axios' //ajax插件
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

			axios.get("./static/data/class_info.json")
			.then(function(result){
				console.log(result)
				if(result.data.length>0){
					_this.cate_list=result.data;
				}
			})
			.catch(function(error){
				console.log(error)
			});
		},
		data:function(){
			return {
				cate_list:[]  //分类信息
			}
		}
	}
</script>

<style lang="scss">
	div.mgt102{
		margin-top:1.15rem;
	}
</style>