<template>
   <div>
        <Tab style="position:absolute;top:0;z-index:12"></Tab>
        <div class="index-btn">
            <a href='#indexHome'>
            <span>see More</span>
            <img src='~image/arrows_right.png'>
            </a>
        </div>
        <div class="index-effect flex-center">
            智慧无限 · 有预则立<br/>
            水资源管理者 · 无限可能
        </div>
        <square></square>
        <!-- 关于我们 -->
        <div id="indexHome">
            <div class="head flex-center">
            <h1>关于我们</h1>
            </div>
            <div class="flex-center" >
                <div class="about-item ">
                    <img class="wow fadeInLeft" style="z-index:10" src="~image/index-image/tech1.jpg" alt="">
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
            <div class="head flex-center">
                <h1>案例展示</h1>
            </div>
            <div class="index-cases flex-center">
                <!-- <swiper  :auto-update="true" ref="mySwiper" :options="swiperOptions">
                    <swiper-slide>Slide 1</swiper-slide>
                    <swiper-slide>Slide 2</swiper-slide>
                    <swiper-slide>Slide 3</swiper-slide>
                    <swiper-slide>Slide 4</swiper-slide>
                    <swiper-slide>Slide 5</swiper-slide>
                 <div class="swiper-pagination" slot="pagination"></div>
                </swiper>  -->
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
                        <div class="news-item  wow slideInLeft" data-wow-delay='200ms'>
                            <div class="news-item-content">
                                <div class="headline">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                                <div class="sketch">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                            </div >
                            <div class="news-item-date">
                                <div class="year">
                                    2021
                                </div>
                                <div class="month-day">
                                    4/16
                                </div>
                            </div >
                        </div>
                        <div class="news-item  wow slideInLeft" data-wow-delay='400ms'>
                            <div class="news-item-content">
                                <div class="headline">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                                <div class="sketch">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                            </div >
                            <div class="news-item-date">
                                <div class="year">2021</div>
                                <div class="month-day">3/20</div>
                            </div >
                        </div>
                    </div>
                    <div class="rownews flex-center">
                        <div class="news-item  wow slideInLeft" data-wow-delay='600ms'>
                            <div class="news-item-content">
                                <div class="headline">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                                <div class="sketch">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                            </div >
                            <div class="news-item-date">
                                <div class="year">
                                    2021
                                </div>
                                <div class="month-day">
                                    4/16
                                </div>
                            </div >
                        </div>
                        <div class="news-item  wow slideInLeft" data-wow-delay='800ms'>
                            <div class="news-item-content">
                                <div class="headline">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                                <div class="sketch">
                                   <a href="#">万头攒动火树银花之处不必寻我，如欲相见，我在各种悲喜交集处</a> 
                                </div>
                            </div >
                            <div class="news-item-date">
                                <div class="year">2021</div>
                                <div class="month-day">3/20</div>
                            </div >
                        </div>
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

// import 'swiper/swiper-bundle.min.css'
//   import { Swiper} from 'swiper';
import Tab from 'common/tab'
import Footer from 'common/footer'
import square from 'common/square'
// import {Swiper,SwiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'indexHome',
    components:{
        Footer,
        square,
        // Swiper,
        // SwiperSlide,
        Tab,
    },
    data(){
        return{
        i:1,
        navbarshow:false,
        activeIndex:"1-1",
        banners: [ '~image/1.png', '~image/more.png'],
        swiperOption: {
        pagination: {
            el: '.swiper-pagination'
        },
        },
        swiperOptions: {
            pagination: {
                el: '.swiper-pagination'
            },
        }
        }
    },
    mounted(){
        // this.swiper.slideTo(0, 1000, false)
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
.index-cases{
    width: 100%;
    height: 600px;
    background-color: #eee;
}
.swiper-container {
    width: 60vw;
    height: 400px;
    background: rgb(75, 105, 124);
     --swiper-pagination-color: #00ff33;/* 两种都可以 */
}  
.index-cases{
    font-size: 25px;
    font-weight: bold;
}
.index-about{
    margin-top: 100px;
    width: 100%;
    height: 700px;
    background: #eee;
    font-size: 21px;
    padding-top:40px ;
}
.card-box{
    width: 20vw;
    height: 500px;
    background: #fff;
    border-radius: 5px;
    margin:10px 30px;
    box-shadow: 0 0  10px 10px #ccc;
    position: relative;
}
.card-box i {
    font-size: 50px;
    position: absolute;
    left:50%;
    transform: translate(-50%,0);
}
.card-box:hover{
    border: solid 2px #1661ab;
}
.card-box img{
    position: absolute;
    top: 70px;
    left: 30%;
    width: 40%;
    height: 30%;
    text-align: center;
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

.index-btn{
    height: 60px;
    line-height: 60px;
    width: 280px;
    font-family: "Nunito", sans-serif;
    position: absolute;
    top: 80vh;
    left: 50vw;
    transform: translate(-50%,0);
    z-index: 3;
    border: solid 1px #ccc;
    border-radius: 40px;
    font-size: 20px;
    color: #fff;
    text-align: center;
}
.index-btn img{
    width: 30px;
    height: 30px;
    margin-left: 10px;
    vertical-align: middle;
    animation:runX linear 1s infinite;
}
.index-effect{
    position: absolute;
    top: 20%;
    z-index: 3;
    font-size: 25px;
    left: 50%;
    transform: translate(-50%,0);
    text-align: center;
    color: #fff;
    letter-spacing: 10px;
    line-height: 50px;
}
.about-item:first-child{
    height: 300px;
    padding: 50px 0 ;
    background-color: #ccc;
    flex: 5;
    position: relative;
}
.about-item:first-child img{
    position: absolute;
    left: 3%;
    top: 8%;
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
.rownews{
    height: 100px;
    margin: 20px 0;
}
.rownews .news-item{
    width: 43%;
    height: 100px;
    border: solid 2px #466d92;
    display: inline-block;
    margin-right:20px; 
    margin-left:20px; 
    border-radius: 2px;
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
    width: 35%;
}
.rownews .news-item .news-item-content{
    display: inline-block;
    height: 100px;
    width: 80%;
}
.rownews .news-item .news-item-content :hover{
    cursor: pointer;
    font-weight: bold;
}
.rownews .news-item .news-item-content .headline {
    width: 100%;
    display: inline-block;
}
.rownews .news-item .news-item-content a{
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
.rownews .news-item .news-item-content .headline a{
    padding-left: 5px;
    line-height: 60px;
    font-size: 20px;
    color:#1661ab;
} 
.rownews .news-item .news-item-content .sketch a{
    padding-left: 5px;
    line-height: 30px;
    color: rgb(102, 97, 97);
}
.rownews .news-item  .news-item-date{
    display: inline-block;
    height: 100px;
    width:20%;
    text-align: center;
    vertical-align: top;
}
.rownews .news-item .news-item-date .year{
    line-height: 60px;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
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
.index-content{
    width: 100%;
    height: 400px;
    margin: 200px 0;
    background: #00416A; 
    background: -webkit-linear-gradient(to bottom, #E4E5E6, #00416A); 
    background: linear-gradient(to bottom, #E4E5E6, #00416A); 
  /* background: rgb(69, 90, 139); */
    position: relative;
}
.index-content h1{
    position: relative;
    /* margin: 70px auto; */
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
    border-bottom:solid 3px #004e92 ;
}

</style>