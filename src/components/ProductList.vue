<template>
  <div class="pro_list">

     <div class="title">
       <img v-bind:src="class_img">
       <h1>{{class_title}}</h1>
     </div>
     
     <swiper :options="swiperOption" ref="mySwiper" >

      <!--  <ul ref="list" v-if="list.length>0"> -->

           <router-link tag="div" v-bind:to="{name:'pro_details',params:{'id':v.id,'cid':cid}}" v-for="v in product" :key="v.id" class="swiper-slide">

             <!-- <swiper-slide> -->
               <!-- <img :src="v.pro_img" alt=""> -->
               <!-- 懒加载图片 -->
               <img v-lazy="v.pro_img">
               <p><b>{{v.price|currency}}</b><del>{{v.old_price|currency}}</del></p>
               <h2>{{v.title}}</h2>
             <!-- </swiper-slide> -->

           </router-link>

         <!-- <li class="swiper-slide">
           <img src="static/images/pro_2.jpg" alt="">
           <p><b>¥88.0</b><del>¥108.0</del></p>
           <h2>2-美国/SUPER MILD沐浴露500ml</h2>
         </li>-->
     <!-- < -->

    <!--  <ul v-else>
       <li>商品上架中...</li>
     </ul> -->
    </swiper>
  </div>
</template>

<script>
// 滑动插件
// import 'swiper/dist/css/swiper.min.css';
// import Swiper from 'swiper';//导入js模块

import axios from 'axios' //ajax插件

import Vue from 'vue';
// vue-awesome-swiper
import  { swiper, swiperSlide } from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';
// Vue.use(VueAwesomeSwiper);

export default {
  //取父组件传过来的数据
  // props:['class_title','class_img']
  props:{
    class_title:{
      type:String, //设置类型
      default:'今日特价'//设置默认值
    },
    class_img:{
      type:String,
      default:'hot.png'
    },
    cid:{
      // type:new Number  https://www.jianshu.com/p/0c9e90eeba76
      type:Number
    },
    product:{
      //产品分类列表
      required:true
    }
  },
  data:function(){
     return {
        // swiper 配置
        swiperOption: {
          loop: false,
          autoplay: false,
          autoplayDisableOnInteraction: false,
          // loop : true,
          slidesPerView : 2.1,
          // loopedSlides :4
          height:"2rem"
        }
     }
  },
  created:function(){
    //现在分类对应的数据，在调用组件的时候，已经处理好了，直接取到就可以了
  },
  mounted:function () {
    //初始化,延迟0.2s秒后再启动插件，解决找一不元素的问题
    /*setTimeout(function(){
      // window.onload=function(){
        let mySwiper = new Swiper ('.swiper-container', {
          // Optional parameters
          slidesPerView: 2,
          spaceBetween: 5
        })
      // }
    }, 100)*/
    this.swiper.slideTo(1, 1500, false);
  },
  filters:{
    currency:function(val){
      return '¥'+val.toFixed(2);
    }
  },
  components:{
     swiper,
     swiperSlide
  },
  computed:{
      swiper() {
       return this.$refs.mySwiper.swiper;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pro_list{
    clear: both;
    margin-left: 2.53%;
    
    //标题
    div{
      &.title{
        height: 0.38rem;
        padding: 0.28rem 0;


        img{
          width: 0.3rem;
          height: 0.38rem;
          float: left;
        }

        h1{
         display: inline;
         padding-left: 0.14rem;
         font-size:0.28rem;
         font-weight: normal;
        }
      }
    }
  
    //列表图，文字
    div.swiper-container {
      // overflow: hidden;
      width: 100%;
      // max-height:4.69rem;

      .swiper-slide{
        width: 43.87%;
        float: left;
        margin-right: 1%;

        p{
          padding-top: 0.13rem;
          padding-bottom: 0.17rem;

          b{
            font-size:0.28rem;
            color:#e60012;
          
          }
          del{
            font-size:0.24rem;
            color:#666666;
            float: right;
            padding-right: 0.08rem;
          }
        }

        h2{
          font-size: 0.28rem;
          color:#666666;
          line-height:0.36rem;
          font-weight:normal;
        }
        
      }

    }
  }
</style>
