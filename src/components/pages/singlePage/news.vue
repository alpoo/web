<template>
<div>
        <div class="flex-center title wow fadeInDown" >News </div>
    <div class="news">
        <div class="box wow bounceIn" v-for="item in news" :key="item.id" @click="turnpage(item.id)">
            <div class="box-date wow fadeIn" data-wow-delay='400ms'>{{item.date || new Date().toString().split(/2021/)[0]}}</div>
            <div class="box-img"><img :src="require(`image/n${item.id}.png`)"/></div>
            <div class="box-content">
                <div class="content-title">{{item.title}}</div>
                <div class="content-more flex-center">
                    <img src="~image/more.png" alt=""><span>查看</span>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import news from 'static/news.js'
export default{
    name:'news',
    data(){
        return{
            news:news.news
        }
    },
     mounted(){
         console.log(new Date().toString().split(/2021/));
          new this.$wow.WOW({
             live:true
         }).init()
    },
    methods:{
        turnpage(id){
            this.$router.push({path:"/pageHome/newscontent",query:{id:id}})
        }
    }
}
</script>
<style >
.news{
    width: 70%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: flex-start;
    margin: 0 auto;
}
@media screen and (max-width:1740px) {
    .news{
    width: 80%;
    }
}
@media screen and (max-width:1500px) {
    .news{
    width: 85%;
    }
}
.news .box{
    width: 30%;
    height: 500px;
    margin: 50px auto;
    border:solid 1px #ccc;
    border-radius: 20px;
}
.news .box::after{
    content: 0;
}
.news .box :hover{
    cursor: pointer;
}

.news .box-date{
    width: 130px;
    height: 50px;
    background: #1661ab;
    border-radius: 10px;
    padding-left: 10px;
    position: absolute;
    top: -35px;
    left: 20px;
    color: #fff;
    font-size: 20px;
    line-height: 50px;
    font-family: Comic Sans MS, 'Comic Sans MS', Arial, sans-serif;
}
.news .box-img{
    width: 100%;
    height: 310px;
    border-radius: 20px 20px 0 0;
    border-bottom:1px solid #ccc;
}
.news .box-img img{
    border-radius: 20px 20px 0 0;
    background-size: contain;
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
    /* height: 120px; */
    font-family: Comic Sans MS, 'Comic Sans MS', Arial, sans-serif;
    line-height: 40px;
    font-size: 20px;
    padding: 10px;
}
.news .content-more img{
    width: 45px;
    height: 45px;
    animation:runX linear 1s infinite;
    margin-right: 20px;
}
</style>