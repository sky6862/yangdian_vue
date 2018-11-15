<template>
	<div class="register">
		<Header>注册</Header>
		<!-- <router-link to="/register">注册</router-link> -->
       
	    <form class="content">
	      <div class="item">
	        <label for="phone">手机号</label>
	        <input v-model="phone" type="text" name="phone" />
	      </div>
	      <div class="item">
	        <label for="psw">密码</label>
	        <input v-model="psw" type="password" name="psw" />
	      </div>
	      <div class="item">
	        <label for="code">验证码</label>
	        <input v-model="code" type="text" name="code" />
	        <a class="get-code" href="javascript:;">点击获取</a>
	      </div>
	      <div class="next">
	        <input class="submit" type="submit" @click.prevent="do_register" value="下一步">
	      </div>

	      <div class="reade">
	        <label>
	          <input type="checkbox" v-model="check">
	          <span>我已阅读并同意使用</span>
	          <a href="javascript:">条款和隐私政策</a>
	        </label>
	      </div>

	    </form>
	</div>
</template>

<script>
	import Header from '@/components/Header' //底部
	import Qs from 'qs' //qs,处理表单数据，axios中自带了，直接引入

	export default{
		name:"home",
		components:{
			Header
		},
		data() {
		    return {
		      phone: "",
		      psw: "",
		      code: "",
		      check: "",
		      url: "/api/register"
		    };
	  	},
	  	methods:{
	  		do_register:function(){
	  			//1.获取数据
	  			var name = this.phone;
	  			var pwd = this.psw;
	  			var check = this.check;

	  			//2.验证
	  			if(!name||!pwd){
	  				alert('填写完整!');
	  				return false;
	  			}

	  			if(!check){
	  				alert('请勾选协义!');
	  				return false;
	  			}

	  			//3.发送ajax
	  			// http://127.0.0.1/18q0802/4-17-vuejs/app_yd/server/message.php
	  			// this.axios(url)

	  			//解决post 接受不到数据的问题，提交前处理一下
	  			var data = Qs.stringify({"username":name,"password":pwd,"do":"reg"});
                var _this = this;
                
                //_this.$api 是请求后端的地址，在main.js中全局定义好了的
	  			this.$http.post(_this.$api+'/message.php',data)
	  			.then(function (result) {
	  				console.log('ok',result);
	  				
	  				//4.处理返回的结果
	  				if(result.status==1){
	  					//跳转到用户中心
	  					_this.$router.push("/me");
	  				}
	  			})
	  			.catch(function (error) {
	  				/* body... */
	  				console.log('error',result)
	  			});
	  			
	  		}
	  	}
	}
</script>

<style lang="scss" scoped> 
    @import "../style/login-reg.scss";
</style>