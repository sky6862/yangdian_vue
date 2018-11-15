//iphone 5:320px ,设计稿 640px,960px
//iphone 6:375，设计稿：2x:750 
//假设，设计稿是 750
//写iphone 6,宽高除 750/375=2，得到实际大小
//三星：iphone 5，宽高除 750/320=2.34 得到实际大小
//...

//字体适配：动态计算font-size 大小，就是动调整rem大小。
(function (){
    document.addEventListener('DOMContentLoaded', function () {

    var html = document.documentElement;//html标签
    var windowWidth = html.clientWidth; //获得页面的宽度(就是手机屏幕的宽)
    html.style.fontSize = windowWidth /750*100 + 'px';//定义rem大小

    //设置html标签默认字体,注意放大了100倍，因为放大了100倍，px转为rem 的时候要缩小100倍。
    /*
        可以 iphone6 为例，6宽是375，设计稿是 750，375/750=0.5
        也就是说 html 中的 0.5px => 设计稿 1px
        font-size:0.5px; 1rem = 0.5px,不好计算，
        所以，比值放大100倍，如下,在iphone6中：

        body{
            font-size:50px; //0.5*100px = 50px; 1rem = 50px;
        }

        //在写代码的时候，设计稿，有多大，就写多大，把px转为rem表示就可以了。
        其中，px -> rem 处理：
        因为放大了100倍，px转为rem 的时候要缩小100倍(除以100).

        1px = 1/100rem px->rem 除以100。

        如：一个按钮 设计稿 字体是 30px;
        写代码的时候，转为rem，除以100就可以了，就是：30/100 = 0.3rem
    */
    }, false);

})();
// 这个750 就是根据设计稿的宽度来确定的，假如你的设计稿是640
// 那么 html.style.fontSize = windowWidth / 640*100 + 'px';