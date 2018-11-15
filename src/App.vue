<template>
  <div id="container">
    <!-- <router-view/> -->
    <transition name="fade" mode="out-in">
    <!-- <transition :name="transitionName">  -->
      <keep-alive>
        <router-view></router-view>
          <!-- <router-view class="transitionBody"></router-view> -->
      </keep-alive>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      transitionName: 'transitionLeft'
    }
  },
  '$route' (to, from) { 
   // const arr = ['/shop_cart','/category','/me'];
   // const compare = arr.indexOf(to.path)>arr.indexOf(from.path);
   // this.transitionName = compare ? 'transitionLeft' : 'transitionRight';
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'transitionRight' : 'transitionLeft'
  } 
}
</script>

<!-- 增加 lang="scss" 属性，才能识别sass(.scss) -->
<style lang="scss">
  /*在入口中引入全局样式*/
  /*@import url('./style/base.css');*/
  //scss中，px->rem插件无效，可以定义一个方法来实现
  @function px2rem( $px ){
      @return ($px/100)+rem;
  }
  
  // app最大的容器
  #container{
    max-width:750px;
    width: 100%;
    margin:0 auto;
    background-color: #fafafa;
  }
   
  // 动画样式,要写在 使用transition组件的地方,不能放全局中
  /*路由切换动画*/
  /*进入时*/
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }

  .fade-enter-to,.fade-leave{
    opacity: 1,
  }

  .fade-enter-active,.fade-leave-active{
    transition: opacity .2s;
  }

  // 离开时
  // .fade-leave{
  //   opacity: 1;
  // }

  // .fade-leave-to{
  //   opacity: 0,
  // }
  
  // 切换动画
  .transitionBody{
   transition: all 0.3s ease; /*定义动画的时间和过渡效果*/
  }
   
  .transitionLeft-enter,
  .transitionRight-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0); 
     /*当左滑进入右滑进入过渡动画*/
  }
   
  .transitionLeft-leave-active,
  .transitionRight-enter {
    -webkit-transform: translate(-100%, 0); 
    transform: translate(-100%, 0); 
  }
  
</style>
