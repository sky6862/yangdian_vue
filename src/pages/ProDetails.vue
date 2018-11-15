<template>
	<div class="pro_details">
		<!-- <Header>产品详细</Header> -->
		<div class="header-bar">
            <span class="icon icon-back" @click="$router.back()"></span>
            <div class="right">
                <span class="icon icon-cart" @click="go_cart"></span>
                <span class="icon icon-menu"></span>
            </div>
        </div>

		<div class="banner-box">
            <app-swiper :swiper-slides="pics"></app-swiper>
        </div>

        <div class="describe">
            <div class="desc-bar">
                <div class="title">id:{{pro_info.id}}-{{pro_info.title}}</div>
                <div class="store">
                    <span class="icon icon-star"></span>
                    收藏
                </div>
            </div>
            <div class="down">
                <div class="price-wrap">
                    <div class="now">￥{{pro_info.price}}.00</div>
                    <div class="before">￥998.00</div>
                </div>
                <div class="labels">
                    <div class="disc">
                        <span>6.5折</span>
                        <span>包邮</span>
                    </div>
                    <div class="features">
                        <span>正品货源</span>
                        <span>一件代发</span>
                        <span>全国直邮</span>
                        <span>售后无忧</span>
                    </div>
                </div>
            </div>
        </div>
		
		<!-- 使用子路由，实现选项卡，注意，这里路由的参数
			 传参数的时候，要使用name，如：name:'subdetai'
		 -->
        <div class="detail-box">
            <div class="tab">
                <!-- <router-link to="/pro_details/subDetail/1/1">商品详情</router-link>
                <router-link to="/pro_details/subEvaluate/1/1">买家口碑</router-link> --> 
                <router-link :to="{name:'subdetai',params:{'id':pro_info.id,'cid':cid}}">商品详情</router-link>
                <router-link :to="{name:'subevaluate',params:{'id':pro_info.id,'cid':cid}}">买家口碑</router-link>
            </div>
            <router-view></router-view>

        </div>
        <div class="pay-bar">
            <div class="total">
                总价：
                <span>￥0.00</span>
            </div>
            <div class="pay" @click="buyNow()">立即购买</div>
            <div class="add" @click="addShopCart()">加入购物车</div>
        </div>

        <div class="pay-msg" v-show="isWantToPay">
            <div class="mask"></div>
            <div class="pay-detail">
                <div class="icon icon-close" @click="isWantToPay=!isWantToPay"></div>
                <div class="product">
                    <img src="../../static/images/product-pic1.jpg" alt="">
                    <div class="desc">
                        <div class="price">￥445.00</div>
                        <div class="stock">库存123456件</div>
                        <div class="select">请选择商品属性</div>
                    </div>
                </div>
                <div class="num-wrap">
                    <span class="num-title">购买数量</span>
                    <div class="num-btn-group">
                        <span class="icon icon-reduce">-</span>
                        <input type="text" value="1">
                        <span class="icon icon-add">+</span>
                    </div>
                </div>
                <div class="size-wrap">
                    <h6>大小</h6>
                    <div class="size-list">
                        <label><input type="radio" checked name="size">
                            <span>1L</span>
                        </label>
                        <label><input type="radio" name="size">
                            <span>2L</span>
                        </label>
                        <label><input type="radio" name="size">
                            <span>3L</span>
                        </label>
                        <label><input type="radio" name="size">
                            <span>4L</span>
                        </label>

                    </div>
                </div>
                <div class="age-wrap">
                    <h6>年龄</h6>
                    <div class="age-list">
                        <label><input type="radio" checked name="age">
                            <span>5岁以下</span>
                        </label>
                        <label><input type="radio" name="age">
                            <span>3岁以下</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>   
        <!-- 产品详细页面end -->
	</div>
</template>

<script>
	import Header from "@/components/Header";
	import appSwiper from "@/components/Banner";

	export default{
		name:"home",
		components:{
			Header:Header,
			appSwiper:appSwiper
		},
		data:function(){
			return {
				pro_info:{}, //产品信息
				num:1, //默认产品数量
				// isShowDetail:true,
			    isWantToPay:false,//立即购买，加入购物 时，显示产品的选项
			    pics:[],
			    cid:null //产品cid
			}
		},
		created:function(){
			//得到产品id,对应的产品详细信息
			var pid = this.$route.params.id; //产品id
			var cid = this.$route.params.cid; //分类id
			this.cid = cid;
			// console.log('获取了产品id:',pid,"分类id",cid);

			var _this = this;
            
			//ajax数据
			this.$http.get('static/data/product.json')
				.then(function(ret){
					if(ret.data.length>0){
						//取分 当前分类下的所有产品
						var pro = ret.data;

						var class_pro = []; //分类对应的产品

						for(var k=0;k<pro.length;k++){
							if(pro[k].class_id==cid){
								class_pro = pro[k].data;
							}
						}

						//取产品 id 对应的数据
						for(var m=0;m<class_pro.length;m++){
							if(class_pro[m].id==pid){
								_this.pro_info = class_pro[m];
							}
						}
					}
				})
				.catch(function(error){
					console.log('error',error)
				});

				// 获取banner图片
				this.getPics();
		},//end
		methods:{
			add_cart:function(){
				//产品信息：this.pro_info ，前面已经取到了
				//再取变化的娄怕， 如数量，颜色，尺寸。。。
				var num = this.num;
				//加入
				localStorage.setItem("cart",JSON.stringify({"id":this.pro_info.id,"name":this.pro_info.title,"num":num}));
			},

			buyNow:function() {
			  // 立即购买
		      this.isWantToPay = true;
		    },
		    addShopCart:function() {
		      //加入购物车
		      this.isWantToPay = true;
		    },

		    getPics:function() {
		      //获取详细页面的banner图片
		      this.pics = [
		        "static/images/banner_pro.jpg",
		        "static/images/banner_pro.jpg",
		        "static/images/banner_pro.jpg",
		        "static/images/banner_pro.jpg",
		        "static/images/banner_pro.jpg"
		      ];
    		},
    		go_cart:function () {
    			this.$router.push('/shop_cart');
    		}
		}
	}
</script>

<style scoped lang="scss">
	@import "../style/proDetails.scss";
</style>