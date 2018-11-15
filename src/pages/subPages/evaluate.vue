<template>
    <div class="evaluate">
        <div class="evals">
            <span class="on">全部评价</span>
            <span>好评</span>
            <span>差评</span>
            <span>晒单</span>
        </div>
        <div class="evals-list">
            <div class="item">
                <div class="title">
                    <h5>月色花香</h5>
                    <span>2015-10-03 21:47:13</span>
                </div>
                <div class="pic-list">
                    <img src="../../../static/images/evals-pic.jpg" alt="">
                    <img src="../../../static/images/evals-pic.jpg" alt="">
                    <img src="../../../static/images/evals-pic.jpg" alt="">
                </div>
                <div class="dialogue">
                    <div class="leave-msg">已经开始喝第二阶段的奶粉了，会继续支持德贝</div>
                    <div class="response">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给 您带来最极致的服务</div>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    <h5>月色花香</h5>
                    <span>2015-10-03 21:47:13</span>
                </div>
                <div class="pic-list">
                    <img src="../../../static/images/evals-pic.jpg" alt="">
                </div>
                <div class="dialogue">
                    <div class="leave-msg">已经开始喝第二阶段的奶粉了，会继续支持德贝</div>
                    <div class="response">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给 您带来最极致的服务</div>
                </div>
            </div>
            <div class="item">
                <div class="title">
                    <h5>月色花香</h5>
                    <span>2015-10-03 21:47:13</span>
                </div>
                <div class="pic-list">
                    <img src="../../../static/images/evals-pic.jpg" alt="">
                    <img src="../../../static/images/evals-pic.jpg" alt="">
                </div>
                <div class="dialogue">
                    <div class="leave-msg">已经开始喝第二阶段的奶粉了，会继续支持德贝</div>
                    <div class="response">管理员：亲爱的用户，已返现到您的会员账户，感谢你对德贝的支持，我们会继续给 您带来最极致的服务</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "../../style/common.scss";

.evaluate {
  padding: 0 .3rem;
  overflow: hidden;
  border-top: 2px solid #eee;
  .evals {
    height: .7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #eee;
    span {
      display: block;
      width: 1.35rem;
      height: .5rem;
      border-radius: .25rem;
      font-size: .24rem;
      /*px*/
      text-align: center;
      line-height: .5rem;
      color: $cfff;
      background-color: $c999;
      &.on {
        background-color: $mainc;
      }
    }
  }
  .evals-list {
    overflow: hidden;
    .title {
      height: .6rem;
      line-height: .6rem;
      h5 {
        float: left;
        color: $mainc;
        font-size: .24rem;
        /*px*/
      }
      span {
        float: right;
        color: $c999;
        font-size: .18rem;
        /*px*/
      }
    }
    .pic-list {
      overflow: hidden;
      img {
        width: 1.5rem;
        height: 1.5rem;
        float: left;
        margin-right: .1rem;
      }
    }
    .dialogue {
      overflow: hidden;
      font-size: .18rem;
      /*px*/
      .leave-msg {
        line-height: .38rem;
        color: $c999;
      }
      .response {
        color: $c666;
        background-color: #ddd;
        border-radius: 12px;
        line-height: .26rem;
        padding: .15rem .1rem;
      }
    }
  }
}
</style>