<template>
	<div class="category">
		<!-- 搜索:自定义一个属性，传递背景颜色过去：:bgcolor="'#ff9900'"-->
		<Search :bgcolor="'#ff9900'"></Search>

		<!-- 主体内容 -->
		<!-- 内容 -->
	    <div class="con_list">
	      <!-- 左 -->
	      <aside>
	        <ul>
                <!-- 每点一个分类名称，在右则显示分类对应的列表，要传递一个分类id过去，才能取对应的数据 -->
	            <li v-for="(v,k) in cate_list" :key="v.id" @click="getList(v.id,k+1)"
	            v-bind:class="{active:isActive==k+1}">
	               {{v.class_name}}
	            </li>
	        </ul>
	      </aside>

	      <!-- 右：分类对应的产品 -->
	      <ul>
	        <!-- <li v-for="v in list" :key="v.id">
	          <img v-lazy="v.pro_img" alt="">
	          <h2>{{v.title}}</h2>
	        </li> -->

            <router-link tag="li" 
	            v-for="v in list"
	            v-bind:class="{active:isActive==v.k+1}" 
	            :key="v.id"
            	v-bind:to="{name:'pro_details',params:{'id':v.id,'cid':curr_cid}}">
            	<img v-lazy="v.pro_img" alt="">
	            <h2>{{v.title}}</h2>
            </router-link>

	       <!-- 
	       <li>
	         <img src="static/images/c-list-2.jpg" alt="">
	         <h2>奶粉</h2>
	       </li>
	      -->
	      </ul>

	    </div>

		<!-- 底部 -->
		<FooterMenu></FooterMenu>
	</div>
</template>

<script>
	//导入底部，搜索组件
	import FooterMenu from "@/components/FooterMenu.vue"
	import Search from "@/components/Search.vue"

	// 倒入axios
	import axios from "axios"

	export default{
		name:"category",
		//定义一个组件，来自导入的组件
		components:{
			FooterMenu:FooterMenu,
			Search
		},
		data:function () {
			return {
				cate_list:[],
				isActive:1, //当前是第几个选项卡，默认第1个li选中
				list:[], //分类，对应的产品列表,默认为空
				curr_cid:null //当前选择的分类id
			}
		},
		created:function(){
			var _this = this;
			//獲取分類信息
			axios.get("static/data/class_info.json")
			.then(function(result){
				// console.log(result)
				if(result.data.length>0){
					_this.cate_list = result.data;
				}
			})
			.catch(function(error){
				console.log('error:',error)
			});
		},
		methods:{
			//获取分类对应的产品列表
			getList:function (id,num) {
				// id 分类id,num 当前是弟几个选项卡
				// console.log(id);
				this.isActive = num;//设置 你点击哪个，哪个就选中
				this.curr_cid =id; //当前分类id 

				//发送ajax请求，获取分类对应的产品数据
				var _this = this;
				axios.get('static/data/product.json')
				.then(function (result) {
					if(result.data.length>0){
						var product = result.data;//所有 产品列表
						for(var i=0;i<product.length;i++){
							//当前分类对应的产品
							if(product[i].class_id==id){
								_this.list = product[i].data;
							}
						}
					}
					// console.log(_this.list)
				})
				.catch(function (error) {
					console.log('error',error)
				});
			}
		},
		mounted:function(){
			//当页面渲染完成,显示分类id为1,第1个li对应的数据
			this.getList(1,1);
		}
	}
</script>

<style lang="scss" scoped>
	.con_list{
    overflow:hidden;
    padding:1.02rem 0;

    aside{
      width:31.2%;
      float:left;
      font-size:0.28rem;

      >ul{
        width:100%;
         li{
            padding:0.325rem 0;
            text-align:center;

            //第1个选中(,&:first-child),当前选中
            &.active{
              color:#ff9900;
              border-left:0.1rem solid #1d84a7;
              box-sizing:border-box;
            }
         }
      }
    }

    >ul{
      width:67.2%;
      float:right;
      padding-left:2.6%;
      box-sizing: border-box;
      margin-top:0.21rem;

      li{
         width:47.4%;
         float:left;
         margin-right:2.6%;
         box-sizing:border-box;
         border:0.03rem solid #1d84a7;
         border-radius:0.1rem;
         margin-bottom:0.23rem;

         img{
           padding:0.14rem 0.27rem 0 0.32rem;
           width:80px;
           height:80px;
         }

         h2{
            line-height:0.46rem;
            font-size:0.24rem;
            background:#1d84a7;
            text-align:center;
            color:#ffffff;
            font-weight:normal;
         }
      }
    }
  }
</style>