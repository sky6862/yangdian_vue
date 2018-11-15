<template>
  <div id="footer">
    <ul>
      <li>
        <router-link to="/">
            <i class="my-icon"></i>
            <h4>首页</h4>
        </router-link>
      </li>

      <li>
        <router-link to="/category">
          <i class="my-icon"></i>
          <h4>分类</h4>
        </router-link>
      </li>

      <li>
        <router-link to="/shop_cart">
          <i class="my-icon"></i>
          <h4>购物车</h4>
        </router-link>
      </li>

      <li>
        <router-link to="/me">
        <i class="my-icon"></i>
        <h4>我的</h4>
      </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #footer{
    width:100%;
    height:1.02rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#ffffff;
    border-top:2px solid #eeeeee;
    z-index:2;

    ul {
      width:100%;
      li{
        // display:inline-block;
        height:1.02rem;
        width:25%;
        float:left;
        text-align:center;
        padding-top:0.13rem;

        a{
          display:block;
          font-size:0.28rem;
          text-align:center;

          i{
            display:block;

            height:0.39rem;
            width: 0.42rem;

            // width:50%;
            // font-size:0.44rem;
            padding-bottom:0.05rem;
            // background:url("../../static/images/icon-menus.png");
            margin:0 auto;
            background-size: 2rem 1rem; /*图片是多大，就写多大，用rem表示*/
            
          }
          // 选中的路由样式
          &.active{
            color:#ff9900;
            // i{
            //   //选中时，换图片
            //   background-position: 0 -0.5rem;
            // }
          }
          h4{
            font-weight: normal;
            width: 100%;
            padding-top:0.05rem;
            font-size:0.28rem;
            text-align:center;
          }
        }

        &:nth-child(1){
          a {

            i{
              background-image:url("../../static/images/icon-menus.png");
              background-position: 0 0;
              // background-size: 2rem 1rem;
            }
            
            //选中时，换图片
            &.active{
              i{
                background-position: 0 -0.5rem;
              }
            } 

          }
        }

        &:nth-child(2){
          a {
            i{
              background-image:url("../../static/images/icon-menus.png");
              background-position: -1rem 0;
              // background-size: 2rem 1rem;
            }
            //选中时，换图片
            &.active{
              i{
                background-position: -1rem -0.5rem;
              }
            } 
          }
        }

        &:nth-child(3){
          a {
              i{
                background-image:url("../../static/images/icon-menus.png");
                background-position: -1.5rem 0;
                // background-size: 2rem 1rem;
               }
                //选中时，换图片
            &.active{
              i{
                background-position: -1.5rem -0.5rem;
              }
            } 
          }
        }

        &:nth-child(4){
          a {
            i{
                background-image:url("../../static/images/icon-menus.png");
                background-position: -0.5rem 0;
                // background-size: 2rem 1rem;
            }
            //选中时，换图片
            &.active{
              i{
                background-position: -0.5rem -0.5rem;
              }
            } 
          }
        }
      }
    }
  }

  /*导航选中时的样式*/
  
</style>
