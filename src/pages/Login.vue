<template>
	<div class="login">
        <Header></Header>
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
            <div class="foget">
                <a href="javascript:;">忘记密码</a>
            </div>
            <div>
                <input class="submit" type="submit" value="登录" @click.prevent="do_login">
            </div>
        </form>
    </div>
</template>

<script>
	import Header from '@/components/Header' //底部

	export default{
		name:"login",
		components:{
			Header
		},
		data:function () {
			return{
				phone:null,
				psw:null
			}
		},
        methods:{
            do_login:function(){
                //1.获取数据
                var name = this.phone;
                var pwd = this.psw;

                //2.验证
                if(!name||!pwd){
                    alert('填写完整!');
                    return false;
                }

                //3.发送ajax
                // http://127.0.0.1/18q0802/4-17-vuejs/app_yd/server/message.php
                // this.$http(url,data,config)
                var _self = this;

                var info = {"username":name,"password":pwd,"do":"login"};
                //post 请求的时候，要把参数处理成url
                this.$http.post(this.$api+"message.php",this.$qs.stringify(info))
                .then(function(ret){
                    console.log('ok',ret)

                    alert(ret.data.msg);

                    // _self.$router.push('/me');
                    if(ret.data.status==1){
                        //保存用户状态
                        localStorage.setItem('user_info',JSON.stringify({"username":name,"uid":ret.data.uid}));
                        _self.$router.push('/me');
                    }

                    if(ret.data.status==2){
                        //保存用户状态
                        _self.$router.push('/me');
                    }
                })
                .catch(function(error){
                    console.log('error',error)
                });

            }
        }
	}
</script>

<style lang="scss" scoped>
@import "../style/login-reg.scss";
</style>