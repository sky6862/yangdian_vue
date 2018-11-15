<template>
	<header class="header">
		<i class="icon iconfont icon-fanhui" @click="$router.go(-1);"></i>
		<h1><slot>购物车</slot></h1>
	</header><!-- /header -->

</template>

<script>
	export default{
		
	}
</script>

<style lang="scss">
	// 字体图标库
	@import "../style/iconfont/iconfont.css";
	
	.header{
		height: 0.89rem;
		background-color: #ff9900;
		line-height: 0.89rem;
		color:#ffffff;

		i{
			width: 0.23rem;
			height:0.27rem;
			float: left;
			padding-left: 0.4rem;
		}

		h1{
			width: 60%;
			margin:0 auto;
			// background-color: red;
			text-align:center;
			font-weight: normal;
			font-size: 0.39rem;
		}
	}
</style>