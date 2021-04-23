<template>
   <div>
        <Tab style="position:absolute;top:0;z-index:12"></Tab>
        <div class="index-btn">
            <a href='#indexHome'>
            <div >more</div>
            <img src='~image/jt.png'>
            </a>
        </div>
        <div class="index-effect flex-center">
            <div class="logo1 wow slideInLeft">智慧无限 · 有预则立</div>
            <div class="logo2 wow slideInLeft" data-wow-delay="0.2s">水资源管理者 · 无限可能</div>
        </div>
        <square></square>
        <!-- 关于我们 -->
        <div id="indexHome">
            <div class="head flex-center">
            <h1>关于我们</h1>
            </div>
            <div class="flex-center" >
                <div class="about-item ">
                    <img class="wow fadeInLeft" style="z-index:10" src="~image/index-image/index-1.png" alt="">
                </div>
                <div class="about-item  wow slideInRight">
                    <div class="item-box flex-center">
                        <div class="item-img">
                            <img src="~image/company.png"/>
                        </div>
                        <div class="item-content">
                            创意无限，源生动力。
                        </div>
                    </div>
                    <div class="item-box flex-center">
                        <div class="item-img">
                            <img src="~image/team.png"/>
                        </div>
                        <div class="item-content">
                            团结合作，共创双赢。
                        </div>
                    </div>
                    <div class="item-box flex-center">
                        <div class="item-img">
                            <img src="~image/culture.png"/>
                        </div>
                        <div class="item-content">
                            科技是第一生产力。
                        </div>
                    </div>
                </div>
            </div>
            <div class="index-about"> 
              <h1 class="flex-center">您是否还在为水资源管理、收费而困扰？</h1>
              <div class="flex-center">
                 <div class="card-box wow bounceIn" data-wow-delay='200ms'>
                          <i class="fa fa-quote-left"></i>
                       <div>
                           <img src="~image/t1.png">
                       </div>
                       <div class="card-text">
                           <div class="card-text-title">专业技术</div>
                           <div class="card-text-content">多年的水资源管理专业团队，为您的企业定制专属水管理模式。</div>
                       </div>
                 </div>
                 <div class="card-box wow bounceIn" data-wow-delay='200ms'>
                       <i class="fa fa-quote-left"></i>
                       <div>
                           <img src="~image/t2.png">
                       </div>
                       <div class="card-text">
                           <div class="card-text-title">经验丰富</div>
                           <div class="card-text-content">设计与开发上海市各区县自来水定额管理系统、金山区收费系统,现已正式投入线上使用。</div>
                       </div>
                 </div>
                 <div class="card-box wow bounceIn" data-wow-delay='200ms'>
                       <i class="fa fa-quote-left"></i>
                        <div>
                           <img src="~image/t3.png">
                       </div>
                        <div class="card-text">
                           <div class="card-text-title">费用合理</div>
                           <div class="card-text-content">定制软件根据开发企业所需功能模块，节省开发费用。</div>
                       </div>
                 </div>
              </div>
            </div>
        </div>
        <!-- 案例展示 -->
        <div>
            <div class="head flex-center" cl>
                <h1>案例展示</h1>
            </div>
            <div class="index-cases flex-center ">
                <div class="swiper-container wow flipInX">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="~image/product/GSC.jpg"></div> 
                        <div class="swiper-slide"><img src="~image/product/CM.jpg"></div> 
                        <div class="swiper-slide"><img src="~image/product/QP.jpg"></div> 
                        <div class="swiper-slide"><img src="~image/product/JS.jpg"></div> 
                        <div class="swiper-slide"><img src="~image/product/LG.jpg"></div> 
                    </div>
                    <div class="swiper-top">
                        定额用水管理系统
                    </div>
                    <div class="swiper-pagination"></div>
                     <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
        <!-- 行业资讯 -->
        <div>
            <div class="head flex-center" style="margin-bottom:300px;">
            <h1>行业资讯</h1>
            </div>
            <div class="index-content">
                <div class="news-content wow fadeIn">
                    <div class="rownews flex-center">
                        <router-link :to='{path:"/pageHome/newscontent",query:{id:1}}'>
                            <div class="news-item  wow slideInLeft" data-wow-delay='200ms'>
                                <div class="news-item-content">
                                    <div class="headline">
                                    从软功夫到硬实力，做应用软件开发“排头兵” 
                                    </div>
                                    <div class="sketch">
                                    作为中国软件服务十大领军企业之一，始终致力于为中大型企业客户提供软件与数字技
                                    </div>
                                </div >
                                <div class="news-item-date">
                                    <div class="year">2021</div>
                                    <div class="month-day">4/16</div>
                                </div >
                            </div>
                        </router-link>
                        <router-link :to='{path:"/pageHome/newscontent",query:{id:2}}'>
                        <div class="news-item  wow slideInLeft" data-wow-delay='400ms'>
                            <div class="news-item-content">
                                <div class="headline">自主软件开发商借助向日葵坐席实现高质量远程售后服务</div>
                                <div class="sketch">如何定义一款成功的软件？用户量大？覆盖区域广？利润高?</div>
                            </div >
                            <div class="news-item-date">
                                <div class="year">2021</div>
                                <div class="month-day">3/20</div>
                            </div >
                        </div>
                        </router-link>
                    </div>
                    <div class="rownews flex-center">
                        <router-link :to='{path:"/pageHome/newscontent",query:{id:3}}'>
                            <div class="news-item  wow slideInLeft" data-wow-delay='600ms'>
                                <div class="news-item-content">
                                    <div class="headline">互融云IM即时通讯应用软件开发：多场景搭配轻松营造沟通无碍产品体验！</div>
                                    <div class="sketch">而不管是通过线上的即时通讯社交应用软件也好，还是与身边的朋友直接交流也罢，这都是人们保持正常生活的一种重要形式。</div>
                                </div>
                                <div class="news-item-date">
                                    <div class="year">2021</div>
                                    <div class="month-day">4/16</div>
                                </div>
                            </div>
                        </router-link>
                        <router-link :to='{path:"/pageHome/newscontent",query:{id:4}}'>
                            <div class="news-item  wow slideInLeft" data-wow-delay='800ms'>
                                <div class="news-item-content">
                                    <div class="headline">国内中小企业管理如何实施ERP系统软件</div>
                                    <div class="sketch">市场经济的变动，消费结构的升级，制造业业务的转型发展，国内企业内部管理存在很大的变化，随之面临的优胜劣汰日益激烈，但越来越多的企业运用信息化建设以及良好的管理模式赢得了生存与发展，其中离不开ERP软件的应用和实施。<br/><br/>ERP软件系统的引入是有利于企业的管理水平和完善经营模式，但是其中的选择也需要企业制定正确的规划，根据自身需要选择恰当的软件产品，国内适合中小企业的软件仁和云ERP属于比较不错的，是国内首家软硬件结合的软件，价格功能都比较符合当下企业内部经营管理。<br/><br/>近日新华网报道的一篇《中国的数字经济发展理念，让世界点赞》中提到“数字经济是全球未来的发展方向”。而如今的疫情加剧了人工智能、5G等新技术、新业态、新平台的发展，所以对于中小企业来说，数字化变革和创新也成为了企业信息化战略的重要的一环。接下来，就中小企业实施ERP软件这个方面来具体展开。<br/><br/>1、什么是中小企业<br/><br/>中小企业，根据百度百科可知是指在国内依法设立，人员规模、经营规模相对较小的企业，包括中型企业、小型企业和微型企业。此类企业一般可由单个人或者多数人提供资金组成，雇用人数与营业额都不大，因此在经理上大多数是由业主直接管理，受外界干扰较少。<br/><br/>2、中小企业在市场上的作用<br/><br/>根据相关数据报告，中国中小企业占</div>
                                </div >
                                <div class="news-item-date">
                                    <div class="year">2021</div>
                                    <div class="month-day">3/20</div>
                                </div >
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- 合作伙伴 -->
        <div>
            <div class="head flex-center">
            <h1>合作伙伴</h1>
            </div>
            <div class="partners">
                <div class="item wow fadeIn" data-wow-delay='200ms'>
                    <img :src="require(`image/partners/${i}.jpg`)">
                </div>
                <div class="item wow fadeIn" data-wow-delay='200ms'>
                    <img :src="require(`image/partners/${i+1}.jpg`)">
                </div>
                <div class="item wow fadeIn" data-wow-delay='200ms'>
                    <img :src="require(`image/partners/${i+2}.jpg`)">
                </div>
                <div class="item wow fadeIn" data-wow-delay='200ms'>
                    <img :src="require(`image/partners/${i+3}.jpg`)">
                </div>
            </div>
        </div>
        <Footer></Footer>

   </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js"
import "swiper/swiper-bundle.min.css"
import Tab from 'common/tab'
import Footer from 'common/footer'
import square from 'common/square'
export default {
    name: 'indexHome',
    components:{
        Footer,
        square,
        Tab,
    },
    data(){
        return{
        i:1,
        navbarshow:false,
        activeIndex:"1-1",
        banners: [ '~image/1.png', '~image/more.png'],
        }
    },
    mounted(){
        new Swiper(".swiper-container",{
            loop:true, //循环
            pagination: { //分页符
                el: '.swiper-pagination',
            },
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
            el: '.swiper-scrollbar',
            },
        })
        setInterval(() => {
        this.i++;
        this.i = this.i >5 ? 1 : this.i
         }, 2000);
        new this.$wow.WOW({
                live:true
        }).init()
    },
    computed: {
    swiper() {
        return this.$refs.mySwiper.$swiper
        }
    },
    methods:{
    }
}
</script>

<style>
.swiper-top{
    height: 60px;
    width: 300px;
    line-height: 60px;
    text-align: center;
    position: absolute;
    z-index: 888;
    bottom: 30px;
    left: 50%;
    opacity: 0;
    transform: translate(-50%,0);
    background-image:linear-gradient(135deg,#9c9ea0,#fff);
}
.swiper-container:hover .swiper-top{
    opacity: 1;
}

.swiper-container {
    width: 60%;
    height: 500px;
    background: rgb(75, 105, 124);
    position: relative;
     --swiper-pagination-color: #1661ab;/* 两种都可以 */
}  
.index-about{
    margin-top: 100px;
    width: 100%;
    height: 700px;
    background-image: url('~image/index-image/5.png');
    font-size: 21px;
    padding-top:40px ;
}
.card-box{
    width: 20vw;
    height: 500px;
    background: #fff;
    border-radius: 5px;
    margin:10px 30px;
    position: relative;
    box-shadow: 0 0  10px 10px #ccc;
}
.card-box i {
    font-size: 50px;
    position: absolute;
    left:50%;
    transform: translate(-50%,0);
}
.card-box:hover{
    border: dotted 1px #abccdd;
}
.card-box img{
    position: absolute;
    top: 60px;
    left: 30%;
    width: 25%;
    height: 20%;
    padding: 35px;
    background-color: rgb(233, 230, 230);
    border-radius: 50%;
    text-align: center;
    transition: border-radius .1s linear;
}
.card-box:hover img{
    border-radius:5%
}
.card-text{
    width: 100%;
    height: calc(60% - 100px);
    position: absolute;
    bottom:0;
    text-align: center;
    border-top:solid 2px #ccc;
    padding-top:20px;
}
.card-text-title{
    font-size: 30px;
    font-weight: bold;
}
.card-text-content{
    line-height: 40px;
    padding-top:10px;
    font-size: 20px;
}
.index-cases{
    width: 100%;
    height: 700px;
    background-image:linear-gradient(45deg,#fff,#ccc);
    background-image: #eee;
    font-size: 25px;
    font-weight: bold;
}
.index-btn{
    height: 70px;
    line-height: 30px;
    width: 70px;
    font-family: "Nunito", sans-serif;
    position: absolute;
    top: 90vh;
    left: 50vw;
    padding-top: 15px;
    box-sizing: border-box;
    transform: translate(-50%,0);
    z-index: 3;
    border: solid 1px #ccc;
    border-radius: 50%;
    font-size: 18px;
    color: #fff;
    text-align: center;
    font-weight: 100;
}
.index-btn img{
    width: 20px;
    height: 20px;
    animation:runY linear 1s infinite;
}
.logo1{
    position: absolute;
    z-index: 3;
    font-size: 45px;
    color: #fff;
    letter-spacing: 10px;
    top: 35%;
    left: 20%;
}
.logo2{
    position: absolute;
    z-index: 3;
    font-size: 30px;
    color: #fff;
    letter-spacing: 10px;
    top: 55%;
    left: 35%; 
}
.about-item:first-child{
    height: 300px;
    padding: 50px 0 ;
    /* background-color: #ccc; */
    flex: 5;
    position: relative;
}
.about-item:first-child img{
    width:70%;
    position: absolute;
    left: 15%;
    bottom: 10%;
    animation: move 2s infinite  linear ;
}
.about-item:first-child:hover{
    transform: scaleY(1.2);
}
@keyframes move{
    0%{
        transform: translateY(-15%);
    }
    50%{
        transform: translateY(10%);
    }
    75%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(-15%);
    }
}
.about-item:nth-child(2){
    height: 500px;
    flex:5;
    position: relative;
}
.about-item .item-box {
    position: absolute;
    left: 60%;
    width: 55%;
}
.about-item .item-box .item-img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    /* border:solid 1px cornflowerblue; */
    background: rgb(246, 246, 247);
    display: inline-block;
    vertical-align: middle;
}
.about-item .item-box:before{
    font-size: 30px;
    height: 30px;
    width: 100px;
    position: absolute;
    font-weight: bold;
}
.about-item .item-box:nth-child(1):before{
    top:6%;
    left: 45%;
    content: 'company';
}
.about-item .item-box:nth-child(2):before{
    top:6%;
    left: 40%;
    content: 'team';
}
.about-item .item-box:nth-child(3):before{
    top:30%;
    left: 45%;
    content: 'technology ';
}
.about-item .item-box:hover:before{
    color: #1661ab;
}
.about-item .item-box .item-img:hover{
    background: #1661ab;
}

.about-item .item-box .item-content{
    width: 60%;
    height: 100px;
    display: inline-block;
    vertical-align: middle;
    line-height: 100px;
    font-size: 23px;
    font-weight: bold;
    text-align: left;
    margin-left: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
@media screen and (max-width: 1480px){
    .about-item .item-box .item-content{
        line-height: 90px;
        font-size: 20px;
    }
    .card-box{
        width: 25%;
    }
}
.about-item .item-box:nth-child(3) .item-content{
    margin-top:55px;
}
.about-item .item-box .item-img img{
    height: 70%;
    width: 70%;
    margin: 20px;
}
.about-item .item-box:nth-child(1){
    top: -15%;
    left: 10%;
}
.about-item .item-box:nth-child(2){
    top: 30%;
    left:40%;
}
.about-item .item-box:nth-child(3){
    top: 77%;
    left: 10%;
}
.about-item:nth-child(2):before{
    content: '';
    position: absolute;
    top: 0;
    left: -12%;
    height: 98%;
    width:60%;
    border:28px solid #e1e1e1;
    display: inline-block;
    border-radius: 50%;
    border-top: none;
    border-left: none;
    border-bottom: none;
    z-index: -12;
}
.index-content{
    width: 100%;
    height: 400px;
    background: #00416A; 
    background: -webkit-linear-gradient(to bottom, #E4E5E6, #00416A); 
    background: linear-gradient(to bottom, #E4E5E6, #00416A); 
    position: relative;
}
.rownews{
    width: 100%;
}
.rownews a{
    width: 100%;
    margin: 30px;
}
.rownews .news-item{
    height: 100px;
    width: 100%;
    border: solid 2px #466d92;
    display: inline-block;
    border-radius: 2px;
    background: mediuseagreen;
}

.rownews .news-item:before {
    content: '';
    height: 100px;
    width:0;
    opacity:0.6;
    background-color: #1661ab;
    position: absolute;
    transition: width 200ms linear;
}
.rownews .news-item:hover:before{
    width:calc(38% - 30px);
}
.rownews .news-item .news-item-content{
    display: inline-block;
    width: 80%;
    line-height: 60px;
}
.rownews .news-item .news-item-content :hover{
    cursor: pointer;
    font-weight: bold;
}
.rownews .news-item .news-item-content .headline {
    height: 60px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #00416A;
}
.rownews .news-item .news-item-content .sketch{
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #0c0c0c;
}
.rownews .news-item  .news-item-date{
    display: inline-block;
    height: 100px;
    width:20%;
    text-align: center;
    vertical-align: top;
    color:#0c0c0c;
}
.rownews .news-item .news-item-date .year{
    line-height: 60px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    color:#1661ab;
}
.rownews .news-item .news-item-date .month-day{
    font-size: 17px;
    line-height: 30px;
}
.news-content{
    width: 70%;
    height: 400px;
    background-color:#eee;
    position: absolute;
    padding-top:80px;
    top: -220px;
    left: 15%;
    box-shadow: 0px 0px 15px rgb(155, 153, 153);
}
.partners{
    height: 100px;
    width:70%;
    display: flex;
    margin: 20px auto;
}
.partners .item{
    margin: 5px;
    border:solid 1px #ccc;
}
.partners .item img{
    width: 100%;
    height: 100%;
}
.partners .item :hover{
    transform: scale(1.01);
    box-shadow: 0 0 8px 5px #ccc;
}

.index-intro{
    height: 30vh;
    width: 100%;
    position: absolute;
    top: 60vh;
}

.head h1{
    position: relative;
    height: 300px;
    line-height: 300px;
    margin: 0 auto;
}
.head h1::before{
    content: '';
    height: 20px;
    width: 80px;
    position: absolute;
    top: 53%;
    border-bottom:solid 3px #004e92;
}

</style>