<template>
	<div class="user-page">
		<!-- <Header>我的</Header> -->

        <div class="header-bar">
            <span class="icon icon-set"></span>
            <h2>个人中心</h2>
            <div class="icon icon-msg">
                <span class="tips"  v-show="isLogin">9+</span>
            </div>
        </div>

        <div class="user-bar">
            <div class="head is-login">
                <img  v-show="isLogin" src="../../static/images/user-head.jpg" alt="head">
            </div>
            <!-- <div class="btn login username"></div> -->
            <router-link tag="div" to="/login" class="btn login username">{{loginUser}}</router-link>
            <div class="store">
                <i class="icon icon-star"></i>
                <span>我的收藏（{{collect_num}}）</span>
            </div>
        </div>

        <div class="order-bar">
            <div class="order">
                <span>我的订单</span>
                <a href="javascript:;">查看全部订单</a>
            </div>

            <div class="order-type">
                <a class="type" href="javascript:;">
                    <span class="icon-groups">
                        <i class="tips"  v-show="isLogin">0</i>
                    </span>
                    <h5>待付款</h5>
                </a>
                <a class="type" href="javascript:;">
                    <span class="icon-groups">
                        <i class="tips"  v-show="isLogin">2</i>
                    </span>
                    <h5>待发货</h5>
                </a>
                <a class="type" href="javascript:;">
                    <span class="icon-groups">
                        <i class="tips"  v-show="isLogin">1</i>
                    </span>
                    <h5>待收货</h5>
                </a>
                <a class="type" href="javascript:;">
                    <span class="icon-groups">
                        <i class="tips" v-show="isLogin">3</i>
                    </span>
                    <h5>待评价</h5>
                </a>
                <a class="type" href="javascript:;">
                    <span class="icon-groups">
                        <i class="tips"  v-show="isLogin">5</i>
                    </span>
                    <h5>退款/售后</h5>
                </a>
            </div>
        </div>

        <a href="javascript:;" class="addr">收货地址管理</a>

		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
    import Header from '@/components/Header' //头部
	import FooterMenu from '@/components/FooterMenu' //底部
	
	export default{
		name:"me",
		components:{
			FooterMenu,
			// FooterMenu:FooterMenu
			Header
		},
		data:function () {
			/* body... */
			return {
				// isLogin:false, //登录状态
				loginUser:null,
                collect_num:0    //收藏数量
			}
		},
        computed:{
            isLogin:function(){
                //从localStorage中取用户信息，有，就登录了，没有，就没有登录
                var user = localStorage.getItem("user_info")?JSON.parse(localStorage.getItem("user_info")):null;
                if(user!=null){
                    // console.log(user);
                    this.loginUser = user.username;
                    this.collect_num = 10;
                    return true;//用户登录成功
                }else{
                     this.loginUser = '点击登录';
                }
                return false;//用户没有登录

            }
        }
	}
</script>

<style lang="scss">
@import "../style/common.scss";

.user-page {
    background-color: #efeeee;
    padding-bottom: 2rem;
}

.tips {
    position: absolute;
    width: .35rem;
    height: .35rem;
    border-radius: 50%;
    background-color: #f00;
    font-size: .18rem;
    /*px*/
    color: $cfff;
    text-align: center;
    line-height: .35rem;
    display: block;
    z-index: 2;
    right: -0.22rem;
    top: -0.12rem;
}

.header-bar {
    height: .98rem;
    background-color: $mainc;
    font-size: .42rem;
    /*px*/
    display: flex;
    justify-content: space-between;
    padding: 0 .3rem;
    align-items: center;
    color: $cfff;
    .icon {
        width: .5rem;
        height: .5rem;
        display: block;
        background-repeat: no-repeat;
        background-size: .5rem .5rem;
        &.icon-set {
            background-image: url('../../static/images/icon-set.png');
        }
        &.icon-msg {
            position: relative;
            background-image: url('../../static/images/icon-msg.png');
        }
    }
    h2{
        font-size:21px;
        font-weight: normal;
    }
}

.user-bar {
    height: 4.90rem;
    position: relative;
    overflow: hidden;
    background-color: $cfff;
    margin-bottom: .14rem;

    .head {
        width: 1.82rem;
        height: 1.82rem;

        border-radius: 50%;
        border: 13px solid $cfff;
        background-color: #e6dfdf;
        overflow: hidden;
        margin: .92rem auto .2rem;
        position: relative;
        img {
            // display: none;
            width: 2rem;
            height: 2rem;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-top: -1rem;
            margin-left: -1rem;
        }
    }
    &::before {
        content: '';
        display: block;
        height: 2.31rem;
        width: 100%;
        position: absolute;
        background-color: $mainc;
        z-index: 0;
    }
    .login {
        font-size: .32rem;
        color: $c333;
        text-align: center;
    }
    .store {
        height: 1.25rem;
        line-height: 1.25rem;
        padding: 0 .3rem;
        font-size: .34rem;
        color: $c333;
    }
    .icon {
        margin-right: .2rem;
        width: .4rem;
        height: .4rem;
        display: inline-block;
        background-repeat: no-repeat;
        background-size: .4rem .4rem;
        position: relative;
        vertical-align: middle;
        &.icon-star {
            background-image: url('../../static/images/icon-star.png');
        }
    }
}

.order-bar {
    background-color: $cfff;
    overflow: hidden;
    margin-bottom: 0.14rem;
    .order {
        height: 1.22rem;
        padding: 0 .30rem;
        font-size: .34rem;
        /*px*/
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $c999;
        span {
            color: $c333;
        }
        a {
            color: $c999;
        }
    }
    .order-type {
        height: 1.88rem;
        padding: 0 .3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
    }
    .icon-groups {
        width: .6rem;
        height: .5rem;
        background-size: 3rem .5rem;
        display: block;
        margin: 0 auto;
        background-image: url('../../static/images/icon-groups.png');
        background-repeat: no-repeat;
        margin-bottom: .25rem;
        position: relative;
    }
    .type {
        width: 25%;
        display: block;
        text-align: center;
        font-size: .24rem;
        color: $c666;

        &:nth-of-type(3) .icon-groups {
            background-position-x: -0px;
        }
        &:nth-of-type(1) .icon-groups {
            background-position-x: -0.6rem;
        }
        &:nth-of-type(4) .icon-groups {
            background-position-x: -1.2rem;
        }
        &:nth-of-type(5) .icon-groups {
            background-position-x: -1.8rem;
        }
        &:nth-of-type(2) .icon-groups {
            background-position-x: -2.4rem;
        }
    }
}

.addr {
    display: block;
    font-size: .34rem;
    /*px*/
    padding: 0 .3rem;
    color: $c999;
    height: 1.28rem;
    overflow: hidden;
    line-height: 1.28rem;
    background-color: $cfff;
}
</style>