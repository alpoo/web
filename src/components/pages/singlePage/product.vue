<template>
    <div>
        
        <div class="flex-center title wow fadeInDown" >
            OUR PRODUCTS
        </div>
        <div class="product-item wow flipInX flex-center" >
            <div class="img-box ">
                <img src="~image/product/GSC.jpg" alt="">
                <div class="excircle"></div>
                <div class="incircle"></div>
                <!-- <div class="mask">上海市用水定额管理系统</div> -->
            </div>
            <div class="product-content">
                <div class="product-title" style="text-align:left;font-size:23px;font-weight:bold">用水定额系统</div>
                <ul>
                    <li>通过系统建设，及时获得用水定额管理信息。</li>
                    <li>建立了用水数据支撑，利用基础信息管理、户籍管理、定额管理、抄表管理、账务管理等实施用水日常管理。</li>
                    <li>系统使用户准确掌握了用水单位用水情况动态。</li>
                    <li>及时向各级政府部门、社会公众发布相关用水信息。</li>
                </ul>
            </div>
        </div>

        <div class="product-item wow flipInX flex-center" >
            <div class="product-content">
                <div class="product-title" style="text-align:left;font-size:23px;font-weight:bold">自来水收费系统</div>
                <ul>
                    <li>优化了自来水收费的流程，线上线下配合处理。</li>
                    <li>简化收费工作一些繁杂事务，使业务员工作更加高效。</li>
                    <li>每月实时推送用户用水量，精准、高效处理相关问题。</li>
                </ul>
            </div>
            <div class="img-box">
                <img src="~image/product/SF.jpg" alt="">
                <div class="excircle"></div>
                <div class="incircle"></div>
                <div class="mask">金山自来水收费管理系统</div>
            </div>
        </div>
                <div>
            <div class="title flex-center" style="text-align:left;font-size:28px;font-weight:bold;color:#39393a;">上海市各区县用水定额系统</div>
            <div class="areas flex-center">
                <div class="img-box wow bounceIn">
                <img src="~image/product/JS.jpg" alt="">
                </div>
                <div class="img-box wow bounceIn">
                <img src="~image/product/QP.jpg" alt="">
                </div>
            </div>
            <div class="areas flex-center">
                <div class="img-box wow bounceIn">
                <img src="~image/product/LG.jpg" alt="">
                </div>
                <div class="img-box wow bounceIn">
                <img src="~image/product/CM.jpg" alt="">
                </div>
            </div>

        </div>
    </div>    
</template>

<script>
export default{
    name:'product',
    data(){
        return{}
    },
    mounted(){
          new this.$wow.WOW({
             live:true
         }).init()

    },
    methods:{
    }
}
</script>

<style scope>
.areas ::before{
    content:'';
    height: 50px;
    width: 50px;
    font-size: 15px;
    position: absolute;
    z-index: 400;
    background-size: contain;
}
.areas ::before:hover {
    transform: rotate(0deg);
}
.areas{
    height: 500px;
    width: 100%;
    background: #eee;
    background-image: url('~image/2.png');
    background-repeat: no-repeat;
    background-size: contain;
    padding-bottom: 30px;
}
.product-content li{ 
    list-style: none;
    font-size: 20px;
    line-height: 30px;
    width: 80%;
    margin: 0 auto;
    padding-top:15px ;
    position: relative;
}
.product-content li::before{
    position: absolute;
    content: '';
    width: 15px;
    height: 15px;
    top: 22px;
    left: -25px;
    background-image:linear-gradient(135deg,#007ccf,#fff);;
    border-radius: 50%;
}
.product-content{
    width:50%;
    height: 300px;
}
.product-title{
    width: 170px;
    margin: 0 auto;
}
.product-title:after{
  content: " ";
  display: block;
  position: absolute;
  height: 6px;
  width: 40px;
  border-bottom:solid 3px #1661ab;
}
.product-item{
  margin-bottom: 40px;
}
.headtitle{
    font-size: 30px;
    color:rgb(100, 97, 97);
    letter-spacing: 4px;
    font-weight: 600;
    display:inline-block;
}
.excircle{
    width: 30px;
    height: 30px;
    border-radius:15px;
    border:solid 1px #1661ab;
    position: absolute;
    top: -15px;
    left:-15px;
    background-color: #ffff;
}
.incircle{
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 10px;
    background-color: #1661ab;
    top:-5px;
    left: -5px;
}
.img-box{
    width:40vw;
    height: 400px;
    /* border: solid 1px #1661ab; */
    box-sizing: border-box;
    margin:0 auto;
    position: relative;
    box-shadow: -5px -5px 10px #ccc;
    background-image:linear-gradient(135deg,#d5d7da,#fff);
    /* background: rgba(245, 240, 240, 0.867); */
}
.img-box img{
    position: absolute;
    top: 20px;
    left:20px;
    width: 100%;
    height: 100%;
    border: solid 1px #ccc ;
}
.img-box img:hover{
    transform: scaleX(1.1);
    box-shadow: 5px 5px 5px #ccc;
    border: dotted 1px #282829;
}
.mask{
    position: absolute;
    bottom: 0;
    left:25%;
    background-color: rgb(79, 115, 184);
    height: 50px;
    width: 60%;
    opacity: 0;
    font-size: 15px;
    color: black;
    line-height: 50px;
}
.mask:hover{
    opacity: 0.7;
    color: black;
}
</style>