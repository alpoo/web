<template>
    <div class="news">
        <div class="flex-center title wow fadeInDown" >News </div>
        <div class="new flex-center">
            <div class="box wow bounceIn">
                <div class="box-date wow fadeIn" data-wow-delay='400ms'>Jan.2021/1/20</div>
                <div class="box-img"></div>
                <div class="box-content">
                    <div class="content-title">Lorem ipsum dolor sit, quis eos repudiandae ipsa, ipsam, sed expedita.ipsam, sed expedita.ipsam, sed expedita.</div>
                    <div class="content-more flex-center">
                        
                        <img src="~image/more.png" alt="">Get More
                    </div>
                </div>
            </div>
            <div class="box wow bounceIn">
                <div class="box-date wow fadeIn" data-wow-delay='800ms'>Jan.2021/1/21</div>
            </div>
            <div class="box wow bounceIn">
                <div class="box-date wow fadeIn" data-wow-delay='1200ms'>Feb.2021/2/21</div>
            </div>
        </div>
       
    </div>
</template>
<script>
export default{
    name:'news',
     mounted(){
          new this.$wow.WOW({
             live:true
         }).init()
    },
}
</script>
<style>
.news .box{
    width: 400px;
    height: 500px;
    border:solid 1px #ccc;
    margin: 10px;
    border-radius: 20px;
    position: relative;
}
.news .box-date{
    width: 130px;
    height: 50px;
    background: #1661ab;
    border-radius: 10px;
    position: absolute;
    top: -35px;
    left: 20px;
    color: #fff;
    font-size: 18px;
    line-height: 50px;
    font-family: Comic Sans MS, 'Comic Sans MS', Arial, sans-serif;
}
.news .box-img{
    width: 100%;
    height: 330px;
    border-radius: 20px 20px 0 0;
    border-bottom:1px solid #ccc;
}
.news .box:hover{
    box-shadow: 0 0 8px #ccc;
    transform: translateY(-30px);
    border-bottom: solid 2px #1661ab;
}
.news .box-content{
    height: 170px;
    width: 100%;
    border-radius: 0 0 20px 20px;
    font-family: Comic Sans MS, 'Comic Sans MS', Arial, sans-serif;
}
.news .content-title{
    height: 120px;
    font-family: Comic Sans MS, 'Comic Sans MS', Arial, sans-serif;
    line-height: 40px;
}
.news .content-more img{
    width: 45px;
    height: 45px;
    animation:runX linear 1s infinite;
    margin-right: 20px;
}
</style>