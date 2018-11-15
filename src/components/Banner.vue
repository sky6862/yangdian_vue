<template>
    <swiper :options="swiperOption" ref="mySwiper2">
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
            <img class="app-banner" :src="slide" alt="banner-pic">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
//使用的是 vue-awesome-swiper 2.6.7版本
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "bannerComponent",
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperSlides: {
      type: Array,
      required: true
    }
  },
  data:function() {
    return {
      swiperOption: {
        // 所有配置均为可选（同Swiper配置）
        autoplay:2300,
        speed:500,
        loop:true,
        autoplayDisableOnInteraction:false,
        pagination:'.swiper-pagination'
    
        // observer:true,//修改swiper自己或子元素时，自动初始化swiper
        // observeParents:true//修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  computed: {
    // // 获取swiper对象
    swiper:function() {
      return this.$refs.mySwiper2.swiper;
    }
  },
  mounted() {
    //页面进来时，切换到第几个，与computed里面的swiper一起使用
    this.swiper.slideTo(1, 1500, false);
  }
};
</script>

<style lang="scss" scoped>
  .app-banner {
    width: 100%;
    display: block;
    height: 5.4rem;
  }
  .swiper-pagination-bullet {
    width:0.2rem!important;
    height:0.2rem!important;
  }
</style>