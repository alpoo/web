<template>
    <div>
        <div class="flex-center title wow fadeInDown">LatestNews</div>
        <div class="content">
            <div class="connect-title">新闻资讯</div>
            <div class="news_title">{{news.title || "暂无标题"}}</div>
            <div class="date">发布时间：{{news.date}}</div>
        </div>
        <div class="specific">
            <div v-html="news.content"></div>
        </div>
    </div>
</template>
<script>
import data from '../../../static/news'
export default{
    name:'news_content',
    data(){
        return{
        }
    },
    computed:{
        id(){
            return this.$route.query.id
        },
        news(){
            return data["news"].filter(item => {
                return item.id == this.id
            })[0]
        }
    },
    created(){
    },
    methods:{
        btnclick(){
        }
    }
}
</script>
<style>
.specific{
    padding: 20px;
    width:60%;
    background: rgb(240, 236, 236);
    margin: 15px auto;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 1px;
}
.news_title{
    position: absolute;
    font-size: 24px;
    top: 55px;
    font-weight: bold;
    color:rgb(42, 42, 41)
}
.content .connect-title{
    position: absolute;
    margin-left: 0;
}
.date{
    position: absolute;
    font-size: 20px;
    top: 100px;
}
.content{
    height: 130px;
    width: 60%;
    margin: 0 auto;
    border-bottom:solid 1px #ccc ;
    position: relative;
}
</style>