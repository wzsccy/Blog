<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import loading from "./components/loading.vue";
import { ref } from "vue";
import zifu from "@/components/zifu.vue";



const p = ref(0);

const tid = setInterval(() => {
  if (p.value < 1) p.value += 0.05;
  else clearInterval(tid);
}, 500);
// Your script here
</script>

<template>
  <div class="zi">
    <zifu></zifu>
  </div>
  <!-- <loading :procudure="p" /> -->
  <div class="header">
        <!--头部-->
        <img id="hi1" src="@/assets/2.jpg">
  </div>
 
    <div class="dh">
        <!--导航栏 -->
        <ul>
            <li><a href="我的blog.html#">首页</a></li>
            <li><a href="favourite.html#">favourite</a></li>
            <li><a href="我的空间.html#">我的空间</a></li>
            <li><a href="我的收藏.html#">我的收藏</a></li>
            <li><a href="近期收获.html#">近期收获</a></li>
        </ul>
    </div>
    <div class="donghua">
        <!--轮播-->
        <div id="photo">
            <img src="@/assets/th.jpg">
            <img src="@/assets/OIP-C.jpg">
            <img src="@/assets/OIP-C (1).jpg">
            <img src="@/assets/下载.jpg">
            <img src="@/assets/th.jpg">
        </div>
    </div>
    <div class="zhuti"><!--主体部分-->
        <div class="zhuti">
            <div id="zhuti-left"><!--主体左侧新闻部分-->
                <table><!--新闻表格-->
                    <tr>
                        <img src="@/assets/1.png">
                    </tr>
                    <h4>学习参考</h4>
                    <hr size="3" color="rgb(24, 24, 88)">
                    <a href="https://cn.vuejs.org/">
                        <p>
                            学博客，就到vue，简单易懂，一学就会！
                        </p>
                    </a>
                </table>
            </div>
          </div>
      </div>
    <div id="" class="footer">
        <!--页尾-->
        <img id="fi1" src="@/assets/1.jpg"><!--尾页右下角图片-->
        <p><!--尾页文字-->
           读书破万卷，下笔如有神！
        </p>
        <p>
            以梦为马，不负韶华！
        </p>
    </div>
</template>

<style scoped>
.zi{
  position: absolute; 
  bottom: 40%;
  font-family:楷体;
  font-size: 50px;
  left: 960px;
  
}
* {
    /*全局选择器*/
    margin: 0px;/*外边距*/

    padding: 0px;/*内边距*/
}
 
body {
    /*主体*/
    color: rgb(42, 61, 79);
    font-family: 楷体;/*字体样式*/
    background-color: rgb(235, 225, 225);/*背景颜色*/
}
 
.header {
    /*头部*/
    width: 1920px;/*宽度*/
    height: 150px;/*高度*/
}
 
#hi1 {
    /*头部图片*/
    width: 150px;/*宽度*/
    height: 100px;/*高度*/
    right:0px;
    position: fixed;
    bottom: 50%;
}
 
.dh ul {
    /*导航栏*/
    width: 1539px;
    padding: 0px;/*内边距*/
    height: 30px;/*高度*/
    margin-bottom: 30px;/*外边距*/
    padding: 0%;
}
 
.dh ul li {/*导航栏行的设置*/
    height: 30px;
    width: 16.45%;
    list-style: none;/*列表样式*/
    float: left;/*左浮动*/
    display: inline;
    font: 0.9em;
  
}
 
.dh ul li a {/*导航栏链接设置*/
    text-align: center;/*文本位置*/
    position: absolute;
    color: white;
    font-size: larger;/*字体大小*/
    font-family: 楷体;
    width: 100%;
    margin: 0px;
    text-decoration: none;/*列表样式*/
    display: block;
    background-color: rgb(87, 156, 241);
    line-height: 60px;
    border-bottom: 0px solid rgb(168, 164, 172);
    position: fixed;
    left: 0;
    
}
 
.dh ul li a:hover {    /*鼠标划过导航栏时*/
    color: rgb(0, 0, 0);
    background-color: rgb(37, 84, 155);
    border-bottom: 3px solid rgb(16, 4, 28);
    
}
 
.footer {
    /*尾部*/
    margin-top: 10px;
    clear: both;/*清楚浮动*/
    width: 100%;
    height: 70px;
    background-color: rgb(87, 156, 241);
    color: rgb(99, 34, 34);
    font: italic 14px/20px 宋体;/*文字样式*/
    text-align: center;
    position: fixed;
    bottom: 0;
   left: 0%;
}
 
.footer p{
    margin-top: 10px;
}
 
#fi1 {
    /*尾部图片*/
    width: 100px;
    height: 70px;
    float: right;/*右浮动*/
    padding: 0px;/*内边距*/
}
 
/*主体部分*/
 
.donghua {
    /*轮播*/
    border-radius: 5px;/*边框弧度*/
    width: 60%;
    height: 500px;
    left: 960px;
    position: flex;
    overflow: hidden;/*图片隐藏*/
    margin: 10px 200px 0px 200px;
}
 
#photo {/*轮播图片的总设置*/
    display: block;/*块展示*/
    width: 6000px;
    height: 500px;
    animation: bj 8s linear infinite;/*动画设置*/
    /*动画*/
}
 
#photo img {
    float: left;
    width: 1200px;
    height: 100%;
    padding: 0px 0px 0px 0px;
}
 
@keyframes bj {/*轮播图动画*/
 
    0%,
    20% {
        margin-left: 0px;
    }
 
    25%,
    40% {
        margin-left: -1200px;
    }
 
    45%,
    60% {
        margin-left: -2400px;
    }
 
    65%,
    80% {
        margin-left: -3600px;
    }
 
    85%,
    100% {
        margin-left: -4800px;
    }
}
 
.zhuti {/*主体内容*/
    margin: 20px 100px 0px 100px;
}
 
#zhuti-left {/*主体左边部分*/
    float: left;
    padding: 50px;
    width: 600px;
    background-color: rgb(210, 200, 170);
}
 
 
#zhuti-left img:hover{
    transform: scale(1.1);
}
 
#zhuti-left a {/*左边超链接*/
    text-decoration: none;
    color: rgb(61, 87, 109);
}
 
#zhuti-left a:hover{
    color: rgb(211, 35, 35);
}
 
#zhuti-left p {/*左边文字设置*/
    letter-spacing: 2px;/*字间距*/
    text-indent: 2em;
    line-height: 1.5em;
}
</style>
