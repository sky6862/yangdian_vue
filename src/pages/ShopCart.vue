<template>
	<div class="shopCart">
		<!-- 头部 -->
		<Header></Header>
        
		<!-- 内容 -->
		<div class="content">
    
            <div class="shop-list">
				<!-- is-del 删除按钮,ref 自定义属性，在vue中用来查找dom节点/组件的 -->
	
            	<!-- <div class="item" 
            	v-for="(v,index) in shop_cart" 
            	v-bind:ref="'list_'+index"
            	:key="index"> -->
                <!-- v-touch 默认生成div标签，可以加tag=‘a’来指定 
为了致，方便处理，购物车列表中的操作，都有v-touch 里面的事件
                -->
        		<v-touch 
                    v-if="shop_cart.length>0"
                    
	        		class="item"
	            	v-for="(v,index) in shop_cart" 
	            	v-bind:ref="'list_'+index"
	            	:key="index"
	        		v-on:swipeleft="show_del(index)"
	        		v-on:swiperight="hide_del(index)"
                    :swipe-options="{direction: 'horizontal'}"
                    >
                <!-- :swipe-options="{direction: 'horizontal'}" 解决无法上下滑动的问题 -->
	                <div class="store">
	                    <span class="icon icon-store"></span>
	                    <h4>{{v.store}}</h4>
	                </div>

	                <div class="pro-detail">

	                    <label class="check-wrap">
	                        <input type="checkbox" class="checkbox" :value="v.id">
	                        <i></i>
	                    </label>

	                    <!-- <div class="pic">
	                        <img alt="product-pic" :src="v.pro_img">
	                    </div> -->
                        <v-touch tag="div" class="pic" v-on:tap.prevent="show_pro(v.id,v.cid)">
                            <img alt="product-pic" :src="v.pro_img">
                        </v-touch>

	                    <div class="desc">
	                        <!-- <div class="title">
	                           {{v.title}}...
	                            <span>19cm</span>
	                        </div> -->
                            
                            <v-touch tag="div" class="title" v-on:tap.prevent="show_pro(v.id,v.cid)">
                                {{v.title}}...
                                <span>19cm</span>
                            </v-touch>

	                        <div class="num-wrap">
	                            <span class="icon icon-reduce" @click.stop.prevent="v.num=v.num-1">-</span>
	                            <input type="number" :value="v.num">
	                            <span class="icon icon-add" @click.stop.prevent="v.num=v.num+1">+</span>
	                        </div>
	                    </div>

	                    <div class="price">￥{{v.price}}.00</div>
                        <!-- // <div class="del-item" @click="del_item(v.id)">删除</div> -->
	                    <v-touch class="del-item" v-on:tap="del_item(v.id)">删除</v-touch>
	                </div>

                </v-touch>
                
            </div>

            <div class="empty">
                <img src="static/images/icon-shop.png" alt="">
                <h3>购物车还是空的快去逛逛吧~</h3>
            </div>
        </div>

        <div class="pay-bar">
            <label class="check-all">
                <input type="checkbox">
                <i></i>
                全选
            </label>
            <label class="check-edit">
                <input type="checkbox">
                <i></i>
                编辑
            </label>
            <div class="total">
                <div class="total-price">合计：￥100.0</div>
                <span>（不含运费）</span>
            </div>
            <div class="pay">去结算</div>
        </div>

		<!-- 底部 -->
		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
	import FooterMenu from '@/components/FooterMenu' //底部
	import Header from '@/components/Header' //头
    // import ShopCart from '../../static/data/shopCart.js'  //模拟的购物车数据

    import Vue from 'vue'; //引入Vue
    import VueTouch from 'vue-touch'; //手势插件库
    Vue.use(VueTouch, {name: 'v-touch'}); //使用插件，并设置指令的名称

    // console.log(VueTouch);

	export default{
		name:"shop_cart",
		components:{
			FooterMenu,
			// FooterMenu:FooterMenu
			Header
		},
		data:function () {
			return {
                shop_cart:[]
			}
		},
        created:function () {
            // this.shop_cart = ShopCart;//放在这里，解决页面加载过快，数据没有更新的问题
        },
		mounted:function () {
			// console.log(ShopCart);
            var _this = this;
            this.$http.get('static/data/shopCart.json')
            .then(function(ret){
                // console.log(ret);
                _this.shop_cart = ret.data;
            })
            .catch(function(error){
                console.log(error)
            });
		},
		methods:{
			show_del:function (m) {
				// m 表示操作的是哪一个内容
				/*显示删除*/
				// 获取滑动的dom/组件（v-touch）
				var obj = this.$refs;
				//obj = {list_0: Array(1), list_1: Array(1), list_2: Array(1), list_3: Array(1)}
				// console.log(obj."list_"+m);
				// console.log(obj["list_"+m][0].$el);
				// obj["list_"+m][0].$el.className="item is-del";
				obj["list_"+m][0].$el.className+=" is-del";

			},
			hide_del:function (m) {
				/*隐藏删除*/
				var obj = this.$refs;
				obj["list_"+m][0].$el.className="item";
			},
            del_item:function(pid){
                for(var i=0;i<this.shop_cart.length;i++){
                    if(this.shop_cart[i].id==pid){
                        this.shop_cart.splice(i,1);
                    }
                }
            },
            show_pro:function(pro_id,class_id){
                // console.log(pro_id,class_id);
                this.$router.push({name:"pro_details",params:{'id':pro_id,'cid':class_id}});
            },
            handleScroll (e) { 
              console.log(e)
            }
		}	
	}
</script>

<style lang="scss" scoped>
@import "../style/common.scss";
.content {
    overflow: hidden;
    background-color: #fafafa;
    min-height: 11.1rem;
    padding-top:0.89rem;
}

.shop-list {
    overflow: hidden;
    // padding-top: 0.13rem;
    padding-bottom: 2.2rem;
    .item {

        position: relative;
        overflow: hidden;
        padding: 0.35rem 0.52rem;

        &.is-del {
            background-color: #f7f7f7;
            padding-right: 1.20rem;
            .check-wrap {
                display: none;
            }

            .del-item {
                display: block;
                width: .96rem;
                height: 2.1rem;
                position: absolute;
                color: $cfff;
                font-size: .32rem;
                /*px*/
                line-height: 2.1rem;
                text-align: center;
                right: -0px;
                bottom: -0px;
                background-color: $mainc;
            }
        }
    }
    .store {
        height: .82rem;
        line-height: .82rem;
        .icon {
            width: .38rem;
            height: .35rem;
            background-size: .38rem .35rem;
            background-repeat: no-repeat;
            display: block;
            float: left;
            margin-top: .23rem;
            margin-right: .24rem;
            &.icon-store {
                background-image: url('../../static/images/icon-store.png');
            }
        }
        h4 {
            font-size: .28rem;
            color: $c999;
            font-weight:normal;
        }
    }

    .pro-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .del-item {
            display: none;
        }
        .title {
            font-size: .32rem;
            /*px*/
            color: $c333;
            span {
                font-size: .28rem;
                /*px*/
                color: $c999;
            }
        }
        .price {
            font-size: .32rem;
            /*px*/
            color: #000;
        }
        .pic {
            width: 1.57rem;
            height: 1.57rem;
            overflow: hidden;
            background-color: $cfff;
        }
        img {
            display: block;
            max-width: 100%;
            max-height: 100%;
        }
        .desc {
            max-width: 3rem;
            overflow: hidden;
            height: 1.57rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .num-wrap {
            font-size: .32rem;
            /*px*/
            color: $c666;
            border: 2px solid #ccc;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .icon {
                display: block;
                width: 33%;
                height: .41rem;
                text-align: center;
                font-size: .38rem;
            }
            input {
                width: 33%;
                height: .45rem;
                border-top: none;
                border-bottom: none;
                outline: none;
                text-align: center;
                line-height: .45rem;
                border-radius: 0;
                background-color: transparent;
                border-left: 2px solid #ccc;
                border-right: 2px solid #ccc;
            }
        }
    }
}

.checkbox {
    display: none;
    
    &+i {
        display: block;
        width: .38rem;
        height: .38rem;
        border: 2px solid $mainc;
        border-radius: 50%;
        position: relative;
    }
    &:checked+i::after {
        content: '';
        width: .4rem;
        height: .4rem;
        top: -0.08rem;
        right: -0.1rem;
        position: absolute;
        background-image: url('../../static/images/icon-checked.png');
        background-size: .4rem .4rem;
        background-repeat: no-repeat;
    }
}

.check-all,
.check-edit {
    input {
        display: none;
        &+i {
            display: block;
            width: .5rem;
            height: .5rem;
            background-image: url('../../static/images/icon-check-all.png');
            background-size: .5rem 1rem;
        }
        &:checked+i {
            background-position-y: -0.5rem;
        }
    }
}

.check-edit input+i {
    background-image: url('../../static/images/icon-check-edit.png');
}


.pay-bar {
    position: fixed;
    width: 7.5rem;
    height: 1.13rem;
    bottom: 1.02rem;
    background-color: #fff;
    left: 0;
    border-top: 2px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
        display: block;
        width: 1.3rem;
        text-align: center;
        font-size: .28rem;
        /*px*/
        color: $c666;
        i {
            margin: 0 auto 0.07rem;
        }
    }
    .total {
        width: 2.3rem;
        font-size: .24rem;
        /*px*/
        color: $c999;
        .total-price {
            margin-bottom: 0.05rem;
        }
    }
    .pay {
        width: 2.3rem;
        height: 100%;
        background-color: #ff5500;
        font-size: .38rem;
        /*px*/
        color: $cfff;
        text-align: center;
        line-height: 1.13rem;
    }
}

.empty {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 2.35rem;
    height: 2.35rem;
    img {
        width: .83rem;
        height: .88rem;
        margin: 0 auto .32rem;
        display: block;
    }
    h3 {
        line-height: .42rem;
        font-size: .32rem;
        /*px*/
        color: $c333;
        text-align: center;
    }
}

</style>