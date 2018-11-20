<template>
	<header class="header">
		<i class="icon iconfont icon-fanhui" @click="$router.go(-1);"></i>
		<h1><slot>购物车</slot></h1>
		<span class="right_btn" v-if="show_right_btn">
			<slot name="right_bar"></slot>
		</span>
	</header><!-- /header -->

</template>

<script>
	export default{
		props:{
	  		//是否显示右侧按钮
	  		show_right_btn:{
	  			type:Boolean,
	  			default:false
	  		}
	  	}
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
		position: fixed;
	    width: 100%;
	    z-index: 3;
	    left:0;
	    top:0;

	  
		i{
			width: 0.23rem;
			height:0.27rem;
			float: left;
			padding-left: 0.4rem;
		}

		h1{
			width: 84%;
			margin:0 auto;
			text-align:center;
			font-weight: normal;
			font-size: 0.39rem;
		}

		span{
			&.right_btn{
				height:0.27rem;
				line-height:0.27rem;
				font-size: 0.39rem;
				position: absolute;
				top:0.3rem;
				right:0.4rem;
				a{
					color:#ffffff;
					font-size: 0.32rem;
				}
			}
		}
	}
</style>