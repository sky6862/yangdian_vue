<template>
	<!-- 搜索 -->
	<div class="search" v-bind:style="{background:bgcolor}">
		<form action="?" method="get" accept-charset="utf-8">
			<input type="text" placeholder="输入搜索内容">
			<input type="image" src="static/images/search.png" name="">
		</form>
	</div>
</template>

<script>
	export default{
		props:{
			bgcolor:{
				type:String,
				default:"transparent"//默认是透明的
			}
		}
	}
</script>

<style lang="scss">
	.search{
		width: 100%;
		// height: 0.62rem;
		// margin: 0.8rem auto 0 -34.4%;
		height: 0.62rem;
		position: absolute;;
		left: 0;
		top:0;
		padding-top:0.15rem;
		padding-bottom: 0.18rem;

		form{
			width: 68.8%;
			height: 0.62rem;
			margin: 0 auto;
			border-radius:5px;
			background:#fed8e2;

			input[type="text"]{
				width:84.5%;
				height: 0.62rem;
				display: block;
				float: left;
				// 背景透明
				background: transparent;
				font-size:0.2rem;
				color:#999999;
				padding-left: 5px;
				box-sizing:border-box;
			}

			input[type="image"]{
				padding-top:0.15rem;
				padding-right: 0.1rem;

				width: 0.39rem;
				height: 0.39rem;
				float: right;
			}
		}
	}
</style>